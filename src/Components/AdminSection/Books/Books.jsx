import React, { useState, useEffect } from 'react';
import Services from "../Services/Service"
const Service =new Services();
import { connect } from 'react-redux';
import "./Books.scss"
// import Update from "./update"

function Books (){
    const [bookList, setBookList] = useState([]);
    const [book, setBook] = useState([]);
    const [author, setAuthor] = useState([]);
    const [description, setDescription] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [price, setPrice] = useState([]);
    const [discount, setDiscount] = useState([]);

    console.log("bookanme" ,book)
    console.log('adminbook', bookList)


    const getBook = () => {
        Service.getBooks()
            .then((res) => {
                setBookList(res.data.result);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getBook();
    }, []);



    const addbook = () => { debugger
        let data = {
            bookName: book,
            author:author,
            description: description,
            quantity:quantity,
            price:price,
            discountPrice:discount,
          };
        Service
          .addBooks(data)
          .then((data) => {
            console.log( "Add Book Data",data);
            getBook();
          })
          .catch((err) => {
            console.log(err);
          });
      };


      const removeBook = (data)=> { debugger
        let id=data._id
        Service
          .removebook(id)
          .then((data) => {
            getBook();
            console.log("Successfully book deleted" + data);
          })
          .catch((err) => {
            console.log("Error while removing" + err);
          });
      };


      const editbooks=(data)=>{
        setBook(data.bookName)

      }
    
      useEffect(() => {
       console.log("booksuseeffcect value",bookList)
    }, [bookList]);


      const Updatebook = (data)=> { debugger
       let id=data._id
        Service
          .Updatebook(id)
          .then((data) => {
            console.log("Successfully book update" + data);
          })
          .catch((err) => {
            console.log("Error while update" + err);
          });
      };
    


return(
<div class="container">
  <div className="AddButton" >
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">ADD BOOKS</button>
  </div>
  
  <table class="tablemain table table-bordered table-sm">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>BookName</th>
        <th>Author</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>DiscountPrice</th>
        <th>Action</th>
      </tr>
    </thead>

    {bookList.map((data,id)=>(
    <tbody>
      <tr key={id}> 
      <td>{data.id}</td>
        <td>{data.bookName}</td>
        <td>{data.author}</td>
        <td>{data.description}</td>
        <td>{data.quantity}</td>
        <td>{data.price}</td>
        <td>{data.discountPrice}</td>
        <td>
          {/* <Update/> */}
        <button type="button" class=" editbutton btn btn-primary btn-sm"
      
        data-toggle="modal" data-target="#UpdateBook"
        onClick={() => editbooks(data)}
        >Edit
        </button>
        <button type="button" class="deletebutton btn btn-primary btn-sm"
         onClick={() => removeBook(data)}>
             Delete
        
        </button>

        </td>
      </tr>
    </tbody>
     ))}
  </table>
 
{/* Update Book */}
  <div class="modal" id="UpdateBook">
  <div class="modal-dialog">
    <div class=" mainbosy modal-content">

      <div class="modal-header">
        <h4 class="addbooktitile modal-title">ADD NEW BOOKS</h4>
      </div>
   
      <div className="maininput">
      <div class="addbookm ">
  <label for="usr">Book Name</label>
  <input type="text" class="form-control" id="usr"  onChange={(e) => setBook(e.target.value)} />
</div>
<div class="addbookm ">
  <label for="usr">Author</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setAuthor(e.target.value)}/>
</div>
<div class=" addbookm ">
  <label for="usr">Description:</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setDescription(e.target.value)}/>
</div>
<div class="addbookm ">
  <label for="usr">Quantity</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setQuantity(e.target.value)}  />
</div>
<div class="addbookm">
  <label for="usr">Price</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setPrice(e.target.value)}/>
</div>
<div class="addbookm">
  <label for="usr">Discount Price</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setDiscount(e.target.value)}/>
</div>
</div>
    

      <div class="Addbookbutton">

        <button type="button" class="  btn btn-primary"   onClick={() => Updatebook(data)}>UPDATE BOOK</button>
      </div>

    </div>
  </div>
</div>


{/* Add Book */}

  <div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class=" mainbosy modal-content">

      <div class="modal-header">
        <h4 class="addbooktitile modal-title">ADD NEW BOOKS</h4>
      </div>
      <div className="maininput">
      <div class="addbookm ">
  <label for="usr">Book Name</label>
  <input type="text" class="form-control" id="usr"   onChange={(e) => setBook(e.target.value)}/>
</div>
<div class="addbookm ">
  <label for="usr">Author</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setAuthor(e.target.value)}/>
</div>
<div class=" addbookm ">
  <label for="usr">Description:</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setDescription(e.target.value)}/>
</div>
<div class="addbookm ">
  <label for="usr">Quantity</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setQuantity(e.target.value)}/>
</div>
<div class="addbookm">
  <label for="usr">Price</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setPrice(e.target.value)}/>
</div>
<div class="addbookm">
  <label for="usr">Discount Price</label>
  <input type="text" class="form-control" id="usr" onChange={(e) => setDiscount(e.target.value)}/>
</div>
</div>
      

      <div class="Addbookbutton">

        <button type="button" class="  btn btn-primary" onClick={() => addbook()}>ADD BOOK</button>
      </div>

    </div>
  </div>
</div>



</div>





)

} 

const mapStateToProps = (state) => {
  return {
    bookList:state.bookList ,
  };
};
export default connect(mapStateToProps)(Books);