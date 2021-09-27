import axios from "axios";

const communityApi = {
  add: (data) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/community`, data),
  fetch: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/community/paging?page=${page}&size=${size}`
    ),
  remove: (id) =>
    axios.delete(`${process.env.REACT_APP_API_BASE}/community/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/community/${data.id}`, data),
};

export default communityApi;
