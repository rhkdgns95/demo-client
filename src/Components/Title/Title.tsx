import React from 'react';
import { useHocAppContext } from '../../Hocs/withHocApp';
import { useHocManagerContext } from '../../Hocs/withHocManager';

const Title = () => {
	const { pageTitle } = useHocAppContext();
	const { name } = useHocManagerContext();
	return (
		<h5>
			pageTitle:
			{pageTitle} / name:
			{name}
		</h5>
	);
};

export default Title;
