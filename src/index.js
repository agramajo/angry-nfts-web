import AOS from "aos";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function vendorInit() {
  window.$ = $;
  window.jQuery = $;

  AOS.init();
}

vendorInit();

