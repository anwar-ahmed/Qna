import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemProvider>
      <App />
  </MuiThemProvider>,
  document.getElementById('root'));
registerServiceWorker();

