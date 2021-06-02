import React, { useState, useEffect, useContext } from "react";
import Bookservice from "../../Services/BookService";
import "./Displaybooks.scss";
import bookImg from "../../Assets/Image11.png";
import Pagination from "../Pagination/Pagination";
import bookListContext from "../Context/Context";
import { toast } from "react-toastify";
import { Input } from "reactstrap";

toast.configure();
const bookservice = new Bookservice();

export default function DisplayNotes(props) {
  const [details, SetDetails] = React.useState(false);
  const [book, setBooks] = React.useState([]);
  const [postsPerPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sort,setSort] = useState([]);
  const { books } = useContext(bookListContext);

  const addedToBag = (e, item) => {
    console.log(item);
    e.stopPropagation();
    const id = item._id;
    item.isCart = true;
    bookservice
      .addToCart(id)
      .then((item) => {
        console.log(item);
        SetDetails(true);
        props.allCartItem();
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
  const addedToWhishlist = (e, item) => {
    const id = item._id;
    bookservice
      .addToWishlist(id)
      .then((item) => {
        console.log(item);
        props.allWishlistItem();
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success("Book Added to WishList successfully....", {
      position: "top-left",
      autoClose: 5000,
      draggable: false,
    });
  };
 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleChange = (event) => {  
    setSort(event.target.value),
    console.log("PPPPPPPPPPPPPPPPPP",sort);

 
    switch (sort) {
      case "0":
        props.setBooks(books);
        break;
      case "2":
        props.setBooks(data);
        props.setBooks(books.sort((a, b) => (a.price > b.price ? 1 : -1)));
        break;
      case "1":
        props.setBooks(data);
        props.setBooks(books.sort((a, b) => (a.price > b.price ? -1 : 1)));
        break;
      case "3":
        props.setBooks(data);
        props.setBooks(books.reverse());
        break;
    }
  
  };

  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  // savadof898@onzmail.com
  return (
    <div className="DisplayMain">
      <div className="displaybdyy">
        <div className="bookSize">Books</div>
      </div>
      <div className="bookSize1">({books.length} items) </div>
      <form variant="outlined" className="form-Control">
        <select
          className="selectoption"
          value={sort}
          onChange={handleChange}
        >
          <option className="optionsort" value={0}>
            Sort by relevance
          </option>
          <option value={1}>Price: low to high</option>
          <option value={2}>Price: high to low</option>
          <option value={3}>Newest Arrival</option>
        </select>
      </form>
      <div className="container-fluid">
        {currentBooks?.map((item) => (
          <div className="display">
            {props.cartBooks?.map((cart) => {
              if (cart.product_id ?._id === item._id) {
                item.isCart = true;
              }
            })}
            <div class="noteCard my-2 mx-2 card">
              <div className="image">
                <img class="card-img-top" src={bookImg} alt="" />
              </div>

              <div className="title">
                <h6 class="card-title"> {item.bookName}</h6>
              </div>
              <div className="author">by {item.author}</div>
              <div className="quantity">({item.quantity})</div>
              <div className="price">Rs.{item.price}</div>
              {item.isCart ? (
                <div>
                  <button className="addedtobagb">
                    <h6 className="addedtobagb1"   data-testid="bag" >ADDED TO BAG</h6>
                  </button>
                </div>
              ) : (
                <div className="displayadd">
                  <button
                    type="button"
                    className=" displayadd1"
                    onClick={(e) => addedToBag(e, item)}
                  >
                    <h6 className="addtobagbutton">ADD TO BAG </h6>
                  </button>

                  <button
                    type="button"
                    className="displayWhishlist1"
                    onClick={(e) => addedToWhishlist(e, item)}
                  >
                    <h6 className="addtobagbutton">WHISHLIST</h6>
                  </button>
                </div>
              )}
              <div></div>
              <div className="descClass">
                <div className="bookdetails">Book Detail</div>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="paginationBlock">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={books.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
}
