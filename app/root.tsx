import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteLoaderData } from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import session from "./sessions.server";
import type { ComponentProps } from "react";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  return { theme: currentSession.data.theme ?? "light" };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useRouteLoaderData("root");

  return (
    <html lang="fa" dir="rtl" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="https://sabzlearn.ir/wp-content/uploads/2024/12/cropped-128px-1-192x192.png" sizes="192x192"></link>
        <meta name="theme-color" content="#22C55E"></meta>
        <Meta />
        <Links />
      </head>
      <body className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 2xl:max-w-[1440px] 2xl:mx-auto">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
