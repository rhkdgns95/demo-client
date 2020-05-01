import React, { createContext, useContext, useState } from 'react';

interface IContext {
	name: string;
	age: number;
	onChangeAge: (newAge: number) => void;
}

const InitContext: IContext = {
	name: '',
	age: 0,
	onChangeAge: () => undefined,
};

const Context: React.Context<IContext> = createContext<IContext>(InitContext);
const useUserHocContext = () => useContext<IContext>(Context);

const useFetch = (): { value: IContext } => {
	const [age, setAge] = useState<number>(0);
	const [name] = useState<string>('');
	const onChangeAge = (newAge: number) => {
		setAge(newAge);
	};
	return {
		value: {
			name,
			age,
			onChangeAge,
		},
	};
};

const withUser = (WrappedComponent: React.FC): React.FC => {
	const Hoc = () => (
		<Context.Provider {...useFetch()}>
			<WrappedComponent />
		</Context.Provider>
	);

	return () => <Hoc />;
};

export { useUserHocContext };
export default withUser;
