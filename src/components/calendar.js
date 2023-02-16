import * as React from 'react';
import './calendarStyles.css'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(dayjs());

  console.log('Data:', value.format('YYYY-MM-DD'))

  const handleOK = () => {
    console.log('OK clicked, selected date:', value.format('YYYY-MM-DD'));
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
    >
      <StaticDatePicker
        color="secondary"
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        onAccept={handleOK}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default StaticDatePickerLandscape;