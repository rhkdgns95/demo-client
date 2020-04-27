import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ManagerRoutes from './Routes/ManagerRoutes';
import withHocApp from './Hocs/withHocApp';

const App: React.FC = () => <AppPresenter />;

const AppPresenter = () => (
	<BrowserRouter>
		{/* <div>hi</div> */}
		<ManagerRoutes />
	</BrowserRouter>
);

export default withHocApp(App);
