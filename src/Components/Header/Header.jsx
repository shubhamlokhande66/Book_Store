import React, { useState, useContext } from "react";
import "./Header.scss";
import { withRouter } from "react-router-dom";
import Logo from "../../Assets/education.svg";
import online from "../../Assets/component.png";
import Signup from "../../pages/signup/signup";
import Login from "../../pages/login/login";
import { useHistory } from "react-router-dom";

const Header = () => {

  let history = useHistory();

  const HandleDashboard = () => {
    history.push("/dashboard");
  };

  const Modal = () => {
    const [flag, setFlag] = useState("valLogin");

    const ModalComponent = () => {
      if (flag === "valLogin") {
        return <Login />;
      } else {
        return <Signup />;
      }
    };

    return (
      <div className="loginsignup">
        <div
          class="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div className="HeaderLoginbutton">
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => setFlag("valLogin")}
                >
                  <h5>LOGIN </h5>
                </button>
              </div>

              <div className="HeaderSignupbutton">
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => setFlag("valSignUp")}
                >
                  <h5>SIGNUP </h5>
                </button>
              </div>

              <div className="up">
                <ModalComponent />
              </div>
              <div className="headeronlinediv">
                <img className="headeronline" src={online} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <nav className="navbar ">
        <li className="headerIcon">
          <img
            className="headerIcon"
            src={Logo}
            onClick={() => HandleDashboard()}
          />
        </li>
        <li className="headerName">
          <h3>BookStore</h3>
        </li>
        <li className="headerserach">
          <form action="/action_page.php">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
        </li>
        <li>
          <a
            className="headerprofile"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            <h2 className="headerprofilename">Profile</h2>
          </a>
        </li>

        <li>
          <link className="headercart" role="button" href="../dashboard/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <h2 className="headercartname">Cart</h2>
          </link>
        </li>
      </nav>
      <div className="info">
        <div class="collapse" id="collapseExample">
          <div className="headercard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Welcome</h5>
                <h7 class="card-subtitle mb-2 text-muted">
                  To Ascess Account and Manage orders{" "}
                </h7>
                <div className="headerlogin">
                  <button
                    type="button"
                    class="btn btn-outline-danger danger"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    LOGIN/SIGNUP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </div>
  );
};
export default withRouter(Header);
