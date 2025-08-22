import axios from "axios";

 const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://3legant-backend-two.vercel.app",
  withCredentials: true,
});

export default axiosInstance

