import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue(props) {
    const [value, setValue] = React.useState(dayjs()); // Initial time set to 15:30

    const onChange = (newValue) => {
        // const formattedTime = newValue.format('HH:mm'); // Format the time as 'HH:mm'
        // NOTE: WHEN YOU PROGRAM THIS FRFR is that you need to get when retrieveing data: $H, $m cuz that is the Hour and Minutes. Ma string man ug i-format
        props.parentalCallback(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ width: '100%' }} components={['TimePicker']}>
                <TimePicker
                    sx={{ backgroundColor: 'white', fontSize: '10%' }}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        onChange(newValue);
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
