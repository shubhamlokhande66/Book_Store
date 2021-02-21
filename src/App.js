
import React from 'react';
import './App.scss';
import {BrowserRouter as Routing, Route, Switch} from 'react-router-dom'

import Home from './Components/Header/Header';
import Signup from './Components/pages/signup/signup'
import Login from './Components/pages/login/login'
import Displaybook from './Components/DisplayBooks/Displaybook'
import Dashboard from './Components/Dashborad/Dashboard'


const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/displaybook" component={Displaybook}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
    
        </Switch>
      </div>
      </Routing>
  );
};

export default App;