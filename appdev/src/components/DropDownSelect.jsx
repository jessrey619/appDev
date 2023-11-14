import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.parentalCallback(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, backgroundColor:'white', }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
        {/* TODO: use API retrieve to get the List of Services and make menu Items out of them */}
            <MenuItem value={0}>Select Service</MenuItem>
            <MenuItem value={10}>Dental Services</MenuItem>
            <MenuItem value={20}>Medical Services</MenuItem>
            <MenuItem value={30}>Online Consultation</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
