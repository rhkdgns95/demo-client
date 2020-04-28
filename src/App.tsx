import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ManagerRoutes from './Routes/ManagerRoute';
import withHocApp from './Hocs/withHocApp';

// <예정> Login 과정
const App: React.FC = () => <AppPresenter />;

const AppPresenter = () => (
	<BrowserRouter>
		{/* <div>hi</div> */}
		<ManagerRoutes />
	</BrowserRouter>
);

export default withHocApp(App);
