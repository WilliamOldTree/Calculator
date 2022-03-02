import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
// import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);



