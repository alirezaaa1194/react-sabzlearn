import { Switch } from "@heroui/react";
import React, { useState } from "react";
import { useSearchParams } from "react-router";

function FilterSwitchs({ isUserLogedIn }: any) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [freeCourses, setFreeCourses] = useState<boolean>(searchParams.get("free-courses") ? true : false);
  const [presellCourses, setPresellCourses] = useState<boolean>(searchParams.get("presell-courses") ? true : false);
  const [registeredCourses, setRegisteredCourses] = useState<boolean>(searchParams.get("registered-courses") ? true : false);
  return (
    <div>
      <div className="h-17 bg-white dark:bg-darker rounded-lg p-5 hidden md:block">
        <div className="flex items-center justify-between">
          <span className="font-DanaDemiBold">فقط دوره های رایگان</span>
          <Switch
            aria-label="Automatic updates"
            color="secondary"
            isSelected={freeCourses}
            onValueChange={(isSelected) => {
              if (isSelected) {
                searchParams.set("free-courses", "true");
                setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                setFreeCourses(true);
              } else {
                searchParams.delete("free-courses");
                setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                setFreeCourses(false);
              }
            }}
          />
        </div>
      </div>
      <div className="h-17 bg-white dark:bg-darker rounded-lg p-5 hidden md:block mt-6">
        <div className="flex items-center justify-between">
          <span className="font-DanaDemiBold">در حال پیش فروش</span>
          <Switch
            aria-label="Automatic updates"
            color="secondary"
            isSelected={presellCourses}
            onValueChange={(isSelected) => {
              if (isSelected) {
                searchParams.set("presell-courses", "true");
                setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                setPresellCourses(true);
              } else {
                searchParams.delete("presell-courses");
                setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                setPresellCourses(false);
              }
            }}
          />
        </div>
      </div>
      {isUserLogedIn ? (
        <div className="h-17 bg-white dark:bg-darker rounded-lg p-5 hidden md:block mt-6">
          <div className="flex items-center justify-between">
            <span className="font-DanaDemiBold">دوره ها خریداری شده</span>
            <Switch
              aria-label="Automatic updates"
              color="secondary"
              isSelected={registeredCourses}
              onValueChange={(isSelected) => {
                if (isSelected) {
                  searchParams.set("registered-courses", "true");
                  setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                  setRegisteredCourses(true);
                } else {
                  searchParams.delete("registered-courses");
                  setSearchParams(searchParams, { replace: true, preventScrollReset: true });
                  setRegisteredCourses(false);
                }
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FilterSwitchs;
