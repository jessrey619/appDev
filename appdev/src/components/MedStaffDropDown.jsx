import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function MedStaffSelect(props) {
  const [age, setAge] = React.useState("");
  const [items, setItems] = React.useState([{}]);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.handlePatientSelect(event.target.value);
  };

  React.useEffect(() => {
    axios.get(`http://localhost:8080/stud/getAllStudents`)
      .then(response => {     
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  return (
    <Box sx={{ minWidth: 120, backgroundColor:'white', }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
           <MenuItem value={{}}>
              Select Diagnosis
            </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.sid} value={item.sid}>
              ({item.sid}) {item.fname} {item.lname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
