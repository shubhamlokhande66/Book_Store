import React, { useState, useContext } from "react";
import "./AdminHeader.scss";
import { withRouter } from "react-router-dom";

import adminlogo from "../../../Assets/education.svg"
import { useHistory } from "react-router-dom";

const AdminHeader = () => {
  let history = useHistory();
  const HandleDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <div className="adminheader">
      <nav className="Adminnavbar ">
        <li className="adminheaderIcon" >
              <img  className="adminheaderIcon" src={adminlogo} onClick={() => HandleDashboard()}  />
            </li>
            <li className="adminheaderName">
              <h3>BookStore</h3>
            </li>
            <li className="adminheaderserach">
            <form  action="/action_page.php">
    <input class="adminheaderserach1 form-control mr-sm-2" type="text" placeholder="Search"/> 
  </form>
  </li>
  <li>
  <a className="Adminheaderprofile" data-toggle="collapse" href="#collapseExample" role="button">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="25" height="20" fill="currentColor" class=" Adminheaderprofile1 bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
<h6 className="Adminheaderprofilename">Profile</h6>
</a>
</li>
      </nav>
    </div>
  );
};
export default withRouter(AdminHeader);
