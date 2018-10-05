import React from 'react';
import ReactDOM from 'react-dom';
import MainContain from './MainContainer';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<MainContain />, document.getElementById('root'));
serviceWorker.unregister();
