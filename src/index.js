import React from 'react';
import ReactDOM from 'react-dom';

import 'aframe';
import 'aframe-particle-system-component';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
registerServiceWorker();
