import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable, Operation } from 'apollo-link';
import { TokenRefreshLink } from 'apollo-link-token-refresh';

const uri = 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn';
const refreshUri = 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
	uri,
	credentials: 'include',
});
const request = async (operation: Operation) => {
	// accessToken이 있는경우만 아래를 실행할 것.
	operation.setContext({
		headers: {
			'X-JID': `bearer ACCESS_TOKE_NAME`,
		},
	});
};

const requestLink = new ApolloLink(
	(operation: Operation, forward) =>
		new Observable((observer) => {
			let handle: any;
			Promise.resolve(operation)
				.then(request)
				.then(() => {
					handle = forward(operation).subscribe({
						next: observer.next.bind(observer),
						error: observer.error.bind(observer),
						complete: observer.complete.bind(observer),
					});
				})
				.catch(observer.error.bind(observer));

			return () => {
				if (handle) handle.unsubscribe();
			};
		})
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		console.log('graphqlErrors: ', graphQLErrors);
		console.log('networkError: ', networkError);
	}
});
/**
 *  refreshTokenLink:
 *  - 새로운 accessToken을 요청(token이 존재하고, accessToken의 만료일이 지난경우만 요청함)
 */
const refreshTokenLink = new TokenRefreshLink({
	isTokenValidOrUndefined: (): boolean => {
		console.log('RefreshTokenLink - 1');
		return false;
	},
	fetchAccessToken: () => {
		// 새로운 accessToken을 요청함.
		console.log('RefreshTokenLink - 2');
		return fetch(refreshUri, {
			method: 'POST',
			credentials: 'include',
		});
	},
	handleFetch: (accessToken: string): void => {
		// AccessToken을 업데이트 하는 곳,
		console.log('RefreshTokenLink - 3');
		return undefined;
	},
	handleError: (err: any) => {
		console.log('refresh token is invalid. try to relogin: ', err);
	},
});

const client = new ApolloClient({
	cache,
	link: ApolloLink.from([httpLink, requestLink, refreshTokenLink, errorLink]),
});

export default client;
