import { Form, redirect } from "react-router";
import type { Route } from "./+types/logout";
import { getCookie } from "~/utils/utils";

export async function action({ request }: Route.ActionArgs) {
//   const session = getCookie(request.headers.get("Cookie"), "token");
  return redirect("/", {
    headers: {
      "Set-Cookie": `token=${null}; Path=/; HttpOnly; Secure; Max-Age=-2592000`,
    },
  });
}