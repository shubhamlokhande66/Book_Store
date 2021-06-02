import Axios from "./axoisServices";
const baseUrl = process.env.REACT_APP_BASE_URL;
const axios = new Axios();

export default class productServices {
  getBooks = () => {
    return axios.Get(`${baseUrl}/get/book`);
  };

  addToCart = (id) => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Post(`${baseUrl}/add_cart_item/${id}`, false, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  getCartItem = () => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Get(`${baseUrl}/get_cart_items`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };
  addOrder = (data) => {
    const user = localStorage.getItem("bookStoreToken");
    console.log(data);
    return axios.Post(`${baseUrl}/add/order`, data, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  deleteCartItem = (id) => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Delete(`${baseUrl}/remove_cart_item/${id}`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  addToWishlist = (id) => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Post(`${baseUrl}/add_wish_list/${id}`, false, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };


  getWishlistItem = () => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Get(`${baseUrl}/get_wishlist_items`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  deleteWishlistItem = (id) => {
    const user = localStorage.getItem("bookStoreToken");
    return axios.Delete(`${baseUrl}/remove_wishlist_item/${id}`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

}
