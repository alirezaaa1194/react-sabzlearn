import moment from "jalali-moment";
import { CalendarIcon, EyeIcon, UserIcon } from "public/svg/svgs";
import type { singleArticleType } from "~/types/article.type";
import { baseUrl } from "~/utils/utils";

import parse from "html-react-parser";
function ArticleBody({ article }: { article: singleArticleType }) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5">
      <div className="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-sky-500 rounded-r-sm"></span>
        <h1 className="font-MorabaBold text-xl md:text-[1.625rem]/10">{article.title}</h1>
      </div>
      <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500 font-DanaMedium text-sm sm:text-base">
        <div className="flex items-center gap-x-1.5">
          <UserIcon className="size-6 sm:size-7" />
          <span>{article.creator?.name}</span>
        </div>
        <div className="flex items-center gap-x-1.5">
          <CalendarIcon className="size-6 sm:size-7" />
          <span>{moment(article.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
        </div>
        <div className="flex items-center gap-x-1.5">
          <EyeIcon className="size-6 sm:size-7" />
          <span>12</span>
        </div>
      </div>
      <img src={`${article.cover}`} loading="lazy" className="w-full max-h-[500px] object-cover rounded-xl" alt={article.title} />
      <div className="blog-body">{parse(article.body)}</div>
    </div>
  );
}

export default ArticleBody;
