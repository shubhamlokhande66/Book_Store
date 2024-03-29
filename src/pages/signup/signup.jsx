import React, { Component } from "react";
import "./signup.scss";
import userServices from "../../Services/userServices";

const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
const regexvalidateName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/
  );
const regexvalidateMobile = new RegExp(/^.{10,}$/
  );

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      mobilenumber: "",
      showPassword: false,
      errorValid: {
        fullName: false,
        email: false,
        password: false,
        mobilenumber: false,
      },
      enable: true,
      errors: {
        fullName: "",
        email: "",
        password: "",
        mobilenumber: "",
      },
    };
  }

  validate = (data) => {
    const errors = {};
    if (!regexValidateEmail.test(data.email)) errors.email = "Invalid email";
    return errors;
  };
  onchangefullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
    console.log(event.target.value);
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateName.test(this.state.fullName)) {
      errors.fullName = "Please Enter Valid Name Eg:Shubham";
      validate = true;
    } else {
      errors.fullName = "";
    }
    this.setState({
      errorValid: { fullName: validate },
      errors: { fullName: errors.fullName },
    });
  };
  onchangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(this.state.email)) {
      errors.email = " Please Enter Valid Email Eg:shubhamlokhande@gmail.com";
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
      errors.password = " Please Enter Valid Password Eg:Shubham@123";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password: validate },
      errors: { password: errors.password },
    });
  };

  onchangeMobileNo = (event) => {
    this.setState({
      mobilenumber: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateMobile.test(this.state.mobilenumber)) {
      errors.mobilenumber =
        "  Please Enter Valid Phone No. Enter Minimum 10 digit ";
      validate = true;
    } else {
      errors.mobilenumber = "";
    }
    this.setState({
      errorValid: { mobilenumber: validate },
      errors: { mobilenumber: errors.mobilenumber },
    });
  };

  onSubmit = () => { debugger
    let data = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.mobilenumber,
    };
    userServices
      .userregister(data)
      .then((data) => {
        console.log("registration successful" + data);
        this.setState({
          fullName: "",
          email: "",
          password: "",
          mobilenumber: "",
        });
        history.push("/dashboard");
      })

      .catch((err) => {
        console.log("Registration Error" + err);
      });
  };

  render() {
    return (
      <div className="signup">
        <form autocomplete="off">
          <div className="main">
            <div class="form-group">
              <label>Full Name</label>
              <input
                name="fullName"
                label="First Name"
                variant="outlined"
                value={this.state.fullName}
                onChange={this.onchangefullName}
                type="text"
                fullWidthtype="email"
                class="form-control"
                placeholder="Enter Full Name"
                data-testid="nameInput"

              />

              <span className="error-output">
                {" "}
                {this.state.errors["fullName"]}
              </span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Id</label>
              <input
                value={this.state.email}
                onChange={this.onchangeEmail}
                variant="outlined"
                label="email"
                type="text"
                type="email"
                class="form-control"
                placeholder="Enter email"
                data-testid="emailInput"
              />

              <span className="error-output">
                {" "}
                {this.state.errors["email"]}
              </span>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Password</label>
              <input
                id="password"
                variant="outlined"
                type="password"
                label="Password"
                fullWidth
                value={this.state.password}
                onChange={this.onchangePassword}
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Password"
                data-toggle="password"
                data-testid="passwordInput"
              />
              <span
                toggle="#input-pwd"
                class="fa fa-fw fa-eye field-icon toggle-password"
              ></span>

              <span className="error-output">
                {" "}
                {this.state.errors["password"]}
              </span>
            </div>
            <div class="form-group">
              <label for="exampleInputMobilenumber">Mobile Number</label>
              <input
                id="mobilenumber"
                variant="outlined"
                type="mobilenumber"
                label="mobilenumber"
                fullWidth
                value={this.state.mobilenumber}
                onChange={this.onchangeMobileNo}
                type="text"
                type="email"
                class="form-control"
                placeholder="Enter Mobile Number"
                data-testid="MobileInput"
              />

              <span className="error-output">
                {" "}
                {this.state.errors["mobilenumber"]}
              </span>
            </div>
            <button
              type="button"
              class="btn1 btn-danger"
              onClick={(e) => this.onSubmit(e)}
              
              data-testid="submit"
            >

              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
