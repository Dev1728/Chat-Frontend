import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-backend-3v52.onrender.com/api" : "/api",
  withCredentials: true,
});
