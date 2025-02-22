import moment from "jalali-moment";
import { CalendarIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { articleType } from "~/types/article.type";
import { baseUrl } from "~/utils/utils";

function SuggestionArticleBox({ suggestionArticle }: { suggestionArticle: articleType }) {
  return (
    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-lg">
      <img src={`${baseUrl}/courses/covers/${suggestionArticle.cover}`} className="h-20 rounded-xl aspect-video" alt={suggestionArticle.title} />
      <div>
        <Link to={`/blog/${suggestionArticle.shortName}`} className="font-DanaMedium line-clamp-1">
          {suggestionArticle.title}
        </Link>
        <div className="flex items-center gap-x-1 text-slate-500 mt-[18px]">
          <CalendarIcon className="size-5" />
          <span className="font-DanaMedium text-sm">{moment(suggestionArticle.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
        </div>
      </div>
    </div>
  );
}

export default SuggestionArticleBox;
