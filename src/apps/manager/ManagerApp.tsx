import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withManager } from './ManagerStore';
// import Home from '../containers/manager/Home';
// import About from '../containers/manager/About';
/* 코드 스플릿팅 (참고: https://flaviocopes.com/react-code-splitting/) */
const Home = React.lazy(() => import('./Routes/Home'));
const About = React.lazy(() => import('./Routes/About'));

const ManagerApp: React.FC = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Redirect from="*" to="/" />
		</Switch>
	</Suspense>
);

export default withManager(ManagerApp);
