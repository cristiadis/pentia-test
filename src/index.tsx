import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import RootApp from 'App';
import store from 'store';
import { register } from 'serviceWorker';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.default}>
      <RootApp />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register();
