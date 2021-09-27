import axios from "axios";

const userApi = {
  signUp: (data) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/users/register`, data),
  login: (data) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/users/login`, data),
};

export default userApi;
