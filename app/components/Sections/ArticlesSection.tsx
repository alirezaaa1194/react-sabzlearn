import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllArticles } from "~/utils/utils";
import LinkSectionHeader from "./LinkSectionHeader";
import { Link } from "react-router";
import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import ArticlesCard from "../Articles/ArticlesCard";
import type { articleCreatorType, articleType } from "~/types/article.type";

function ArticlesSection() {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  return (
    <section className="container flex flex-col mt-[100px] lg:mt-40">
      <LinkSectionHeader
        headerTitle="آخـــرین مقالات ما"
        headerDesc="مقاله های بروز برنامه نویسی و تکنولوژی"
        linkElem={
          <Link to="/blogs" className="flex items-center gap-x-1.5 text-sm font-DanaMedium hover:transition-colors text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500">
            همه مقالات
            <ArrowUpLeftMiniIcon className="size-5" />
          </Link>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
        {articles?.data.slice(0, 4)?.map((article: articleType) => (
          <ArticlesCard article={article} />
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
