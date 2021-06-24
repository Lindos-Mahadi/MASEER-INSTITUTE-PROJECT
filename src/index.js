import React from 'react';
import ReactDOM from 'react-dom';
// import 'Index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
  ,document.getElementById('root')
);