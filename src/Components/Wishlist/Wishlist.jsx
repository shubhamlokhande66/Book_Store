import React, { useState, useEffect,useContext } from "react";
import bookImg from "../../Assets/Image11.png";
import WishListContext from "../Context/Context";
import Services from "../../Services/BookService";
const services = new Services();
import "./Wishlist.scss";
import {  toast } from "react-toastify";



toast.configure() 
export default function Wishlist(props) {

    const addedToBag = (e, item) => { debugger
        console.log(item);
        e.stopPropagation();
        const id = item._id;
        item.isCart = true;
        services
          .addToCart(id)
          .then((item) => {
            console.log(item);
            SetDetails(true);
            removeToWhishlist();
          })
          .catch((err) => {
            console.log(err);
          });
        toast.success("Book Added to Bag successfully....", {
          position: "top-left",
          autoClose: 5000,
          draggable: false,
        });
      };

  const removeToWhishlist = (item) => { 
    services
      .deleteWishlistItem(item._id)
      .then((item) => {
        console.log("Successfully deleted" + item);
        props.allCartItem();
      })
      .catch((err) => {
        console.log("Error while removing" + err);
      });
      toast.success("Book delete successfully....", {
        position: "top-left",
        autoClose: 5000,
        draggable: false,
      });
  };



  const { wishlistBooks } = useContext(WishListContext);
  const CartBooks = () => {
    return (
        <div className="container-fluid1">
        {wishlistBooks?.map((item) => (
          <div className="displaywish">
            <div class="noteCard1 my-2 mx-2 card">
              <div className="image">
                <img class="card-img-top" src={bookImg} alt="" />
              </div>

              <div className="title">
                <h6 class="card-title"> {item.product_id?.bookName ?? 'Shubham'}</h6>
              </div>
              <div className="author">by {item.product_id?.author}</div>
              <div className="quantity">({item.product_id?.quantity})</div>
              <div className="price">Rs.{item.product_id?.price}</div>
              {/* {item.cart == true && cart == true ? ( */}
              {item?.isCart ? (
                <div>
                  <button className="addedtobagb">
                    <h6>ADDED TO BAG</h6>
                  </button>
                </div>
              ) : (
                <div className="displayadd">
                  <button
                    type="button"
                    className=" displayadd1"
                    onClick={(e) => addedToBag(e, item)}
                  >
                    {/* {cartButtonMsg} */}{" "}
                    <h6 className="addtobagbutton">ADD TO BAG </h6>
                  </button>

                  <button
                    type="button"
                    className="displayWhishlist1"
                    onClick={(e) => removeToWhishlist(item)}
                  >
                    <h6 className="addtobagbutton"> REMOVE</h6>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  


  return (
    <div className="cartmain1">
      <div class="card">
        <div class="card-body">
          <div className="mywhishlistname">My Wishlist ({wishlistBooks?.length})</div>
          <CartBooks />
        </div>
      </div>
    </div>
  );
}
