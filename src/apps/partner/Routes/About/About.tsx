import React from 'react';
import { usePartnerContext } from '../../PartnerStore';

const About = () => {
	const { home } = usePartnerContext();
	const { name } = home;
	return (
		<div>
			hello About
			<p>Name: {name}</p>
		</div>
	);
};

export default About;
