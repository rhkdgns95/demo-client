import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ManagerApp from './apps/manager';
import { withAppHoc } from './AppStore';
// import PartnerApp from './apps/partner/PartnerApp';
import ManagerApp from './apps/manager';
// const ManagerRoute = React.lazy(() => import('./routes/ManagerRoute'));
// const LoggedOutRoute = React.lazy(() => import('./routes/LoggedOutRoute'));

const App: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => (
	<BrowserRouter>{!isLoggedIn ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
);

/**
 *  로그인의 경우,
 *  4개의 앱으로 분리
 */
// const LoggedIn = () => <PartnerApp />;
const LoggedIn = () => <ManagerApp />;

// 로그아웃의 경우,
const LoggedOut = () => <>hello world</>;

export default withAppHoc(App);
