import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import userServices from "../AdminService/AdminUserService";
import "./Adminlogin.scss";
const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      errorValid: {
        email: false,
        password: false,
      },
      enable: true,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  onchangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(this.state.email)) {
      errors.email = "Please Enter Valid Email Eg:shubhamlokhande@gmail.com";
      validate = true;
    } else {
      errors.email = "";
    }
    this.setState({
      errorValid: { email: validate },
      errors: { email: errors.email },
    });
  };
  onchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidatePassword.test(this.state.password)) {
      errors.password = "Please Enter Valid Password Eg:Shubham@123";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password: validate },
      errors: { password: errors.password },
    });
  };

  onSubmit = () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };

    userServices
      .Adminuserlogin(data)
      .then((data) => {
        console.log(
          "Login successful" + JSON.stringify(data.data.result.accessToken)
        );
        localStorage.setItem("bookStoreTokenX", data.data.result.accessToken);
        localStorage.setItem("Email", data.config.data);
        setTimeout(() => {
          this.props.history.push("/admindashboard");
        }, 2000);
      })
      .catch((err) => {
        console.log("Registration Error" + err);
      });
  };

  render() {
    return (
      <div className="adminsignup">
        <h3 className="AdminName">Admin Login</h3>
        <form autocomplete="off">
          <div className="admibody">
            <div class="form-group">
              <label for="exampleInputEmail1">Email Id</label>
              <input
                value={this.state.email}
                onChange={this.onchangeEmail}
                variant="outlined"
                label="email"
                placeholder="email"
                type="text"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />

              <span className="error-output">
                {" "}
                {this.state.errors["email"]}
              </span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                id="password"
                variant="outlined"
                type="password"
                label="Password"
                fullWidth
                value={this.state.password}
                onChange={this.onchangePassword}
                placeholder="password"
                type="text"
                type={this.state.showPassword ? "text" : "password"}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Password"
              />

              <span className="error-output">
                {" "}
                {this.state.errors["password"]}
              </span>
            </div>
            <button
              type="button"
              class="btnadmin btn-danger"
              onClick={(e) => this.onSubmit(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
