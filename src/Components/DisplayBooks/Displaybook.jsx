import React, { useState, useEffect, Fragment } from 'react';

import Bookservice from "../../Services/BookService"
import './Displaybooks.scss'
import bookImg from "../Assets/Image11.png";
 const bookservice= new Bookservice();
export default function DisplayNotes() {
  const [BookList, setBookList] = useState([]);
console.log(BookList)
    useEffect(() => {
        getAllBooks();
      }, []);




    const getAllBooks = () => { 
        bookservice
          .getBooks()
          .then((res) => {
            console.log(res)
            setBookList(res.data.result);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const addedToBag = (e,item) => { 
        console.log(item)
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

    return (
      <div className="DisplayMain">
        <div className="bookSize">
          Books 
        </div>
        <div className="bookSize1">({BookList.length} items) </div>
        {/* <div>
        <select class="form-control form-control-sm">
  <option>Small select</option>
  <option>Small select</option>
  <option>Small select</option>
  <option>Small select</option>
</select>
        </div> */}
        
<div className="container-fluid">

{BookList.map((item)=>(
  <div className="display">
  <div class="noteCard my-2 mx-2 card" >

<div className="image"> 
  <img class="card-img-top" src={bookImg} alt=""/>
  </div>

  <div className="title">
    <h5 class="card-title"> {item.bookName}</h5>
    </div>
    <div className="author">
by {item.author}
</div>
<div className="quantity">
   ({item.quantity})
  </div>
  <div className="price">
    Rs.{item.price}
    </div>
    <div className="displayadd">
      
    <button type="button" className="displayadd1" onClick={(e) =>addedToBag(e,item)}>ADD TO BAG</button>
    {/* <button type="button" class="btn btn-secondary">Secondary</button> */}
    </div>
    <div className="displayWhishlist">
    <button type="button" className="displayWhishlist1">WHISHLIST</button>
    </div>
</div>
</div>
 ))}

 </div>
 </div>

    );



}