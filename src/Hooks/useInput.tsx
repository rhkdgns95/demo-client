import React, { useState } from 'react';

interface IProps {
	defaultValue?: string;
}
interface IUseInput {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const useInput = ({ defaultValue = '' }: IProps): IUseInput => {
	const [value, setValue] = useState<string>(defaultValue);
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const {
			target: { value: newValue },
		} = event;
		setValue(newValue);
	};
	return {
		value,
		onChange,
	};
};
