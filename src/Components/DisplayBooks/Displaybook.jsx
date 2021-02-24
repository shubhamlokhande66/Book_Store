import React, { useState, useEffect, useContext } from "react";
import Bookservice from "../../Services/BookService";
import "./Displaybooks.scss";
import bookImg from "../../Assets/Image11.png";
import bookListContext from "../Context/Context";

const bookservice = new Bookservice();

export default function DisplayNotes() {
  const addedToBag = (e, item) => {
    console.log(item);
    e.stopPropagation();
    const id = item._id;
    item.isCart = true;
    bookservice
      .addToCart(id)
      .then((item) => {
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addedToWhishlist = () => {};

  const { books } = useContext(bookListContext);
  console.log("booksnew", books);
  return (
    <div className="DisplayMain">
      <div className="bookSize">Books</div>
      <div className="bookSize1">({books.length} items) </div>

      <div className="container-fluid">
        {books.map((item) => (
          <div className="display">
            <div class="noteCard my-2 mx-2 card">
              <div className="image">
                <img class="card-img-top" src={bookImg} alt="" />
              </div>

              <div className="title">
                <h4 class="card-title"> {item.bookName}</h4>
              </div>
              <div className="author">by {item.author}</div>
              <div className="quantity">({item.quantity})</div>
              <div className="price">Rs.{item.price}</div>

              {item.isCart ? (
                <button className="addedtobag">ADDED TO BAG</button>
              ) : (
                <div className="displayadd">
                  <button
                    type="button"
                    className=" displayadd1"
                    onClick={(e) => addedToBag(e, item)}
                  >
                    {" "}
                    ADD TO BAG{" "}
                  </button>

                  <button
                    type="button"
                    className="displayWhishlist1"
                    onClick={(e) => addedToWhishlist(e, item)}
                  >
                    WHISHLIST
                  </button>
                </div>
              )}
              <div className="descClass">
                <div className="bookdetails">Book Detail</div>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation example" className="paginationdisplay">
        <ul class="pagination">
          <li class="page-item">
            <a class=" black page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
