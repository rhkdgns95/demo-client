import React, { createContext, useContext } from 'react';
import AppStore, { IAppContext } from '../stores/AppStore';

const InitContext: IAppContext = AppStore.getInitAppContext();

const Context: React.Context<IAppContext> = createContext<IAppContext>(
	InitContext
);
const useAppContext = () => useContext<IAppContext>(Context);

const withApp = (WrappedComponent: React.FC<any>): React.FC => {
	const Hoc = () => (
		<Context.Provider {...AppStore.useFetch()}>
			<WrappedComponent isLoggedIn={AppStore.useFetch().value.isLoggedIn} />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useAppContext };
export default withApp;
