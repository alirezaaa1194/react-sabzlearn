import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Switch } from "@heroui/switch";
import { useQuery } from "@tanstack/react-query";
import { ChevronDownIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { categoryType } from "~/types/category.type";
import type { courseType } from "~/types/course.type";
import { getAllCategories, getAllCourses } from "~/utils/utils";

function FilterSwitchs({ isUserLogedIn, removeAllFilter, setRemoveAllFilter, setIsOpenFilterDrawer }: { isUserLogedIn: boolean; removeAllFilter: boolean; setRemoveAllFilter: (param: boolean) => void; setIsOpenFilterDrawer: (param: boolean) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [freeCourses, setFreeCourses] = useState<boolean>(searchParams.get("free-courses") ? true : false);
  const [presellCourses, setPresellCourses] = useState<boolean>(searchParams.get("presell-courses") ? true : false);
  const [registeredCourses, setRegisteredCourses] = useState<boolean>(searchParams.get("registered-courses") ? true : false);

  useEffect(() => {
    if (removeAllFilter) {
      setFreeCourses(false);
      setPresellCourses(false);
      setRegisteredCourses(false);

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
      </div>

      <div className="p-5">
        <Button
          className="w-full h-[42px] rounded-lg bg-primary transition-colors hover:bg-primary-hover text-white font-DanaMedium"
          onPress ={() => {
            setSearchParams(searchParams, { replace: true, preventScrollReset: true });
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
