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
  });

  await queryClient.prefetchQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  await queryClient.prefetchQuery({
    queryKey: ["popular-courses"],
    queryFn: getPopularCourses,
  });

  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  await queryClient.prefetchQuery({
    queryKey: ["getme"],
    queryFn: () => (token ? getMe(token) : null),
  });

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  await queryClient.prefetchQuery({
    queryKey: ["user-tickets"],
    queryFn: () => (token ? getUserTickets(token) : null),
  });

  return { dehydratedState: dehydrate(queryClient) };
}

function site() {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
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
