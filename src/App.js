import React from "react";
import "./App.scss";
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashborad/Dashboard";
const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </Routing>
  );
};

export default App;
