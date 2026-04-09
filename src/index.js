import React from 'react'; //this enables JSX
import ReactDOM from 'react-dom/client'; //render react into browser 
import './index.css';
import App from './App'; //main component 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//create root enables concurrent rendering for better performance 