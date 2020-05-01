import React, { createContext, useContext, useState } from 'react';

interface IUseFetchAll {
	name: string;
}
interface IUseFetchHome {
	name: string;
	age: number;
	onChangeAge: (num: number) => void;
	onChangeName: () => void;
	onInit: () => void;
}

// 각 라우터마다 공유하는 상태 값 타입정의.
interface IContext {
	all: IUseFetchAll;
	home: IUseFetchHome;
}

// 로그인 사용자 Manager가 전체 앱에서 사용하는 공용 상태 값.
const useFetchAll = (): IUseFetchAll => {
	const name = 'manager';
	return {
		name,
	};
};

// 로그인 사용자 Manager가 Home에서 사용하는 공용 상태 값.
const useFetchHome = (): IUseFetchHome => {
	const [age, setAge] = useState<number>(0);
	const [name, setName] = useState<string>('');
	const onChangeAge = (num: number) => {
		setAge(num);
	};
	const onChangeName = () => {
		setName(`${new Date()}`);
	};
	const onInit = () => {
		setName('');
		setAge(0);
		console.log('ON INITED ');
	};
	return {
		name,
		age,
		onChangeAge,
		onChangeName,
		onInit,
	};
};

const InitContext: IContext = {
	all: { name: '' },
	home: {
		age: 0,
		name: '',
		onChangeAge: () => undefined,
		onChangeName: () => undefined,
		onInit: () => undefined,
	},
};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);

const useManagerHocContext = () => useContext<IContext>(Context);

// 전체 라우터에서 각각의 공용 상태 값을 저장
const useFetch = (): { value: IContext } => {
	const all = useFetchAll();
	const home = useFetchHome();

	return {
		value: {
			all,
			home,
		},
	};
};

const withManager = (WrappedComponent: React.FC): React.FC => {
	const Hoc: React.FC = (props) => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent {...props} />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useManagerHocContext };
export default withManager;
