import React from "react";
import "./App.scss";
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashborad/Dashboard";
import Admindashboard from "./Components/AdminSection/AdminDashboard/adminDashboard";
import AdminSignup from "../src/Components/AdminSection/signup/Adminsignup"
import AdminBooks from "../src/Components/AdminSection/Books/Books"
import AdminLogin from "../src/Components/AdminSection/Adminlogin/Adminlogin"
const App = () => {
  return (
    <Routing>
      <div>
        <Switch>
        <Route path="/AdminLogin" component={AdminLogin}></Route>
          <Route path="/AdminSignup" component={AdminSignup}></Route>
          <Route path="/Adminbooks" component={AdminBooks}></Route>
          <Route path="/Admindashboard" component={Admindashboard}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
       
        </Switch>
      </div>
    </Routing>
  );
};

export default App;
