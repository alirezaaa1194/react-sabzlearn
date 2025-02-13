import React from "react";
import type { Route } from "./+types/Blog";
import { getAllArticles, getAllCategories } from "~/utils/utils";
import AddArticleForm from "~/components/admin-panel/Blog/AddArticleForm/AddArticleForm";
import ArticleList from "~/components/admin-panel/Blog/ArticlesList";

export async function loader({ params, request }: Route.LoaderArgs) {
  const allArticles = await getAllArticles();
  const allCategories = await getAllCategories();

  return { allArticles, allCategories };
}

function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">مقاله</span> جدید
        </span>
        <AddArticleForm articles={loaderData.allArticles.data} categories={loaderData.allCategories.data} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">مقالات</span>
        </span>
        <ArticleList article={loaderData?.allArticles?.data} />
      </div>
    </div>
  );
}

export default Blog;
