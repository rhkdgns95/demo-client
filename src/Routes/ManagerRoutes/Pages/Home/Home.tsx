import React from 'react';
import { useHocManagerContext } from '../../../../Hocs/withHocManager';
import { useHocAppContext } from '../../../../Hocs/withHocApp';
import Title from '../../../../Components/Title/Title';

interface IProps {}

const Home: React.FC<IProps> = () => {
	const { pageTitle, onChangeTitle } = useHocAppContext();
	const { name } = useHocManagerContext();
	return (
		<>
			<button onClick={onChangeTitle} type="button">
				change
			</button>
			<p>
				pageTitle:
				{pageTitle}
			</p>
			<h1>
				Manager:
				{name}
			</h1>
			<div>Home</div>
			<Title />
		</>
	);
};

export default Home;
