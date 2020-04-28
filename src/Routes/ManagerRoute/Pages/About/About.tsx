import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

const About: React.FC<IProps> = () => {
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
		</>
	);
};

export default About;
