import React from "react";
import "./App.scss";
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashborad/Dashboard";
import AdminSignup from "./Components/AdminSection/signup/Adminsignup";
import AdminHeader from "./Components/AdminSection/AdminDashboard/AdminHeader/AdminHeader";
const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
   
          <Route path="/AdminSignup" component={AdminSignup}></Route>
          <Route path="/AdminHeader" component={AdminHeader}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
       
        </Switch>
      </div>
    </Routing>
  );
};

export default App;
