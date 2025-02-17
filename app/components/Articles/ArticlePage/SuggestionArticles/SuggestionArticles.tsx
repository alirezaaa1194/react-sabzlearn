import { useQuery } from "@tanstack/react-query";
import type { articleType, singleArticleType } from "~/types/article.type";
import { getAllArticles } from "~/utils/utils";
import SuggestionArticleBox from "./SuggestionArticlesBox";
import { BookOpenFillIcon } from "public/svg/svgs";
import NullMessage from "~/components/NullMessage/NullMessage";

function SuggestionArticles({ article }: { article: singleArticleType }) {
  const { data: allArticles } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  let suggestionArticles: articleType[] = allArticles?.data.filter((allArticle: articleType) => allArticle.categoryID === article.categoryID._id && allArticle._id !== article._id);
  suggestionArticles = suggestionArticles.sort((a: articleType, b: articleType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));

  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8">
      <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-amber-400 rounded-r-sm"></span>
        <BookOpenFillIcon className="hidden md:inline-block text-amber-400 w-10 h-10" />
        <h3 className="font-MorabaBold text-xl md:text-2xl">پیشنهاد مطالعه</h3>
      </div>
      {suggestionArticles.length ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {suggestionArticles.slice(0, 4).map((suggestionArticle: articleType) => (
            <SuggestionArticleBox key={suggestionArticle._id} suggestionArticle={suggestionArticle} />
          ))}
        </div>
      ) : (
        <NullMessage title="مقاله پیشنهادی وجود ندارد" />
      )}
    </div>
  );
}

export default SuggestionArticles;
