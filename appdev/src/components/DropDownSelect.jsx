import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.parentalCallback(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, backgroundColor:'white',}}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
        {/* TODO: use API retrieve to get the List of Services and make menu Items out of them */}
            <MenuItem value={null}>Select Service</MenuItem>
            <MenuItem value={"Primary and Specialty Consultation"}>Primary Consultation</MenuItem>
            <MenuItem value={"Laboratory and Diagnostics"}>Laboratory and Diagnostics</MenuItem>
            <MenuItem value={"Online Consultation"}>Online Consultation</MenuItem>
            <MenuItem value={"Medical Services"}>Medical Services</MenuItem>
            <MenuItem value={"On-site Medical Services"}>On-site Medical Services</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
