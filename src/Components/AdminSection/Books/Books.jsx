import React, { useState, useEffect } from "react";
import Services from "../AdminService/Service";
const Service = new Services();
import { connect } from "react-redux";
import "./Books.scss";
import { ToastContainer, toast } from "react-toastify";
toast.configure();
function Books(props) {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState([]);
  const [bookFlag, setBookFlag] = React.useState(false);
  const [bookError, setBookError] = React.useState("");
  const [author, setAuthor] = useState([]);
  const [authorFlag, setAuthorFlag] = React.useState(false);
  const [authorError, setAuthorError] = React.useState("");
  const [description, setDescription] = useState([]);
  const [descriptionFlag, setDescriptionFlag] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState("");
  const [quantity, setQuantity] = useState([]);
  const [quantityFlag, setQuantityFlag] = React.useState(false);
  const [quantityError, setQuantityError] = React.useState("");
  const [price, setPrice] = useState([]);
  const [priceFlag, setPriceFlag] = React.useState(false);
  const [priceError, setPriceError] = React.useState("");
  const [discount, setDiscount] = useState([]);
  const [discountFlag, setDiscountFlag] = React.useState(false);
  const [discountError, setDiscountError] = React.useState("");
  const [editBookModal, setEditBookModal] = useState([false]);
  const [id, setId] = useState([]);

  const makeInitial = () => {
    setBookFlag(false);
    setBookError("");
    setAuthorFlag(false);
    setAuthorError("");
    setDescriptionFlag(false);
    setDescriptionError("");
    setQuantityFlag(false);
    setQuantityError("");
    setPriceFlag(false);
    setPriceError("");
    setDiscountFlag(false);
    setDiscountError("");
  };

  const editbooks = (data) => {
    debugger;
    setEditBookModal(!editBookModal);
    setId(data._id);
    setBook(data.bookName);
    setAuthor(data.author);
    setDescription(data.description);
    setPrice(data.quantity);
    setQuantity(data.price);
    setDiscount(data.discountPrice);
  };

  const toggleEditBookModal = () => {
    SetEditBookModal(!editBookModal);
  };

  const addbook = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      let data = {
        bookName: book,
        author: author,
        description: description,
        quantity: quantity,
        price: price,
        discountPrice: discount,
      };
      Service.addBooks(data)
        .then((data) => {
          console.log("Add Book Data", data);
          props.getBook();
        })
        .catch((err) => {
          console.log(err);
        });
      toggleEditBookModal();
      toast.success("Book Added successfully....", {
        position: "top-left",
        autoClose: 5000,
        draggable: false,
      });
    }
  };

  const removeBook = (data) => {
    let id = data._id;
    Service.removebook(id)
      .then((data) => {
        getBook();
        console.log("Successfully book deleted" + data);
        props.getBook();
      })
      .catch((err) => {
        console.log("Error while removing" + err);
      });
    toast.success("Book Deleted successfully....", {
      position: "top-left",
      autoClose: 5000,
      draggable: false,
    });
  };

  useEffect(() => {
    console.log("booksuseeffcect value", bookList);
  }, [bookList]);

  const Updatebook = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      let data = {
        bookName: book,
        author: author,
        description: description,
        quantity: quantity,
        price: price,
        discountPrice: discount,
      };
      Service.Updatebook(id, data)
        .then((data) => {
          console.log("Successfully book update" + data);
          props.getBook();
        })
        .catch((err) => {
          console.log("Error while update" + err);
        });
      toast.success("Book Update successfully....", {
        position: "top-left",
        autoClose: 5000,
        draggable: false,
      });
    }
  };

  const patternCheck = (props) => {
    makeInitial();
    const namePattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const AuthorPattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const discriptionpattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const QuantityPattern = /^[1-9]{1}$/;
    const PricePattern = /^[0-9]{1,}$/;
    const discountPattern = /^[0-9]{1,}$/;

    let isError = false;

    if (!namePattern.test(book)) {
      setBookFlag(true);
      setBookError("Name is Not Proper");
      isError = true;
    }
    if (!AuthorPattern.test(author)) {
      setAuthorFlag(true);
      setAuthorError("Author is Not Proper");
      isError = true;
    }
    if (!discriptionpattern.test(description)) {
      setDescriptionFlag(true);
      setDescriptionError("Desripation is Not Proper");
      isError = true;
    }
    if (!QuantityPattern.test(quantity)) {
      setQuantityFlag(true);
      setQuantityError("Quantity is not Proper");
      isError = true;
    }
    if (!PricePattern.test(price)) {
      setPriceFlag(true);
      setPriceError("Price is not Proper");
      isError = true;
    }
    if (!discountPattern.test(discount)) {
      setDiscountFlag(true);
      setDiscountError("Discount is Not Proper");
      isError = true;
    }

    return isError;
  };

  return (
    <div class="container">
      <div className="AddButton">
        <button
          type="button"
          class="btnadd1 btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          ADD BOOKS
        </button>
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

        {props.bookList.map((data, id) => (
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
                {/* <Update   data={data}/> */}
                <button
                  type="button"
                  class=" btnadd editbutton btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#UpdateBook"
                  onClick={() => editbooks(data)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class=" btnadd deletebutton btn btn-primary btn-sm"
                  onClick={() => removeBook(data)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      {/* Update Book */}
      <div class="modal" id="UpdateBook">
        <div class=" updatemodel modal-dialog">
          <div class=" mainbosy modal-content">
            <div class="modal-header">
              <h4 class="addbooktitile modal-title">UPADTE BOOKS</h4>
            </div>

            <div className="maininput">
              <div class="addbookm ">
                <label for="usr">Book Name</label>
                <input
                  type="text"
                  class="booksinputad form-control"
                  id="usr"
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                />
                <span className="error-output">{bookError}</span>
              </div>
              <div class="addbookm ">
                <label for="usr">Author</label>
                <input
                  type="text"
                  class=" booksinputad form-control"
                  id="usr"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <span className="error-output">{authorError}</span>
              </div>
              <div class=" addbookm ">
                <label for="usr">Description:</label>
                <input
                  type="text"
                  class=" booksinputad form-control"
                  id="usr"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <span className="error-output">{descriptionError}</span>
              </div>
              <div class="addbookm ">
                <label for="usr">Quantity</label>
                <input
                  type="text"
                  class="booksinputad form-control"
                  id="usr"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <span className="error-output">{quantityError}</span>
              </div>
              <div class="addbookm">
                <label for="usr">Price</label>
                <input
                  type="text"
                  class=" booksinputad form-control"
                  id="usr"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="error-output">{priceError}</span>
              </div>
              <div class="addbookm">
                <label for="usr">Discount Price</label>
                <input
                  type="text"
                  class="booksinputad form-control"
                  id="usr"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <span className="error-output">{discountError}</span>
              </div>
            </div>

            <div class="Addbookbutton">
              <button
                type="button"
                class=" btnadd btn btn-primary"
                onClick={() => Updatebook()}
              >
                UPDATE BOOK
              </button>
            </div>
            <div className="closed">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="myModal">
        <div class=" updatemodel modal-dialog">
          <div class=" mainbosy modal-content">
            <div class="modal-header">
              <h4 class="addbooktitile modal-title">ADD NEW BOOKS</h4>
            </div>
            <div className="maininput">
              <div class="addbookm ">
                <label for="usr">Book Name</label>
                <input
                  name="bookName"
                  type="text"
                  class="form-control"
                  error={bookFlag}
                  helperText={bookError}
                  id="usr"
                  onChange={(e) => setBook(e.target.value)}
                />
                <span className="error-output">{bookError}</span>
              </div>
              <div class="addbookm ">
                <label for="usr">Author</label>
                <input
                  type="text"
                  class="form-control"
                  error={authorFlag}
                  helperText={authorError}
                  id="usr"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <span className="error-output">{authorError}</span>
              </div>
              <div class=" addbookm ">
                <label for="usr">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  error={descriptionFlag}
                  helperText={descriptionError}
                  id="usr"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <span className="error-output">{descriptionError}</span>
              </div>
              <div class="addbookm ">
                <label for="usr">Quantity</label>
                <input
                  type="text"
                  class="form-control"
                  error={quantityFlag}
                  helperText={quantityError}
                  id="usr"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <span className="error-output">{quantityError}</span>
              </div>
              <div class="addbookm">
                <label for="usr">Price</label>
                <input
                  type="text"
                  class="form-control"
                  error={priceFlag}
                  helperText={priceError}
                  id="usr"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="error-output">{priceError}</span>
              </div>
              <div class="addbookm">
                <label for="usr">Discount Price</label>
                <input
                  type="text"
                  class="form-control"
                  error={discountFlag}
                  helperText={discountError}
                  id="usr"
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <span className="error-output">{discountError}</span>
              </div>
            </div>

            <div class="Addbookbutton">
              <button
                type="button"
                class=" btnadd  btn btn-primary"
                onClick={() => addbook()}
              >
                ADD BOOK
              </button>
            </div>
            <div className="closed">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookArray,
  };
};
export default connect(mapStateToProps)(Books);
