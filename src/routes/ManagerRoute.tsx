import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withHocManager from '../hocs/withHocManager';
// import Home from '../containers/manager/Home';
// import About from '../containers/manager/About';
/* 코드 스플릿팅 (참고: https://flaviocopes.com/react-code-splitting/) */
const Home = React.lazy(() => import('../containers/manager/Home'));
const About = React.lazy(() => import('../containers/manager/About'));

const ManagerRoute: React.FC = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Redirect from="*" to="/" />
		</Switch>
	</Suspense>
);

export default withHocManager(ManagerRoute);
