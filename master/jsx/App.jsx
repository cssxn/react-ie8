/*!
 *
 * Vmaking 
 *
 * Version: 1.0.0
 * Author: @Danyang.wang
 * Website: http://www.cssxn.cn
 */

/**
 *  Support IE-8
 *  
 */
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute } from 'react-router';

/**
 * Base
 * 
 */
import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import BaseHorizontal from './components/Layout/BaseHorizontal';
import DashboardV1 from './components/Dashboard/DashboardV1';

/**
 * Modules
 * 
 */
import Home from './components/Home/Home';


/**
 * Other Pages
 * 
 */
import Login from './components/Pages/Login';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Upload from './components/Pages/Error500';


/**
 * Router Config
 * 
 */
 ReactDOM.render(<div>what</div>,document.getElementById('app'));
