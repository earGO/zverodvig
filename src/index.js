import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import DynamicRoutes from './DynamicRoutes'


ReactDOM.render(    <Provider store={store}>
    <DynamicRoutes />
</Provider>, document.getElementById('root'));

