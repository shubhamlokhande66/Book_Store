import Axios from "../../../Services/axoisServices";
const baseUrl = process.env.REACT_APP_BASE_URL;
const axios = new Axios();

export default class productServices {
  getBooks = () => {
    return axios.Get(`${baseUrl}/get/book`);
  };

  addBooks = (data) => {
    const user = localStorage.getItem("bookStoreTokenX");
    return axios.Post(`${baseUrl}/admin/add/book/`,data ,{
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  removebook = (id) => {
    const user = localStorage.getItem("bookStoreTokenX");
    return axios.Delete(`${baseUrl}/admin/delete/book/${id}`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  Updatebook = (id) => {
    const user = localStorage.getItem("bookStoreTokenX");
    return axios.Put(`${baseUrl}/admin/update/book/${id}`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };







}
