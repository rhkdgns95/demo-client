import React from 'react';
import { useTestContext } from '../Test';

/* eslint-disable */

const Text = () => {
	console.log('useTestContext: ', useTestContext);
	const { name, onChangeValue } = useTestContext();
	return (
		<div>
			{name}
			<button onClick={() => onChangeValue(`${new Date()} + ok`)}>Click</button>
		</div>
	);
};

export default Text;
