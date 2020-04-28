import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHocAppContext } from '../../../../Hocs/withHocApp';
import Title from '../../../../Components/Title/Title';
import { useHocManagerContext } from '../../../../Hocs/withHocManager';
import { GET_POSTS } from '../../Queries/getPost';

interface IProps {}

const GetPosts = () => {
	const { data, loading } = useQuery(GET_POSTS, {
		variables: {
			first: 3,
		},
	});
	console.log('DATA: ', data);
	return (
		<>
			{loading && <p>loading...</p>}
			{!loading && data && <div>{JSON.stringify(data)}</div>}
		</>
	);
};

const Home: React.FC<IProps> = () => {
	const { pageTitle, onChangeTitle } = useHocAppContext();
	const { all, home } = useHocManagerContext();
	const { name } = all;

	console.log('useFetchHome: ', home);

	useEffect(() => {
		return () => {
			/**
			 *
			 */
			console.log('Home 떠남');
			// home.onInit();
		};
	}, []);

	return (
		<>
			homeName:
			{home.name}
			homeAge:
			{home.age}
			<button type="button" onClick={home.onChangeName}>
				이름변경(home속성)
			</button>
			<button type="button" onClick={() => home.onChangeAge(home.age + 1)}>
				나이변경(home속성)
			</button>
			<button onClick={onChangeTitle} type="button">
				change(App속성)
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
			<Link to="/about">About</Link>
			<GetPosts />
		</>
	);
};

export default Home;
