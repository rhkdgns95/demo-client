import { useState } from 'react';

export interface IAppContext {
	isLoggedIn: boolean;
	pageTitle: string;
	onChangeTitle: () => void;
}

class AppStore {
	private isLoggedIn: boolean;
	private pageTitle: string;
	private onChangeTitle: () => void;

	constructor() {
		this.isLoggedIn = false;
		this.pageTitle = '';
		this.onChangeTitle = () => undefined;
	}

	getInitAppContext = (): IAppContext => ({
		isLoggedIn: this.isLoggedIn,
		pageTitle: this.pageTitle,
		onChangeTitle: this.onChangeTitle,
	});

	useFetch = (): { value: IAppContext } => {
		const [pageTitle, setPageTitle] = useState<string>('장부다');
		const [isLoggedIn] = useState<boolean>(true);

		const onChangeTitle = () => {
			setPageTitle(`${new Date()}`);
		};
		return {
			value: {
				isLoggedIn,
				pageTitle,
				onChangeTitle,
			},
		};
	};
}

export default new AppStore();
