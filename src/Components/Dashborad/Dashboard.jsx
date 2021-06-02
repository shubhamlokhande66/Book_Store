import React, { useState, useEffect, Fragment, Suspense, lazy, Profiler } from "react";
import Header from "../Header/Header";
const Display = lazy(() => import("../DisplayBooks/Displaybook"));
// import Display from "../DisplayBooks/Displaybook";
import "./Dashboard.scss";
const Cart = lazy(() => import("../Cart/Cart"));
// import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import ProtectedRoutes from "../../protectedRoutes";
import { Switch, Route } from "react-router-dom";
import bookListContext from "../Context/Context";
import CartListContext from "../Context/Context";
import WishListContext from "../Context/Context";
import Services from "../../Services/BookService";
import Orderplace from "../Orderplace/OrderPlace";
import ReactLoading from "react-loading";

const bookservice = new Services();

export default function DisplayNotes(props) {
  const [BookList, setBookList] = useState([]);
  const [orderPlaced, setOrderPlaced] = React.useState([]);
  const [cartBooks, setCartBooks] = React.useState([]);
  const [wishlistBooks, setWishlistBooks] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  console.log("Book list : ", BookList);
  function Callback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
    console.log("id of profiler", id);
    console.log("phase", phase);
    console.log("actualDuration ", actualDuration);
    console.log("baseDuration", baseDuration);
    console.log("startTime", startTime);
    console.log("commitTime", commitTime);
    console.log("interactions", interactions);
  }

  useEffect(() => {
    allCartItem();
    allWishlistItem();
    setTimeout(() => {
      getAllBooks();
    }, 1000);
  }, []);

  const nextPath = (e, path) => {
    e.stopPropagation();
    props.history.push(path);
  };

  const getAllBooks = () => {
    try {
      bookservice.getBooks().then((res) => {
        console.log(res);
        if (res.data.result !== null) {
          setLoading(false);
          setBookList(res.data.result);
          books.map((data) => (data.isCart = false));
        } else {
          setLoading(true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const allCartItem = () => {
    bookservice
      .getCartItem()
      .then((data) => {
        console.log(data.data.result);
        setCartBooks(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const allWishlistItem = () => {
    bookservice
      .getWishlistItem()
      .then((data) => {
        console.log(data.data.result);
        setWishlistBooks(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callFunction = (data) => {
    setBookList(data);
  };

  const handleBooks = (data) => {
    debugger;
    setBookList(data);
  };

  return (
    <Fragment>
      {loading ? (
        <ReactLoading
          className="reactloading"
          type={"bubbles"}
          color={"#a03037"}
          height={"10%"}
          width={"8%"}
        />
      ) : (
          <div>

            <Profiler id="AppBar" onRender={Callback}>
              <div className="navbarDashboard">
                <Header  {...props}
                  totalCartItem={cartBooks?.length}
                  BookList={BookList}
                  setFilterArray={callFunction}
                  allWishlistItem={wishlistBooks?.length}
                />
              </div>
            </Profiler>


            <Switch>
              <Suspense
                fallback={
                  <div className="reactloadinglazy">
                    {" "}
                    <ReactLoading
                      type={"bars"}
                      color={"#a03037"}
                      height={"10%"}
                      width={"8%"}
                    />
                  </div>
                }
              >
                <Route path="/dashboard" exact>
                  <div className="dashboraddisplay">
                    <bookListContext.Provider
                      value={{ books: BookList, load: loading }}
                    >

                      <Display
                        allCartItem={allCartItem}
                        cartBooks={cartBooks}
                        allWishlistItem={allWishlistItem}
                        setBooks={handleBooks}
                      />
                    </bookListContext.Provider>
                  </div>
                </Route>

                <ProtectedRoutes path="/dashboard/cart" exact>
                  <div className="CartDash">
                    <CartListContext.Provider value={{ cartBooks: cartBooks }}>
                      <Cart
                        allCartItem={allCartItem}
                        nextPath={nextPath}
                        setOrderPlaced={setOrderPlaced}
                      />

                    </CartListContext.Provider>
                  </div>
                </ProtectedRoutes>
                <ProtectedRoutes path="/dashboard/wishlist" exact>
                  <div className="WishlistDash">
                    <WishListContext.Provider
                      value={{ wishlistBooks: wishlistBooks }}
                    >
                      <Wishlist
                        nextPath={nextPath}
                        allWishlistItem={allWishlistItem}
                      />
                    </WishListContext.Provider>
                  </div>
                </ProtectedRoutes>

                <ProtectedRoutes path="/dashboard/orderPlaced" exact>
                  <Orderplace orderPlaced={orderPlaced} nextPath={nextPath} />
                </ProtectedRoutes>
              </Suspense>
            </Switch>
          </div>
        )}
    </Fragment>
  );
}
