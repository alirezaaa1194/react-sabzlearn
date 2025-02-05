import React from "react";
import ArticlesCard from "../ArticlesCard";
import PageNullMessage from "~/components/NullMessage/PageNullMessage";
import type { articleType } from "~/types/article.type";

function ArticlesSection({ filteredArticles }: { filteredArticles: articleType[] }) {
  return (
    <>
      {filteredArticles.length ? (
        <div className="grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredArticles.map((article) => (
            <ArticlesCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        <PageNullMessage title="متاسفانه دوره ای پیدا نشد" />
      )}
    </>
  );
}

export default ArticlesSection;
