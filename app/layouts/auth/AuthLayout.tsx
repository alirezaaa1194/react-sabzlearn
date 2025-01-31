import { Outlet } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google"
export default function AuthLayout() {
  return (
    <GoogleOAuthProvider clientId="777031352624-cnivmr3nam4ikvgpip45s8d9r8i36sau.apps.googleusercontent.com">
      <Outlet />
    </GoogleOAuthProvider>
  );
}
