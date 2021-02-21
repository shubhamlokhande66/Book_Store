import React, { useState, useEffect } from 'react';
import Header from "../Header/Header"
import Display from "../DisplayBooks/Displaybook"
import './Dashboard.scss'
import Services from "../../Services/BookService";


const services = new Services();


export default function DisplayNotes() {
  
    const [cartBooks, setCartBooks] = React.useState([]);
    
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



    return (
<div>
    <div className="navbarDashboard">
<Header/>
    </div>
<div className="dashboraddisplay">
    <Display/>
</div>
</div>



    );



}