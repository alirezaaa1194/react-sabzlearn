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

export function getAllArticles() {
  const data = apiRequest.get("/articles");
  return data;
}

export type registerFuncPropsType = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};
export function registerHandler({ name, username, email, phone, password, confirmPassword }: registerFuncPropsType) {
  const res = apiRequest.post("/auth/register", { name, username, email, phone, password, confirmPassword });
  return res;
}
export type loginFuncPropsType = {
  identifier: string;
  password: string;
};

export function loginHandler({ identifier, password }: loginFuncPropsType) {
  const res = apiRequest.post("/auth/login", { identifier, password });
  return res;
}

export const getCookie = (cookieHeader: string | null, cookieName: string): string | null => {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
};
export const getMe = async (token: string | null) => {
  const res = await apiRequest.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const baseUrl = "http://127.0.0.1:4000";
