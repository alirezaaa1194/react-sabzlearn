import axios from "axios";
import { apiRequest } from "~/Services/Axios/config";

export function getMenus() {
  const data = apiRequest.get("/menus");
  return data;
}

export function getAllCourses() {
  const data = apiRequest.get("/courses");
  return data;
}

export function getPopularCourses() {
  const data = apiRequest.get("/courses/popular");
  return data;
}

export const baseUrl = "http://127.0.0.1:4000";
