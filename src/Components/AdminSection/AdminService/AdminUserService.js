
import axios from 'axios'
const URL = process.env.REACT_APP_BASE_URL;

let AdminUserRegister = (data) => {
    return axios.post(`${URL}/admin/registration`, data)
  };
  let Adminuserlogin = (data) => {
    return axios.post(`${URL}/admin/login`, data)
  };
  export default { AdminUserRegister ,Adminuserlogin }