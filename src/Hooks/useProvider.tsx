import React, { createContext, useContext } from 'react';

export interface IBaseContext<T> {
	initContext: T;
	useFetch: () => { value: T };
}

/**
 *  useProvider:
 *
 *  @param args:
 *  - args.initContext: 초기의 Context값
 *  - args.useFetch: 앱의 상태 값들.
 */
export function useProvider<IContextType>(args: IBaseContext<IContextType>) {
	const { initContext, useFetch } = args;
	const BaseContext: React.Context<IContextType> = createContext<IContextType>(
		initContext
	);

	const useBaseContext = () => useContext<IContextType>(BaseContext);

	const withHoc = (WrappedComponent: React.FC): React.FC => {
		const Hoc: React.FC = (props) => (
			<BaseContext.Provider {...useFetch()}>
				<WrappedComponent {...props} />
			</BaseContext.Provider>
		);

		return () => <Hoc />;
	};

	return {
		useBaseContext,
		withHoc,
	};
}
