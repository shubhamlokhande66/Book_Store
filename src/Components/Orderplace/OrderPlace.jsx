import React from "react";
import "./OrderPlace.scss";
import placed from "../Assets/Placed.jpg";
import { useHistory } from "react-router-dom";

export default function OrderPlaced(props) {
  let history = useHistory();
  const random = Math.floor(Math.random() * 1000000 + 1);
  const Handledashboard = () => {
    history.push("/dashboard");
  };

  return (
    <div className="placedBody">
      <img className="successfulImage" src={placed} alt="" />

      <div className="para">
        <div className="p1">hurry!!!your order is confirmed </div>
        <div className="p2">
          the order id is #{random} save the order id for
        </div>
        <div className="p3">future communication</div>
      </div>
      <div className="table12">
        <table class="table table-bordered">
          <tr>
            <th>Email Us</th>
            <th>Contact Us</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>admin@bookstore.com</td>
            <td>+91 8163475881</td>
            <td>
              42, 14 main 15th Cross, Sector 4, opp to BDA complex near
              Kamarakom restaurent HSR layout Banglore 560034
            </td>
          </tr>
        </table>
      </div>
      <div className="buttonplace">
        <button
          className="placebutton"
          onClick={() => {
            Handledashboard();
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}
