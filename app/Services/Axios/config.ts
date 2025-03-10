import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://sabzlearn-backend-ochre.vercel.app/v1",
  // baseURL: "http://127.0.0.1:4000/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
