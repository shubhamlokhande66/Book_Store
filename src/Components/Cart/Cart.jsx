import React, { useState, useEffect } from "react";
import bookImg from "../Assets/Image11.png";
import cartItemLength from "../Context/Context";
import Services from "../../Services/BookService";
import AppBar from "../Header/Header"
const services = new Services();
import "./Cart.scss";

export default function Cart(props) {
  const [detailForm, setDetailForm] = React.useState(false);
  const [summaryField, setSummaryField] = React.useState(false);
  const [cartBooks, setCartBooks] = React.useState([]);
  const [value, setValue] = React.useState("Home");
  const [name, setName] = React.useState();
  const [nameFlag, setNameFlag] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [mobile, setMobile] = React.useState();
  const [mobileFlag, setMobileFlag] = React.useState(false);
  const [mobileError, setMobileError] = React.useState("");
  const [address, setAddress] = React.useState();
  const [addressFlag, setAddressFlag] = React.useState(false);
  const [addressError, setAddressError] = React.useState("");
  const [city, setCity] = React.useState();
  const [cityFlag, setCityFlag] = React.useState(false);
  const [cityError, setCityError] = React.useState("");
  const [state, setState] = React.useState();
  const [stateFlag, setStateFlag] = React.useState(false);
  const [stateError, setStateError] = React.useState("");

  const makeInitial = () => {
    setNameFlag(false);
    setNameError("");
    setAddressFlag(false);
    setAddressError("");
    setMobileFlag(false);
    setMobileError("");
    setCityFlag(false);
    setCityError("");
    setStateFlag(false);
    setStateError("");
  };
  React.useEffect(() => {
    allCartItem();
  }, []);

  const allCartItem = () => {
    services
      .getCartItem()
      .then((data) => {
        console.log(data.data.result);
        setCartBooks(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const patternCheck = () => {
    makeInitial();
    const namePattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const mobilePattern = /^[6-9]{1}[0-9]{9}$/;
    const addressPattern = /^[A-Za-z ]{5,}$/;
    const cityPattern = /^[A-Za-z ]{3,}$/;
    const statePattern = /^[A-Za-z ]{3,}$/;

    let isError = false;

    if (!namePattern.test(name)) {
      setNameFlag(true);
      setNameError("Name is Not Proper");
      isError = true;
    }
    if (!mobilePattern.test(mobile)) {
      setMobileFlag(true);
      setMobileError("Mobile Number is Not Proper");
      isError = true;
    }
    if (!addressPattern.test(address) || address == undefined) {
      setAddressFlag(true);
      setAddressError("Address is Not Proper");
      isError = true;
    }
    if (!cityPattern.test(city) || city == undefined) {
      setCityFlag(true);
      setCityError("Invalid City");
      isError = true;
    }
    if (!statePattern.test(state) || state == undefined) {
      setStateFlag(true);
      setStateError("Invalid state");
      isError = true;
    }

    return isError;
  };

  const removeItem = (item) => {
    debugger;

    services
      .deleteCartItem(item._id)
      .then((item) => {
        console.log("Successfully deleted" + item);
        allCartItem();
      })
      .catch((err) => {
        console.log("Error while removing" + err);
      });
  };

  const checkout = (e) => {
    let order = [];
    cartBooks.map((data) => {
      let same = {
        product_id: data.product_id._id,
        product_name: data.product_id.bookName,
        product_quantity: data.product_id.quantity,
        product_price: data.product_id.price,
      };
      order.push(same);
    });
    let orderData = {
      orders: order,
    };
    console.log(orderData);
    services
      .addOrder(orderData)
      .then((data) => {
        console.log("Successfully order Placed", data);
        props.setOrderPlaced(data);
        props.nextPath(e, "../dashboard/orderPlaced");
      })
      .catch((err) => {
        console.log("Error occured while placing order" + err);
      });
  };

  const handleCart = () => {
    this.props.history.push("/place");
  };

  const CartBooks = () => {
    return (
      <div>
        <div className="Cardcartbody">
          {cartBooks.map((item) => (
            <div className="displaycart">
              <div class=" cardcart">
                <img class="card-img-top1" src={bookImg} alt="" />

                <div className="titlecart">
                  <h6 class="card-title"> {item.product_id.bookName}</h6>
                </div>

                <div className="authorcart">by {item.product_id.author}</div>

                <div className="pricecart">Rs.{item.product_id.price}</div>
                <div className="plusicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <input className="cartinput" value={item.product_id.quantity} />
                <div className="minuscart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-dash-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>

                <div className="removedbutton">
                  <button
                    type="button"
                    class="btn btn-light"
                    onClick={() => removeItem(item)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const CheckoutItem = () => {
    return (
      <div className="checkoutbody">
        <div className="Cardcartbody">
          {cartBooks.map((item) => (
            <div className="displaycart">
              <div class=" cardcart">
                <img class="card-img-top1" src={bookImg} alt="" />

                <div className="titlecart">
                  <h6 class="card-title"> {item.product_id.bookName}</h6>
                </div>

                <div className="authorcart">by {item.product_id.author}</div>

                <div className="pricecart">
                  Rs.{item.product_id.price * item.product_id.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Continue = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      console.log("Success");
      setSummaryField(true);
    }
  };

  return (
    <div className="cartmain">
      <div class="card">
        <div class="card-body">
          <div className="mycartname">My Cart ({cartBooks.length})</div>
          <CartBooks />
          {detailForm ? (
            ""
          ) : (
            <div className="blockButton">
              <button
                type="button"
                class="btn btn-primarycart"
                onClick={() => setDetailForm(true)}
              >
                PLACE ORDER
              </button>
            </div>
          )}
        </div>
      </div>

      <div class="card">
        <div className="customerdetails">Customer Details</div>
        {detailForm ? (
          <div className="custombody">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServer01">Full Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameFlag}
                    helperText={nameError}
                    type="email"
                    class="form-controlcart"
                    id="inputEmail4"
                    placeholder="Full Name"
                  />
                  <span className="error-output"> {nameError}</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Mobile Number</label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    error={mobileFlag}
                    helperText={mobileError}
                    type="password"
                    class="form-controlcart"
                    id="inputPassword4"
                    placeholder="Mobile Number"
                  />
                  <span className="error-output"> {mobileError}</span>
                </div>
              </div>

              <div class="form-groupcart">
                <label for="inputAddress">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  error={addressFlag}
                  helperText={addressError}
                  type="text"
                  class="form-controlcart1"
                  id="inputAddress"
                  placeholder="Address"
                />
                <span className="error-output"> {addressError}</span>
              </div>

              <div class="form-row">
                <div class="form-groupcart col-md-6">
                  <label for="inputCity">City/Town</label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    error={cityFlag}
                    helperText={cityError}
                    type="text"
                    class="form-controlcart"
                    id="inputCity"
                    placeholder="City/Town"
                  />
                  <span className="error-output"> {cityError}</span>
                </div>
                <div class="form-groupcart col-md-6">
                  <label for="inputCity">State</label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    error={stateFlag}
                    helperText={stateError}
                    type="text"
                    class="form-controlcart"
                    id="inputCity "
                    placeholder="State"
                  />
                  <span className="error-output"> {stateError}</span>
                </div>
              </div>
            </form>
            {summaryField ? (
              ""
            ) : (
              <div className="blockButtonc">
                <button
                  type="button"
                  class="btn btn-primarycart"
                  onClick={Continue}
                >
                  CONTINUE
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      <div class="card">
        <div className="customerdetails">Order Summary</div>
        {summaryField ? (
          <>
            <CheckoutItem />

            <div className="blockButtonorder">
              <button
                type="button"
                class="btn btn-primarycart"
                onClick={checkout}
              >
                CHECKOUT
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
