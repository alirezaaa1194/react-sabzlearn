import { apiRequest } from "~/Services/Axios/config";

export function getMenus() {
  const data = apiRequest.get("/menus");
  return data;
}
