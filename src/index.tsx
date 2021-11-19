import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core';

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF452B"
    },
    text: {
      primary: "#424242"
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      '"Helvetica Neue"',
      'Arial',
      '"Segoe UI"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600
    }
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
