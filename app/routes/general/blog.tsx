import React from "react";
import type { Route } from "./+types/blogs";
import { getSingleArticle } from "~/utils/utils";
import type { singleArticleType } from "~/types/article.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import ShortLinkBox from "~/components/Articles/ArticlePage/ShortLinkBox";
import { Toaster } from "react-hot-toast";
import "../../components/Articles/ArticlePage/ArticlePage.css";
import SuggestionArticles from "~/components/Articles/ArticlePage/SuggestionArticles/SuggestionArticles";
import ArticleBody from "~/components/Articles/ArticlePage/ArticleBody";
import type { MetaFunction } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const data: { data: singleArticleType } = await getSingleArticle(params["blog-name"] as string);
  return { data };
}

export const meta: MetaFunction<typeof loader> = ({ data }: any) => {
  return [{ title: `${data.data.data.title} - سبزلرن` }];
};

function blog({ loaderData }: Route.ComponentProps) {
  const { data: article } = (loaderData.data);

  return (
    <main className="container pt-8 lg:pt-10 flex flex-col">
      <Toaster />
      <Breadcrumb titleName="بلاگ" titleLink="/blogs" dataName={article.title} dataLink={`/blog/${article.shortName}`} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10">
        <section className="col-span-full lg:col-span-8 xl:col-span-9">
          <ArticleBody article={article} />
          <SuggestionArticles article={article} />
        </section>
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
          <ShortLinkBox />
        </aside>
      </div>
    </main>
  );
}

export default blog;
