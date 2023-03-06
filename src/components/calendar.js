import * as React from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import dayjs from 'dayjs';
import './calendarStyles.css';
import { getAllAPIDatas } from './reqsAPI/reqAllDatasApi';
import { verifyDateInDatas } from './reqsAPI/verifyDateInDatas';


const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(dayjs());


  async function handleClick(date) {
    const response = await getAllAPIDatas();
    verifyDateInDatas(response, date)
  }


  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%',
        margin: 'auto',
        padding: 'auto',
        border: '0.2px solid rgba(0, 0, 0, 0.1)'
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
      >
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onAccept={() => {
            console.log('OK clicked, selected date:', value.format('DD/MM/YYYY'));
            handleClick(value.format('DD-MM-YYYY'))
          }}
          componentsProps={{
            actionBar: {
              actions: ['today', 'accept'],
            },
          }}
          renderInput={() => <TextField value={value.format('DD/MM/YYYY')} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default StaticDatePickerLandscape;