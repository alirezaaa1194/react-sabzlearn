import { redirect } from "react-router";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const token = formData.get("token");

  return redirect("/", {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; Max-Age=2592000`,
    },
  });
}
