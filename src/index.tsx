import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import { ThemeProvider } from './styles/typed-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import client from './apollo';

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyles />
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
