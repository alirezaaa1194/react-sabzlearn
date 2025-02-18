import React from "react";
import type { Route } from "./+types/DraftArticle";
import { getAllCategories, getSingleArticle } from "~/utils/utils";
import DraftArticleForm from "~/components/admin-panel/Blog/AddArticleForm/DraftArticleForm";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const mainArticle = await getSingleArticle(params.articleShortId);
  const allCategories = await getAllCategories();

  return { mainArticle, allCategories };
}


export const meta: MetaFunction<typeof loader> = ({ data }: any) => {
  return [{ title: `ادامه پیش نوشتن مقاله - ${data.mainArticle.data.title} - پنل مدیریت - سبزلرن` }];
};

function DraftArticle({ loaderData }: Route.ComponentProps) {
  const mainArticle = loaderData.mainArticle.data;

  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          ادامه نوشتن <span className="text-secondary">مقاله</span>
        </span>
        <DraftArticleForm article={mainArticle} categories={loaderData.allCategories.data} />
      </div>
    </div>
  );
}

export default DraftArticle;
