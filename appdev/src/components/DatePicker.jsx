import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue(props) {
  const [value, setValue] = React.useState('');

  const onChange = (newValue)=>{
    props.parentalCallback(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          sx={{
            backgroundColor:'white'
          }}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            onChange(newValue);
          }
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
