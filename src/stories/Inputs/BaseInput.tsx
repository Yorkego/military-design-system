import * as React from 'react';

import {
  TextField,
   MenuItem,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const BaseInput = ({serviceProps, ...props}) => {
  const startAdornment: () => JSX.Element = () => {
    if (serviceProps?.search) {
      return (<InputAdornment position="start"><SearchIcon /></InputAdornment>)
    } else if (serviceProps?.xAdornment) {
      return (<InputAdornment position="start">x:</InputAdornment>)
    }
  }
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