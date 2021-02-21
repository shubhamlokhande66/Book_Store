
import axios from 'axios'

let UserRegister = (data) => {
    const URL = "https://backend-bookstore.herokuapp.com/bookstore_user/registration";
    console.log("This is from service class", data);
    return axios.post(`${URL}`, data)
  };

  let userlogin = (data) => {
    const URL = "https://backend-bookstore.herokuapp.com/bookstore_user/login";
    console.log("This is from service class", data);
    return axios.post(`${URL}`, data)
  };






// export default class userServices {
//     SignUp = (data) => {
//         return axios.Post(`${baseUrl}/registration`, data);
//     };

//     SignIn = (data) => {
//         return axios.Post(`${baseUrl}/login`, data);
//     }

// }

export default { UserRegister ,userlogin }