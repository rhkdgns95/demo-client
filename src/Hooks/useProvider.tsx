import React from '../src/hooks/node_modules/react';

export interface IContext {}
export interface IValue {}
interface IProviderArguments {
	useFetch: () => {
		value: IValue;
	};
	initContext: IContext;
}
const useProvider = (args: IProviderArguments) => {
	const { useFetch, initContext } = args;

	const Context: React.Context<IContext> = React.createContext(initContext);
	const useContext = (): IContext => React.useContext<IContext>(Context);
	const Provider: React.FC = ({ children }) => (
		<Context.Provider {...useFetch()}>{children}</Context.Provider>
	);

	return {
		Provider,
		useContext,
	};
};

export default useProvider;
