import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import withHocApp from './hocs/withHocApp';
import ManagerRoute from './routes/ManagerRoute';
import LoggedOutRoute from './routes/LoggedOutRoute';
// const ManagerRoute = React.lazy(() => import('./routes/ManagerRoute'));
// const LoggedOutRoute = React.lazy(() => import('./routes/LoggedOutRoute'));

const App: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => (
	<BrowserRouter>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
);

/**
 *  로그인의 경우,
 *  4개의 앱으로 분리
 */
const LoggedIn = () => <ManagerRoute />;

// 로그아웃의 경우,
const LoggedOut = () => <LoggedOutRoute />;

export default withHocApp(App);
