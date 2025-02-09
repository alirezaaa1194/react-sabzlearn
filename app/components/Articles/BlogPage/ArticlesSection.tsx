import React, { useEffect, useState } from "react";
import ArticlesCard from "../ArticlesCard";
import PageNullMessage from "~/components/NullMessage/PageNullMessage";
import type { articleType } from "~/types/article.type";
import { Button } from "@heroui/button";
import { ChevronDownIcon } from "public/svg/svgs";
import { useLocation } from "react-router";

function ArticlesSection({ filteredArticles }: { filteredArticles: articleType[] }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const paginationHandler = () => {
    if ((currentPage + 1) * 12 <= filteredArticles?.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(0);
  }, [location]);

  return (
    <>
      {filteredArticles.length ? (
        <div className="flex flex-col items-center">
          <div className="grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredArticles.slice(0, (currentPage + 1) * 12).map((article: any) => {
              return <ArticlesCard key={article._id} article={article} />;
            })}
          </div>

          {(currentPage + 1) * 12 < filteredArticles?.length ? (
            <Button className="mt-5 mx-auto h-10 px-3 rounded-lg text-primary bg-transparent border border-primary transition-colors hover:bg-[#1eb35b1a] font-DanaRegular" onPress={paginationHandler}>
              مشاهده بیشتر
              <ChevronDownIcon className="size-5" />
            </Button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <PageNullMessage title="متاسفانه دوره ای پیدا نشد" />
      )}
    </>
  );
}

export default ArticlesSection;
