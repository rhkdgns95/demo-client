import { useState } from 'react';
import { useProvider } from './hooks/useProvider';

interface IAppContext {
	isLoggedIn: boolean;
	pageTitle: string;
	onChangeTitle: () => void;
}

const initContext: IAppContext = {
	isLoggedIn: true,
	pageTitle: 'Manager',
	onChangeTitle: () => undefined,
};

const useFetch = (): { value: IAppContext } => {
	const [pageTitle, setPageTitle] = useState<string>('Manager');

	const onChangeTitle = () => {
		setPageTitle(`${new Date()}`);
	};
	return {
		value: {
			isLoggedIn: true,
			pageTitle,
			onChangeTitle,
		},
	};
};

export const {
	useBaseContext: useAppContext,
	withHoc: withAppHoc,
} = useProvider<IAppContext>({
	initContext,
	useFetch,
});
