import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './input.css';

const names: string[] = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
];

export const MultiSelect = (props) => {
	return (
		<Autocomplete
      className='multiselect'
      multiple
      {...props}
      id="tags-outlined"
      options={names}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Multiple values"
        />
      )}
    />
  )
}

