import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet, useLoaderData } from "react-router";
import { getAllArticles, getAllCategories, getAllCourses, getCookie, getMe, getMenus, getPopularCourses, getUserTickets } from "~/utils/utils";
import type { Route } from "./+types/mainLayout";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
    staleTime: 6000 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ["getme"],
    queryFn: () => (token ? getMe(token) : null),
    staleTime: 6000 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ["user-tickets"],
    queryFn: () => (token ? getUserTickets(token) : null),
    staleTime: 6000 * 1000,
  });

  return { dehydratedState: dehydrate(queryClient) };
}

function site() {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 6000 * 1000,
          },
        },
      })
  );

  const { dehydratedState } = useLoaderData<typeof loader>();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <Outlet />
        </HydrationBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default site;
