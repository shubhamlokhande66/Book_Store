import React, { useState, useEffect } from 'react';
import Header from "../Header/Header"
import Display from "../DisplayBooks/Displaybook"
import './Dashboard.scss'
import Cart from "../Cart/Cart";
import ProtectedRoutes from "../../protectedRoutes";
import { Switch, Route } from "react-router-dom";
import bookListContext from "../Context/Context";
import Services from "../../Services/BookService";
import Orderplace from "../Orderplace/OrderPlace"

  const bookservice= new Services();
// const services = new Services();
 

export default function DisplayNotes( props) {
  const [BookList, setBookList] = useState([]);
  const [orderPlaced, setOrderPlaced] = React.useState([]);
console.log("Book list : ",BookList);
    useEffect(() => {
        getAllBooks();
      }, []);


      const nextPath = (e, path) => {
        e.stopPropagation();
        props.history.push(path);
      };



    const getAllBooks = () => { 
        bookservice
          .getBooks()
          .then((res) => {
            console.log(res)
            setBookList(res.data.result);
            books.map((data) => (data.isCart = false));
          })
          .catch((err) => {
            console.log(err);
          });
      };


  
  //   const [cartBooks, setCartBooks] = React.useState([]);
    

  // React.useEffect(() => {
  //   allCartItem();
  // }, []);

  //   const allCartItem = () => {
  //       services
  //         .getCartItem()
  //         .then((data) => {
  //           console.log(data.data.result);
  //           setCartBooks(data.data.result);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };



    return (

      
<div>

    <div className="navbarDashboard">
<Header/>
    </div>
{/* <div className="dashboraddisplay">
    <Display/>
</div> */}


<Switch>
        <Route path="/dashboard" exact>
          <div className="dashboraddisplay">
            <bookListContext.Provider value={{books : BookList}}>
            <Display/>
            </bookListContext.Provider>
    
</div>
        </Route>
        <ProtectedRoutes path="/dashboard/cart" exact>
          <div className="CartDash">
          <Cart   nextPath={nextPath}
            setOrderPlaced={setOrderPlaced}/>
          </div>
        </ProtectedRoutes>
        <ProtectedRoutes path="/dashboard/orderPlaced" exact>
          <Orderplace orderPlaced={orderPlaced} nextPath={nextPath}/>
        </ProtectedRoutes>
      </Switch>

</div>



    );



}