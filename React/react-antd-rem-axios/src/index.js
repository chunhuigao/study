import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

document.documentElement.style.fontSize = window.innerWidth * 100 / 750 + 'px';//新增
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
