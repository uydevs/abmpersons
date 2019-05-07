import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components para routear
import App from './components/App';
import New from './components/routeComponents/New';
import Delete from './components/routeComponents/Delete';
import Modify from './components/routeComponents/Modify';
import Page404 from './components/routeComponents/Page404';
import List from './components/routeComponents/List.js';


const AppRoutes = () => <App />
    
  


export default AppRoutes;