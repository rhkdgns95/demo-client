import React, { createContext, useContext } from 'react';
import ManagerStore, { IManagerContext } from '../stores/ManagerStore';

// Manager에서의 상태 값 초기 데이터.
const InitContext: IManagerContext = ManagerStore.getInitContext();

const Context: React.Context<IManagerContext> = createContext<IManagerContext>(
	InitContext
);

// Manager에서 모든 컴포넌트들에서 상태값을 공유할 때, 사용됨.
const useManagerAppContext = () => useContext<IManagerContext>(Context);

/**
 *  withManager: 컴포넌트 HOC을 이용한 형태임.
 *
 *  - Manager보다 한 단계 더 높은 상위 요소에서 렌더링 됨.
 *  - 인자값인 <WrappecComponents />보다 항상 먼저 렌더링이 됨.
 *  - 이때, 렌더링 되기전에 Provier-Context로 라우터의 컴포넌트마다 필요한 상태값을 공유하도록 함.
 *
 *  @param WrappedComponent: 렌더링 될 컴포넌트를 의미함.
 */
const withManager = (WrappedComponent: React.FC): React.FC => {
	const Hoc: React.FC = (props) => (
		<Context.Provider {...ManagerStore.useFetch()}>
			<WrappedComponent {...props} />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useManagerAppContext };
export default withManager;
