import React, { createContext, useContext } from 'react';

interface IContext {
	name: string;
}
const InitContext: IContext = {
	name: 'manager',
};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const useHocManagerContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	const name = 'manager';
	return {
		value: {
			name,
		},
	};
};

const withHocManager = (WrappedComponent: React.FC): React.FC => {
	const Hoc: React.FC = (props) => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent {...props} />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useHocManagerContext };
export default withHocManager;
