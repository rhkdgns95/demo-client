import { useState } from 'react';
import { useProvider } from '../../hooks/useProvider';

interface ICommon {
	name: string;
	onChangeName: (newName: string) => void;
}

interface IHome {
	name: string;
	age: number;
	onChangeAge: (num: number) => void;
	onChangeName: () => void;
	onInit: () => void;
}

export interface IContext {
	common: ICommon;
	home: IHome;
}

const initContext: IContext = {
	common: {
		name: '',
		onChangeName: () => undefined,
	},
	home: {
		age: 0,
		name: '',
		onChangeAge: () => undefined,
		onChangeName: () => undefined,
		onInit: () => undefined,
	},
};
const useFetchCommon = (): ICommon => {
	const [name, setName] = useState<string>('Manager');
	const onChangeName = (newName: string) => {
		setName(newName);
	};
	return {
		name,
		onChangeName,
	};
};
const useFetchHome = (): IHome => {
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
		age,
		name,
		onChangeName,
		onChangeAge,
		onInit,
	};
};

const useFetch = (): { value: IContext } => ({
	value: {
		common: useFetchCommon(),
		home: useFetchHome(),
	},
});

export const {
	useBaseContext: useManagerContext,
	withHoc: withManager,
} = useProvider<IContext>({
	initContext,
	useFetch,
});
