import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'


import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/css/bootstrap.min.css';
//import "./assets/js/bootstrap.bundle.min.js";
import './assets/css/font-awesome.min.css';
import './assets/css/line-awesome.min.css'; 
import './assets/css/style.css';

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
      
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
//  </React.StrictMode>
);

