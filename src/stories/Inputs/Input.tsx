import * as React from "react";
import { MultiSelect } from './MultiSelect';
import { Password } from './Password';
import { SelectAndTextField } from './SelectAndTextField';
import { DateAndTimePicker } from './DateAndTimePicker';
import { BaseInput } from './BaseInput';

import type { TextFieldProps } from '@mui/material';
import type { InputProps } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

export const Input = ({serviceProps, ...props}) => {
	const checkInputType: () => JSX.Element = () => {
		if (serviceProps?.multiSelect) {
			return (<MultiSelect {...props} />)
		} else if (serviceProps?.password) {
			return (<Password {...props} />)
		} else if (serviceProps?.selectAndTextField) {
			return (<SelectAndTextField {...props} />)
		} else if (serviceProps?.dateAndTimePicker) {
			return (<DateAndTimePicker {...props} />)
		} else {
			return (<BaseInput serviceProps={serviceProps} {...props} />)
		}
	}
	return (checkInputType())
};
