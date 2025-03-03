import { ChevronDownIcon, FolderOpenIcon } from "public/svg/svgs";
import { Checkbox } from "@heroui/checkbox";
import React, { memo, useEffect, useState } from "react";
import type { categoryType } from "~/types/category.type";
import { useSearchParams } from "react-router";

const CategoryFilter = memo(({ categories }: { categories: categoryType[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenCategoryBox, setIsOpenCategoryBox] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category"));
  }, [searchParams]);

  return (
    <div className="bg-white dark:bg-darker rounded-lg p-5 hidden md:block overflow-hidden font-DanaMedium">
      <div className={`flex items-center justify-between ${isOpenCategoryBox ? "mb-5 pb-5 border-b border-b-neutral-200/60 dark:border-b-white/10 h-fit" : ""}`}>
        <div className="flex items-center gap-x-2 font-DanaDemiBold">
          <FolderOpenIcon className="size-7" />
          دسته بندی دوره ها{" "}
        </div>
        <button type="button" onClick={() => setIsOpenCategoryBox((prev) => !prev)}>
          <ChevronDownIcon className={`w-[22px] h-[22px] ${isOpenCategoryBox ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className={`flex flex-col gap-y-[18px] ${isOpenCategoryBox ? "h-fit" : "h-0 overflow-hidden"}`}>
        {[...categories].reverse().map((category: categoryType) => (
          <div key={category._id} className="space-y-[18px]">
            <Checkbox
              color="secondary"
              isSelected={selectedCategory === category?.name ? true : false}
              onValueChange={(isSelected) => {
                if (isSelected) {
                  searchParams.set("category", category?.name);
                  setSearchParams(searchParams, { replace: true, });
                  setSelectedCategory(category?.name);
                } else {
                  searchParams.delete("category");
                  setSearchParams(searchParams, { replace: true, });
                  setSelectedCategory(null);
                }
              }}
            >
              <span className="text-sm select-none">{category.title}</span>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CategoryFilter;
