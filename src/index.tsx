import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Styles/typed-components';
import theme from './Styles/theme';
import GlobalStyles from './Styles/GlobalStyles';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>,
	document.getElementById('root')
);
