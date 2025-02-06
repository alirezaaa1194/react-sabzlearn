import { ArrowLeftCircleMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { articleType } from "~/types/article.type";
import { baseUrl } from "~/utils/utils";
import moment from "jalali-moment";

type ArticlesCardPropsType = {
  article: articleType;
};

function ArticlesCard({ article }: ArticlesCardPropsType) {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-darker">
      <Link to={`/blog/${article.shortName}`}>
        <img src={`${baseUrl}/courses/covers/${article.cover}`} className="rounded-xl w-full max-h-[180px] object-cover" alt="" />
      </Link>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between px-[18px] py-4 gap-8 h-full">
          <div className="flex flex-col">
            <Link to={`/blog/${article.shortName}`} className="font-DanaDemiBold line-clamp-2 mb-3">
              {article.title}
            </Link>
            <p className="text-sm line-clamp-3 text-gray-700 dark:text-gray-400 font-DanaMedium">{article.description}</p>
          </div>
          <div className="flex items-center justify-between  text-slate-500 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10">
            <span className="flex items-center gap-x-0.5 font-DanaRegular">{article.creator?.name}</span>
            <span className="flex items-center gap-x-0.5 font-DanaMedium">{moment(article.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
          </div>
        </div>

        <div className="flex pb-4 w-full items-center justify-center">
          <Link to={`/blog/${article.shortName}`} className="flex items-center justify-center gap-x-1 font-DanaMedium hover:transition-colors hover:text-green-500">
            <span>مطالعه مقاله</span>
            <ArrowLeftCircleMiniIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlesCard;
