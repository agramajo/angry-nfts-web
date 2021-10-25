import AOS from "aos";
import "bootstrap/dist/js/bootstrap";
import "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import buttoneffect from "./utils/button-effect";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function vendorInit() {
  AOS.init();
  buttoneffect();
}

vendorInit();

