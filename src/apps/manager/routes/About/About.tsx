import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useManagerAppContext } from '../../../../hocs/withManager';
import './About.css';

interface IProps {}

const About: React.FC<IProps> = () => {
	const { common, home } = useManagerAppContext();
	
	console.log('home: ', home);
	const { onChangeName } = common;
	useEffect(() => {
		return () => {
			console.log('about 페이지를 떠났음');
		};
	}, []);

	return (
		<>
			<h1>Manger</h1>
			<div>about</div>
			<Link to="/">Home</Link>
			<p>
				<button type="button" onClick={() => onChangeName(`${new Date()}`)}>
					change title
				</button>
			</p>
		</>
	);
};

export default About;
