import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import withHocManager from '../../Hocs/withHocManager';

const RoutePresenter = () => (
	<Switch>
		<Route path="/" component={Home} exact />
		<Route path="/about" component={About} />
		<Redirect from="*" to="/" />
	</Switch>
);

export default withHocManager(RoutePresenter);
