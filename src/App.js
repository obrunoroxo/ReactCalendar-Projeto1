import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/appBar';
import StaticDatePickerLandscape from './components/calendar';
// import gitHubUser from './components/loginReq';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './components/context/checkContext';
import { useState,  useMemo} from 'react';
import { CssBaseline } from '@mui/material';

function App() {

  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className='app-bar'>
            <ResponsiveAppBar />
          </div>
          <div className='date-picker'>
            <StaticDatePickerLandscape />
          </div>
        </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
