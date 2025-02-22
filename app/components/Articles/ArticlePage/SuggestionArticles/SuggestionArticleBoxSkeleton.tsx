import { Skeleton } from "@heroui/skeleton";
import React from "react";

function SuggestionArticleBoxSkeleton() {
  return (
    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-lg">
      <Skeleton className="h-20 rounded-xl w-56 aspect-video" />
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-5 w-3/4 rounded-lg" />
        <div className="flex items-center gap-x-1">
          <Skeleton className="size-5 rounded-lg" />
          <Skeleton className="h-4 w-1/3 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default SuggestionArticleBoxSkeleton;
