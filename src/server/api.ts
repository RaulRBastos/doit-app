import axios from "axios";

const api = axios.create({
  baseURL: "https://api-doit.onrender.com",
});

export default api;
