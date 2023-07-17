import * as React from "react";
import {
  TextField,
 	MenuItem,
} from '@mui/material';
import './input.css';

export const SelectAndTextField = (props) => {
	return (
		<div>
			<TextField
				className="leftSelectInput"
				select 
				defaultValue='UA' 
				{...props} 
			>
				<MenuItem key='UA' value='UA' >
			    UA
			  </MenuItem>
			  <MenuItem key='US' value='US' >
			    US
			  </MenuItem>
			</TextField>
			<TextField className="rightTextFieldInput" {...props}>
			</TextField>
		</div>
	)
}
