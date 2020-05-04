import { useState } from 'react';

interface IUseCommonContext {
	name: string;
	onChangeName: (newName: string) => void;
}

interface IUseHomeContext {
	name: string;
	age: number;
	onChangeAge: (num: number) => void;
	onChangeName: () => void;
	onInit: () => void;
}

export interface IManagerContext {
	common: IUseCommonContext;
	home: IUseHomeContext;
}

class ManagerStore implements IManagerContext {
	common: IUseCommonContext;
	home: IUseHomeContext;

	constructor() {
		this.common = {
			name: '',
			onChangeName: () => undefined,
		};
		this.home = {
			age: 0,
			name: '',
			onChangeAge: () => undefined,
			onChangeName: () => undefined,
			onInit: () => undefined,
		};
	}

	/**
	 *  getInitContext:
	 *  실제로는 사용될 값들이 아닌, 컴포넌트의 Context에 넣어야 할 데이터의 타입을 맞추기 위한 용도.
	 */
	getInitContext = (): IManagerContext => ({
		home: this.home,
		common: this.common,
	});

	/**
	 *  useFetch: Manager에서 필요한 상태 값들을 불러옴.
	 *  - common: Manager에서 공통적으로 사용될 상태 값.
	 *  - home: Manager의 라우터 'Home'에서 사용될 상태 값.
	 */
	useFetch = (): { value: IManagerContext } => ({
		value: {
			common: this.useCommonContext(),
			home: this.useHomeContext(),
		},
	});

	private useCommonContext = (): IUseCommonContext => {
		const [name, setName] = useState<string>('Manager');
		const onChangeName = (newName: string) => {
			setName(newName);
		};
		return {
			name,
			onChangeName,
		};
	};

	private useHomeContext = (): IUseHomeContext => {
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
}

export default new ManagerStore();
