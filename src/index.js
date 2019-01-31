import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import App from './App';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif',
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="*" component={App}/>
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
