import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header, Content } from './components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-style'
import Theme from './global-style/theme'

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Content />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
