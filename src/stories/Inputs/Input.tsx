import * as React from "react";
import {
  TextField,
 	MenuItem,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { MultiSelect } from './MultiSelect';
import { Password } from './Password';
import { SelectAndTextField } from './SelectAndTextField';
import { DateAndTimePicker } from './DateAndTimePicker';

export const Input = ({serviceProps, ...props}) => {
	const startAdornment = () => {
		if (serviceProps?.search) {
			return (<InputAdornment position="start"><SearchIcon /></InputAdornment>)
		} else if (serviceProps?.xAdornment) {
			return (<InputAdornment position="start">x:</InputAdornment>)
		}
	}

	const checkMultiSelect = () => {
		if (serviceProps?.multiSelect) {
			return (<MultiSelect {...props} />)
		} else if (serviceProps?.password) {
			return (<Password {...props} />)
		} else if (serviceProps?.selectAndTextField) {
			return (<SelectAndTextField {...props} />)
		} else if (serviceProps?.dateAndTimePicker) {
			return (<DateAndTimePicker {...props} />)
		} else {
			return (
				<TextField {...props} InputProps={{ startAdornment: startAdornment() }} >
					<MenuItem key='test' value='test' >
		        test
		      </MenuItem>
		      <MenuItem key='test2' value='test2' >
		        test2
		      </MenuItem>
		      <MenuItem key='test3' value='test3' >
		        test3
		      </MenuItem>
		    </TextField>
		  )
		}
	}
	return (checkMultiSelect())
};

// TextField.defaultProps = {
//   variant: 'contained',
//   size: 'medium',
//   color: 'primary',
// };