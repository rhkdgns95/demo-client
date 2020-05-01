import React, { createContext, useContext, useState } from 'react';

interface IContext {
	isLoggedIn: boolean;
	pageTitle: string;
	onChangeTitle: () => void;
}
const InitContext: IContext = {
	isLoggedIn: false,
	pageTitle: '',
	onChangeTitle: () => undefined,
};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const useHocAppContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	const [pageTitle, setPageTitle] = useState<string>('init_Title');
	const [isLoggedIn] = useState<boolean>(true);

	const onChangeTitle = () => {
		setPageTitle(`${new Date()}`);
	};
	return {
		value: {
			isLoggedIn,
			pageTitle,
			onChangeTitle,
		},
	};
};

const withApp = (WrappedComponent: React.FC<any>): React.FC => {
	const Hoc = () => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent isLoggedIn={useFetch().value.isLoggedIn} />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useHocAppContext };
export default withApp;
