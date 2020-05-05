import React, { createContext, useContext } from 'react';

export interface IBaseContext<T> {
	initContext: T;
	useFetch: () => { value: T };
}
export interface IUseProviderResponse<T> {
	useBaseContext: () => T;
	withHoc: (WrappedComponent: React.FC) => React.FC;
}
/**
 *  useProvider:
 *
 *  @param args:
 *  - args.initContext: 초기의 Context값
 *  - args.useFetch: 앱의 상태 값들.
 */
export function useProvider<T>(args: IBaseContext<T>): IUseProviderResponse<T> {
	const { initContext, useFetch } = args;
	const BaseContext: React.Context<T> = createContext<T>(initContext);

	const useBaseContext = () => useContext<T>(BaseContext);

	/**
	 *  withManager: 컴포넌트 HOC을 이용한 형태임.
	 *
	 *  - WrappedComponent보다 한 단계 더 높은 상위 요소에서 렌더링 됨.
	 *  - 다르게 말하면, 인자값 <WrappecComponents /> 보다 항상 먼저 렌더링이 됨.
	 *  - 이때, 렌더링 되기전에 Context-Provider로 라우터의 컴포넌트마다 필요한 상태값을 공유.
	 *
	 *  @param WrappedComponent: 렌더링 될 컴포넌트를 의미함.
	 */
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
