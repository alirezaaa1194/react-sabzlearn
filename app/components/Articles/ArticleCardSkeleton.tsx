import { Card, CardBody, Skeleton } from "@heroui/react";
import React from "react";

function ArticleCardSkeleton() {
  return (
    <Card className="flex flex-col rounded-xl bg-white dark:bg-darker w-full">
      <Skeleton className="rounded-xl w-full h-[180px]" />
      <CardBody className="flex flex-col justify-between p-4 gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>
        <div className="flex items-center justify-between border-b pb-2 dark:border-white/10">
          <Skeleton className="h-4 w-1/3 rounded-lg" />
          <Skeleton className="h-4 w-1/4 rounded-lg" />
        </div>
        <div className="flex justify-center pt-2">
          <Skeleton className="h-6 w-1/3 rounded-lg" />
        </div>
      </CardBody>
    </Card>
  );
}

export default ArticleCardSkeleton;
