import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppClass from "./AppClass";
import data from './components/DataComponent.js'
import data2 from './components/name.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} data2={data2} />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
