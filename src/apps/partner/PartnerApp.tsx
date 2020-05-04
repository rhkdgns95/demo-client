import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import { withPartner } from './PartnerStore';

const PartnerApp = () => (
	<>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} exact />
		</Switch>
	</>
);

export default withPartner(PartnerApp);
