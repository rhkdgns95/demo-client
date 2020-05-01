import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
	query AllPosts($first: Int!) {
		allPosts(first: $first) {
			id
			createdAt
			title
		}
	}
`;
