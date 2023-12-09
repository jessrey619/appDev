import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(''); // Initial time set to 15:30

  const minutesStep = 30;
  const getOpenDialogAriaText = (value) => {
    return `Select time, increments of ${minutesStep} minutes`;
  };

  const handleTimePickerChange = (newValue) => {
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAccept = (newValue) => {
    props.parentalCallback(newValue);
    setOpen(false); // Close the dialog after accepting the choice
  };

  const renderOption = (option, state) => {
    // Check if the option's hour is outside the desired range
    const isSelectable = option.hour() >= 8 && option.hour() <= 17;

    return (
      <li {...state} style={{ display: isSelectable ? 'block' : 'none' }}>
        {option.format('h:mm A')}
      </li>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        onChange={handleTimePickerChange}
        getOpenDialogAriaText={getOpenDialogAriaText}
        openTo="minutes"
        minutesStep={minutesStep}
        minTime={dayjs().set('hour', 7).set('minute', 30)} // Set minimum time to 8:30 AM
        maxTime={dayjs().set('hour', 17).set('minute', 0)} // Set maximum time to 5:00 PM
        open={open}
        onOpen={handleOpenDialog}
        onClose={handleCloseDialog}
        onAccept={handleAccept} // Handle the accept event
        renderOption={renderOption} // Customize the rendering of each option
      />
    </LocalizationProvider>
  );
}
