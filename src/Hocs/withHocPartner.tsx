import React, { createContext, useContext } from 'react';

interface IContext {}
const InitContext: IContext = {};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const useHocPartnerContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	return {
		value: {},
	};
};

const withHocPartner = (WrappedComponent: React.FC): React.FC => {
	const Hoc = () => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useHocPartnerContext };
export default withHocPartner;
