import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import AddAward from './components/addAward'
import SeeAwards from './components/seeAwards'
import AgencyList from './components/AgencyList'
import AddAgency from './components/AddAgency'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


Amplify.configure(config);

const rootElement = document.getElementById("root");
render (


  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<App />}/>
      <Route path="/addaward" element={<AddAward />} />
      <Route path="/seeawards" element={<SeeAwards />} />
      <Route path="/agencylist" element={<AgencyList />} />
      <Route path="/addagency" element={<AddAgency />} />
    </Routes>
  </BrowserRouter>,
    rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
