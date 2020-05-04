import React from 'react';
import { useManagerAppContext } from '../../hocs/withManager';
import { useAppContext } from '../../AppStore';

const Title = () => {
	const { pageTitle } = useAppContext();
	const { name } = useManagerAppContext().common;
	return (
		<h5>
			pageTitle:
			{pageTitle}/ name:
			{name}
		</h5>
	);
};

export default Title;
