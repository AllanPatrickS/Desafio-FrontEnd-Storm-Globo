import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
function Index(props) {
  let theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header key='header'/>
      <Body key='body' />
      <Footer key='footer' />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='' render={() => <Index />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
