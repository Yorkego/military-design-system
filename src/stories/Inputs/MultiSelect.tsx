import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './input.css';

enum names {
  HumairaSims ="Humaira Sims",
  SantiagoSolis = "Santiago Solis",
  DawidFloyd = "Dawid Floyd",
  MateoBarlow = "Mateo Barlow",
  SamiaNavarro = "Samia Navarro",
  KadenFields = "Kaden Fields",
  GenevieveWatkins = "Genevieve Watkins",
  MariahHickman = "Mariah Hickman",
  RoccoRichardson = "Rocco Richardson",
  HarrisGlenn = "Harris Glenn"
};

export const MultiSelect = (props) => {
	return (
		<Autocomplete
      className='multiselect'
      multiple
      {...props}
      id="tags-outlined"
      options={Object.values(names)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Multiple values"
        />
      )}
    />
  )
}

