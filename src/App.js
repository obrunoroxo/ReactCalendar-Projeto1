import './App.css';
import ResponsiveAppBar from './components/appBar';
import StaticDatePickerLandscape from './components/calendar';
// import gitHubUser from './components/loginReq';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {

  // const x = window.confirm('Voce deseja usar o dark mode?')

  // function themeProvider(x) {
  //   if (x !== false) {
  //     return (
  //       createTheme({
  //         palette: {
  //           mode: 'dark',
  //         },
  //       })
  //     );
  //   } else {
  //     return (
  //       createTheme({
  //         palette: {
  //           mode: 'light',
  //         },
  //       })
  //     );
  //   }
  // };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
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
  );
}


export default App;