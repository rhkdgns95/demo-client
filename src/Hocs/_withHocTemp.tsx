import React, { createContext, useContext } from 'react';

// /* eslint-disable */
interface IFetchValue {
	[key: string]: {};
}

export interface IHocProps {
	initContext: {};
	useHocContext: () => {};
	useFetch: () => {
		value: IFetchValue;
	};
}

const withProvider = (props: IHocProps) => (WrappedComponent: React.FC) => {
	console.log('props: ', props);
	const HocContext = createContext(props.initContext);
	props.useHocContext = () => useContext<{}>(HocContext);

	const HocProvider: React.FC = ({ children }) => {
		return (
			<HocContext.Provider {...props.useFetch()}>
				{children}
			</HocContext.Provider>
		);
	};

	const Hoc = () => (
		<HocProvider>
			<WrappedComponent />
		</HocProvider>
	);

	return Hoc;
};

export default withProvider;
