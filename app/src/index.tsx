import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {FireFly} from './FireFly';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const App = () => {
  document.body.style.backgroundColor = "#282828";
  document.body.style.margin = "0";
  return (
      <FireFly/>
  )
}
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
