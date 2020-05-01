import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAllPostsQuery } from '../../../../generated/graphql';
import { useHocAppContext } from '../../../../withApp';
import { useManagerHocContext } from '../../withManager';
import Title from '../../../../components/Title';

interface IProps {}

const GetPosts = () => {
	const { data, loading } = useAllPostsQuery({ variables: { first: 10 } });
	return (
		<>
			{loading && <p>loading...</p>}
			{!loading && data && <div>{JSON.stringify(data)}</div>}
		</>
	);
};

const Home: React.FC<IProps> = () => {
	const { pageTitle, onChangeTitle } = useHocAppContext();
	const { all, home } = useManagerHocContext();
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
