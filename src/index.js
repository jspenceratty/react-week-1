import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './loginform';
import Navigation from './navigation';
import Footer from './footer';


ReactDOM.render(
  <React.StrictMode>
     <Navigation />
      <Login />
      <Footer />
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
