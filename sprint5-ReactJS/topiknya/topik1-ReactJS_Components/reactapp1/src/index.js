import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Navbar, MainContent, paragraph} from './components/ComponentA';
// import Layout from './components/Layout1';
// import ClassComponent from './components/ClassComponents';
import DrillComponent from './components/DrillComponent';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Navbar />
//     <MainContent />
//     {paragraph}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ClassComponent />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <DrillComponent />
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
