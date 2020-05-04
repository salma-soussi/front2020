import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes'
import "animate.css/animate.min.css";


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0074D9',
        contrastText: "#fff"
      },
      secondary: {
        main: '#fdbb2d',
        contrastText: "#fff"
      },
      background: {
        main: "#f5f5f5"
      }
    },
    typography: {
      fontFamily: 'Montserrat'
    },
  });

  
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>

    )
}
