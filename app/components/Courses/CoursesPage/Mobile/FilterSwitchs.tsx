import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Switch } from "@heroui/switch";
import { useQuery } from "@tanstack/react-query";
import { ChevronDownIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { categoryType } from "~/types/category.type";
import type { courseType } from "~/types/course.type";

function FilterSwitchs({ isUserLogedIn, removeAllFilter, setRemoveAllFilter, setIsOpenFilterDrawer, courses, categories }: { isUserLogedIn: boolean; removeAllFilter: boolean; setRemoveAllFilter: (param: boolean) => void; setIsOpenFilterDrawer: (param: boolean) => void; courses: courseType[]; categories: categoryType[] }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [freeCourses, setFreeCourses] = useState<boolean>(searchParams.get("free-courses") ? true : false);
  const [presellCourses, setPresellCourses] = useState<boolean>(searchParams.get("presell-courses") ? true : false);
  const [registeredCourses, setRegisteredCourses] = useState<boolean>(searchParams.get("registered-courses") ? true : false);

  const [isOpenCategoryBox, setIsOpenCategoryBox] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category"));
  }, [searchParams]);

  useEffect(() => {
    if (removeAllFilter) {
      setFreeCourses(false);
      setPresellCourses(false);
      setRegisteredCourses(false);

      setSelectedCategory(null);

      searchParams.delete("free-courses");
      searchParams.delete("presell-courses");
      searchParams.delete("registered-courses");
      searchParams.delete("category");
    }
  }, [removeAllFilter]);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-[calc(100%-125px)] overflow-auto">
        <ul className="px-5">
          <li className="w-full flex items-center justify-between box-content h-7 py-5 border-b border-b-gray-100 dark:border-b-dark">
            <span className="font-DanaMedium">فقط دوره های رایگان</span>
            <Switch
              color="secondary"
              isSelected={freeCourses}
              onValueChange={(isSelected) => {
                if (isSelected) {
                  searchParams.set("free-courses", "true");
                  setFreeCourses(true);
                  setRemoveAllFilter(false);
                } else {
                  searchParams.delete("free-courses");
                  setFreeCourses(false);
                }
              }}
            />
          </li>
          <li className="w-full flex items-center justify-between box-content h-7 py-5 border-b border-b-gray-100 dark:border-b-dark">
            <span className="font-DanaMedium">در حال پیش فروش</span>
            <Switch
              color="secondary"
              isSelected={presellCourses}
              onValueChange={(isSelected) => {
                if (isSelected) {
                  searchParams.set("presell-courses", "true");
                  setPresellCourses(true);
                  setRemoveAllFilter(false);
                } else {
                  searchParams.delete("presell-courses");
                  setPresellCourses(false);
                }
              }}
            />
          </li>
          {isUserLogedIn ? (
            <li className="w-full flex items-center justify-between box-content h-7 py-5 border-b border-b-gray-100 dark:border-b-dark">
              <span className="font-DanaMedium">دوره ها خریداری شده</span>
              <Switch
                color="secondary"
                isSelected={registeredCourses}
                onValueChange={(isSelected) => {
                  if (isSelected) {
                    searchParams.set("registered-courses", "true");
                    setRegisteredCourses(true);
                    setRemoveAllFilter(false);
                  } else {
                    searchParams.delete("registered-courses");
                    setRegisteredCourses(false);
                  }
                }}
              />
            </li>
          ) : (
            ""
          )}
        </ul>

        <div className="px-5">
          <div className="flex items-center justify-between py-5 cursor-pointer" onClick={() => setIsOpenCategoryBox((prev) => !prev)}>
            <span className="font-DanaMedium select-none">دسته بندی دوره ها</span>
            <ChevronDownIcon className={`size-6 ${isOpenCategoryBox ? "rotate-180" : ""}`} />
          </div>
          {isOpenCategoryBox ? (
            <ul className="flex flex-col gap-y-[14px]">
              {[...categories].reverse().map((category: categoryType) => {
                const categoryCourseLength = courses?.filter((course: courseType) => course?.categoryID?._id === category?._id);

                return (
                  <li key={category._id} className="flex items-center justify-between font-DanaMedium">
                    <Checkbox
                      color="secondary"
                      className="text-sm"
                      isSelected={selectedCategory === category?.name ? true : false}
                      onValueChange={(isSelected) => {
                        if (isSelected) {
                          searchParams.set("category", category?.name);
                          setSelectedCategory(category?.name);
                        } else {
                          searchParams.delete("category");
                          setSelectedCategory(null);
                        }
                      }}
                    >
                      {category.title}
                    </Checkbox>
                    <span className="text-sm opacity-50 font-DanaMedium">{categoryCourseLength.length}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="p-5">
        <Button
          className="w-full h-[42px] rounded-lg bg-primary transition-colors hover:bg-primary-hover text-white font-DanaMedium"
          onPress={() => {
            setSearchParams(searchParams, { replace: true });
            setIsOpenFilterDrawer(false);
          }}
        >
          اعمال فیلتر
        </Button>
      </div>
    </div>
  );
}

export default FilterSwitchs;
