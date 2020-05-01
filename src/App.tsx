import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ManagerApp } from './apps/manager/ManagerApp';
import withApp from './withApp';
// const ManagerRoute = React.lazy(() => import('./routes/ManagerRoute'));
// const LoggedOutRoute = React.lazy(() => import('./routes/LoggedOutRoute'));

const App: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => (
	<BrowserRouter>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
);

/**
 *  로그인의 경우,
 *  4개의 앱으로 분리
 */
const LoggedIn = () => <ManagerApp />;

// 로그아웃의 경우,
const LoggedOut = () => <>hello world</>;

export default withApp(App);
