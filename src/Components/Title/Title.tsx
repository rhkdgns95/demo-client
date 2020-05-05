import React from 'react';
import { useAppContext } from '../../AppStore';
import { useManagerContext } from '../../apps/manager/ManagerStore';

const Title = () => {
	const { pageTitle } = useAppContext();
	const { name } = useManagerContext().common;
	return (
		<h5>
			pageTitle:
			{pageTitle}/ name:
			{name}
		</h5>
	);
};

export default Title;
