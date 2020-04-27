import React, { createContext, useContext, useState } from 'react';

interface IContext {
	pageTitle: string;
	onChangeTitle: () => void;
}
const InitContext: IContext = {
	pageTitle: '',
	onChangeTitle: () => undefined,
};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const useHocAppContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	const [pageTitle, setPageTitle] = useState<string>('init_Title');
	const onChangeTitle = () => {
		setPageTitle(`${new Date()}`);
	};
	return {
		value: {
			pageTitle,
			onChangeTitle,
		},
	};
};

const withHocApp = (WrappedComponent: React.FC): React.FC => {
	const Hoc = () => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useHocAppContext };
export default withHocApp;
