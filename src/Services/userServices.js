import Axios from "./axoisServices";
const axios = new Axios();
const URL = process.env.REACT_APP_BASE_URL;
// savadof898@onzmail.com
let userregister = (data) => {
  return axios.Post(`${URL}/registration`, data);
};



let userlogin = (data) => {
  return axios.Post(`${URL}/login`, data);
};



export default { userregister, userlogin };
