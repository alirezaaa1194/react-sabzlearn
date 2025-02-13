import { getCookie, updateUserInfo, updateUserInfoByAdmin } from "~/utils/utils";
import type { Route } from "./+types/EditUser";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const userNewInfo = formData.get("userNewInfo") as string;
  const userId = formData.get("userId") as string;

  try {
    const res = await updateUserInfoByAdmin(JSON.parse(userNewInfo), userId, token);

    return { success: true };
  } catch {
    return { success: false };
  }
}
