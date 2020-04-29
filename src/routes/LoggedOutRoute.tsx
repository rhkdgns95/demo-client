import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../containers/loggedOut/Home'));

interface IProps {}

const LoggedOutRoute: React.FC<IProps> = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<Switch>
			<Route path="/" component={Home} exact />
			<Redirect from="*" to="/" />
		</Switch>
	</Suspense>
);

export default LoggedOutRoute;
