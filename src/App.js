
import React from 'react';
import './App.scss';
import {BrowserRouter as Routing, Route, Switch} from 'react-router-dom'

import Home from './Components/Header/Header';


const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" component={Home}></Route>
    
        </Switch>
      </div>
      </Routing>
  );
};

export default App;