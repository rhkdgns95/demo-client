import React, { createContext, useContext } from 'react';

interface IContext {}
const InitContext: IContext = {};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const usePartnerHocContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	return {
		value: {},
	};
};

const withPartner = (WrappedComponent: React.FC): React.FC => {
	const Hoc = () => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { usePartnerHocContext };
export default withPartner;
