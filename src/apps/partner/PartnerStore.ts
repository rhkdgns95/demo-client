import { useState } from 'react';
import { IBaseContext, useProvider } from '../../hooks/useProvider';

/** ICommon: 앱 Partner의 공용 상태 값. */
interface ICommon {
	age: number;
}

/**
 *  IHome: 라우터 Home에서 사용되는 공통 상태 값.
 *  - no:   (불변) 임시의 번호.
 *  - name: (가변) 이름.
 *  - onChangeName: 유저명 변경.
 */
interface IHome {
	no: number;
	name: string;
	onChangeName: (newName: string) => void;
}

/**
 *  IContext: 앱 Partner의 전체 상태 값들.
 *  - common: (Partner의) 공통 상태 값들.
 *  - home: (Partner의) home라우터 상태 값들.
 */
interface IContext {
	common: ICommon;
	home: IHome;
}

const PartnerContext: IContext = {
	common: {
		age: 3,
	},
	home: {
		no: 6,
		name: 'hello kkh',
		onChangeName: () => undefined,
	},
};

const useCommonFetch = (): ICommon => {
	const age = 26;
	return {
		age,
	};
};

const useHomeFetch = (): IHome => {
	const [name, setName] = useState<string>('A');
	const onChangeName = (newName: string) => {
		setName(newName);
	};

	return {
		no: 6,
		name,
		onChangeName,
	};
};

const usePartnerFetch = (): { value: IContext } => {
	const common = useCommonFetch();
	const home = useHomeFetch();

	return {
		value: {
			common,
			home,
		},
	};
};

const PartnerStore: IBaseContext<IContext> = {
	initContext: PartnerContext,
	useFetch: usePartnerFetch,
};

export default PartnerStore;
export const {
	useBaseContext: usePartnerContext,
	withHoc: withPartner,
} = useProvider<IContext>(PartnerStore);
