import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "http://127.0.0.1:4000/v1",
});
