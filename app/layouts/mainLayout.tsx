import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet, useLoaderData } from "react-router";
import { getAllArticles, getAllCourses, getMenus, getPopularCourses } from "~/utils/utils";

export async function loader() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
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
