import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAllPostsQuery } from '../../../../generated/graphql';
import { useAppContext } from '../../../../hocs/withApp';
import Title from '../../../../components/Title';
import { useManagerAppContext } from '../../../../hocs/withManager';

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
	const { pageTitle, onChangeTitle } = useAppContext();
	const { common, home } = useManagerAppContext();
	const { name } = common;
	const { age: homeAge, name: homeName, onChangeAge, onChangeName } = home;
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
			{homeName}
			homeAge:
			{homeAge}
			<button type="button" onClick={() => onChangeName()}>
				이름변경(home속성)
			</button>
			<button type="button" onClick={() => onChangeAge(homeAge + 1)}>
				나이변경(home속성)
			</button>
			<button type="button" onClick={onChangeTitle}>
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
