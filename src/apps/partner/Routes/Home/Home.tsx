import React from 'react';
import { usePartnerContext } from '../../PartnerStore';

const Home = () => {
	const {
		common,
		home: { onChangeName, name },
	} = usePartnerContext();
	console.log('common: ', common);
	console.log('name: ', name);

	return (
		<div>
			Partner Home
			<span>
				name:
				{name}
			</span>
			<p>
				<button type="submit" onClick={() => onChangeName(`${new Date()}`)}>
					Change Name
				</button>
			</p>
		</div>
	);
};

export default Home;
