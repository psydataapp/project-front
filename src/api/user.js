import axios from "axios";

const userApi = () => {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/users`, data);
};

export default userApi;
