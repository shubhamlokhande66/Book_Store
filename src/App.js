
import React from 'react';
import './App.scss';
import {BrowserRouter as Routing, Route, Switch} from 'react-router-dom'

import Home from './Components/Header/Header';
import Signup from './Components/pages/signup/signup'
import Login from './Components/pages/login/login'
import Displaybook from './Components/DisplayBooks/Displaybook'
import Dashboard from './Components/Dashborad/Dashboard'
import Cart from "./Components/Cart/Cart"
import Placce from "./Components/Orderplace/OrderPlace"

const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/Displaybook" component={Displaybook}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/Place" component={Placce}></Route>
        </Switch>
      </div>
      </Routing>
  );
};

export default App;