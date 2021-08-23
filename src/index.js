import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Vitrine from './components/Vitrine';


import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  
  
  <BrowserRouter>
  <Switch>
  <Route path="/" exact= {true} component={Vitrine} />
  </Switch>
 </BrowserRouter>

 ,
  document.getElementById('root')
);


reportWebVitals();
