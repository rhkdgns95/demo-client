import React from 'react';
import { useHocAppContext } from '../../withApp';
import { useManagerHocContext } from '../../apps/manager/withManager';

const Title = () => {
	const { pageTitle } = useHocAppContext();
	const {
		all: { name },
	} = useManagerHocContext();
	return (
		<h5>
			pageTitle:
			{pageTitle}/ name:
			{name}
		</h5>
	);
};

export default Title;
