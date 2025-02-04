import type { Route } from "./+types/blogs";
import { getAllArticles } from "~/utils/utils";
import type { articleType } from "~/types/article.type";
import SearchBox from "~/components/Articles/BlogPage/SearchBox";
import ArticlesSection from "~/components/Articles/BlogPage/ArticlesSection";
import MobileSort from "~/components/Articles/BlogPage/MobileSort";
import DesktopSort from "~/components/Articles/BlogPage/DesktopSort";

export async function loader({ request }: Route.LoaderArgs) {
  const data = await getAllArticles();

  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const searchQuery = searchParams.get("blog_search");
  const sortQuery = searchParams.get("sort");
  let filteredArticles = data?.data?.filter((article: articleType) => article?.title.toLocaleLowerCase()?.includes((searchQuery as string)?.toLocaleLowerCase() || "") || article?.body?.toLocaleLowerCase()?.includes((searchQuery as string)?.toLocaleLowerCase() || ""));

  switch (sortQuery) {
    case "normal":
      filteredArticles = filteredArticles;
      break;
    case "newest":
      filteredArticles = filteredArticles;
      break;
    case "oldest":
      filteredArticles = filteredArticles.reverse();
      break;
    case "popular":
      filteredArticles = filteredArticles;
      break;
  }

  return { filteredArticles };
}

function blogs({ loaderData }: Route.ComponentProps) {
  const { filteredArticles }: { filteredArticles: articleType[] } = loaderData;

  return (
    <main className="container mt-8 sm:mt-10">
      <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-14">
        <div className="flex gap-2.5 items-center">
          <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
          <h2 className="font-MorabaBold text-2xl lg:text-2.5xl text-center">وبلاگ</h2>
        </div>
        <span className="sm:text-xl font-DanaMedium text-slate-500">
          <span>{filteredArticles.length}</span> مقاله
        </span>
      </div>

      <section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
          <div className="space-y-6">
            <SearchBox />
          </div>
          <MobileSort />
        </aside>
        <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
          <DesktopSort />
          <ArticlesSection filteredArticles={filteredArticles} />
        </div>
      </section>
    </main>
  );
}

export default blogs;
