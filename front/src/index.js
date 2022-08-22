import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import Detail from './Detail';
import New from './New';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="detail" element={<Detail />} />
        <Route path="new" element={<New />} />
      </Routes>
    </BrowserRouter>,
    rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
