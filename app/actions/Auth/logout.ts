import { Form, redirect } from "react-router";
import { getCookie } from "~/utils/utils";
import type { Route } from "./+types/logout";

export async function action({ request }: Route.ActionArgs) {
  return redirect("/", {
    headers: {
      "Set-Cookie": `token=${null}; Path=/; HttpOnly; Secure; Max-Age=-2592000`,
    },
  });
}
