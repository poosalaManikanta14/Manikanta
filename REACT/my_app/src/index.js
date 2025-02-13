import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { Task1 } from './TASKS/TASK-D1/Task1';
import Task2 from './TASKS/TASK2/Task2';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Task1></Task1> */}
    <Task2></Task2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
