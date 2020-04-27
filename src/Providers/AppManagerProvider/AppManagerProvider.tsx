// import React, { useState } from 'react';
// import withProvider, { IHocProps } from '../../Hoc/withProvider';

// interface IUseHocContextResponse {
// 	age: number;
// 	onChangeAge: (newAge: number) => void;
// }

// interface IUseContext {
// 	useHocContext: () => IUseHocContextResponse;
// }

// const IHocContext: IHocProps = {
// 	initContext: {
// 		age: '',
// 		onChangeAge: () => undefined,
// 	},
// 	useHocContext: () => {
// 		return {};
// 	},
// 	useFetch: () => {
// 		const [age, setAge] = useState<number>(0);
// 		const onChangeAge = (newAge: number) => {
// 			setAge(age + newAge);
// 		};
// 		return {
// 			value: {
// 				age,
// 				onChangeAge,
// 			},
// 		};
// 	},
// };

// const AppManagerProvider = () => (
// 	<div>
// 		<h1>Hello AppManagerProvider</h1>
// 	</div>
// );

// export default withProvider(IHocContext)(AppManagerProvider);
// export const {
// 	useHocContext: useAppManagerContext,
// } = IHocContext as IUseContext & IHocProps;
