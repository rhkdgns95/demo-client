import React, { useState } from 'react';
import Text from './Components/Text';
import withHoc, { IHocProps } from './Hocs/_withHocTemp';

// import useProvider, { IContext } from './Hooks/useProvider';
// import withHoc from './Hoc/withHoc';

/* eslint-disable */
// interface IContext2 extends IContext {
// 	name: string;
// 	onChangeName: (newName: string) => void;
// }

// interface ITestFetch {
//   value: IContext2
// }

// const initContext: IContext2 = {
// 	name: 'hello world',
// 	onChangeName: () => undefined,
// };

// const useFetch = (): ITestFetch => {
// 	const [name, setName] = useState<string>('init name');
// 	const onChangeName = (newName: string) => {
// 		setName(newName);
// 	};
// 	return {
// 		value: {
// 			name,
// 			onChangeName,
// 		},
// 	};
// };

// const { Provider: TestProvider, useContext: useTestContext } = useProvider({
// 	useFetch,
// 	initContext,
// });
// const Test = ():JSX.Element => {
// 	return (
// 		<TestProvider>
// 			<div>Test hello</div>
//       <Text />
// 		</TestProvider>
// 	);
// };
// const {  } = useTestContext();
// export { useTestContext };
// export default Test;

interface IUseContext {
	useHocContext: () => {
    name: string;
		onChangeValue: (newValue: string) => void;
  }
}

interface ITestProvider extends IHocProps {}
const TestProvider: ITestProvider = {
	initContext: {
		name: '',
		onChangeValue: () => {},
	},
	useHocContext: () => {
		return {
			name: '',
			age: '',
		};
	},
	useFetch: () => {
		const [name, setName] = useState<string>('abc');
		const onChangeValue = (newValue: string) => {
			setName(newValue);
		};
		const test: boolean = false;
		return {
			value: {
				name,
				onChangeValue,
				test,
			},
		};
	},
};

const Test = () => {
  const { name, onChangeValue } = useTestContext();
  console.log("name: ", name);
  console.log("onChangeValud: ", name);
	return (
		<div>
			ok?
			<Text />
		</div>
	);
};

export default withHoc(TestProvider)(Test);
console.log('TestProvider: ', TestProvider);
export const {
	useHocContext: useTestContext
} = TestProvider as IUseContext & ITestProvider;
