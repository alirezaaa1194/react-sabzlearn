import React from "react";
import type { Route } from "./+types/blog";
import { getSingleArticle } from "~/utils/utils";
import type { articleType } from "~/types/article.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import { ChevronDownIcon, ClipboardDocumentIcon, ShareIcon } from "public/svg/svgs";
import ShortLinkBox from "~/components/Articles/ArticlePage/ShortLinkBox";
import { Toaster } from "react-hot-toast";

export async function loader({ params }: Route.LoaderArgs) {
  const data = await getSingleArticle(params["blog-name"]);

  return { data };
}

function blog({ loaderData }: Route.ComponentProps) {
  const { data: article }: { data: articleType } = loaderData.data;
  console.log(article);

  return (
    <main className="container pt-8 lg:pt-10 flex flex-col gap-y-8 lg:gap-y-10">
      <Toaster />
      <Breadcrumb titleName="بلاگ" titleLink="/blog" dataName={article.title} dataLink={`/blog/${article.shortName}`} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10">
        <section></section>

        <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
          <ShortLinkBox />
        </aside>
      </div>
    </main>
  );
}

export default blog;
