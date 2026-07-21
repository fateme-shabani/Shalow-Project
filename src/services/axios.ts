import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
