import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import Services from "../Services/Service"
const Service =new Services();
import Books from "../Books/Books"
import "./Dashboard.scss";
import { connect } from 'react-redux';
import { GetBook } from '../Redux/Action/Action';
import ProtectedRoute from "../../../AdminProtectedRoutes"

function Admindashboard(props){
  const [bookList, setBookList] = useState([]);

  const getBook = () => {
    Service.getBooks()
        .then((res) => {
            setBookList(res.data.result);
            
        })
        .catch((err) => {
            console.log(err);
        });
}
props.Book(bookList);



useEffect(() => {
    getBook();
}, []);



  return (
    <div>
      <ProtectedRoute>
      <div className="navbarDashboard1">
        <AdminHeader />
      </div>
      </ProtectedRoute>
      <ProtectedRoute>
<Books getBook={getBook} />
</ProtectedRoute>
    </div>
  );
}
export default connect(null,{
  Book: GetBook,
})(Admindashboard);