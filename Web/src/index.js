import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Routing'
import ActivityIndicator from './components/activityIndicator'
import { Provider } from 'react-redux';
import {Store} from 'reactive-boilerplate-common'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

import dotenv from 'dotenv'
dotenv.config()

ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
       <Suspense fallback="loading..."><Router/></Suspense>
       <ActivityIndicator/>
       </BrowserRouter>
     </Provider>

, document.getElementById('root'));


