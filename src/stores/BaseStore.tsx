import React, { createContext, useContext, useState } from 'react';

function abc<IContextType>(
	initContext: IContextType,
	fetchContext: IContextType
) {
	const AbcContext: React.Context<IContextType> = createContext<IContextType>(
		initContext
	);

	const useAbcContext = () => useContext<IContextType>(AbcContext);

	// 전체 라우터에서 각각의 공용 상태 값을 저장
	const useAbcFetch = (): { value: IContextType } => {
		return {
			value: {
				...fetchContext,
			},
		};
	};

	const withHoc = (WrappedComponent: React.FC): React.FC => {
		const Hoc: React.FC = (props) => (
			<AbcContext.Provider {...useAbcFetch()}>
				<WrappedComponent {...props} />
			</AbcContext.Provider>
		);

		return () => <Hoc />;
	};

	return {
		useAbcContext,
		withHoc,
	};
}

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

const ABCStore = abc<IContext>(InitContext, {
	all: useFetchAll(),
	home: useFetchHome(),
});
export const { useAbcContext, withHoc } = ABCStore;
