import { StarIcon, TomanIcon, UserIcon, UsersIcon } from "public/svg/svgs";
import React, { memo } from "react";
import { Link } from "react-router";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";
import parse from "html-react-parser";

type CourseCardPropsType = { course: courseType };

const CourseCard = memo(({ course }: CourseCardPropsType) => {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-darker">
      <Link to={`/course/${course.shortName}`}>
        <img src={`${baseUrl}/courses/covers/${course.cover}`} className="rounded-xl w-full" alt="" />
      </Link>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between px-[18px] pb-3 pt-4 gap-8 h-full">
          <div className="flex flex-col">
            <Link to={`/course/${course.shortName}`} className="font-DanaDemiBold line-clamp-2 mb-3">
              {course?.name}
            </Link>
            <p className="text-sm line-clamp-2 text-gray-700 dark:text-gray-400 font-DanaMedium">{parse(course.description)}</p>
          </div>
          <div className="flex items-center justify-between  text-slate-500 dark:text-white/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
            <span className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors font-DanaRegular">
              <UserIcon className="size-5" />
              {course.creator}
            </span>
            <span className="flex items-center gap-x-0.5 text-amber-500 font-DanaMedium">
              5.0
              <StarIcon className="size-5" />
            </span>
          </div>
        </div>

        {course.price ? (
          <>
            {course.discount ? (
              <div className="flex justify-between px-[18px] pb-3">
                <span className="self-end flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
                  <UsersIcon className="size-6" />
                  {course.registers}
                </span>

                <div className="flex items-center gap-x-2.5">
                  <div className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 h-6 box-content flex items-center justify-center">{course.discount}%</div>
                  <div className="flex flex-col gap-1">
                    <span className="font-DanaMedium text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">{course.price.toLocaleString()}</span>
                    {course.discount === 100 ? (
                      <span className="font-DanaDemiBold text-lg text-green-500">رایگان!</span>
                    ) : (
                      <span className="font-DanaDemiBold text-lg text-green-500 flex items-center gap-1">
                        {(((100 - course.discount) / 100) * course.price).toLocaleString()} <TomanIcon className="size-6" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-between px-[18px] pb-3">
                <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
                  <UsersIcon className="size-6" />
                  {course.registers}
                </span>

                <span className="flex items-center gap-1 text-lg font-DanaDemiBold text-green-500">
                  {course.price.toLocaleString()}
                  <TomanIcon className="size-6" />
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-between px-[18px] pb-3">
            <span className="self-end flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
              <UsersIcon className="size-6" />
              {course.registers}
            </span>

            <div className="flex items-center gap-x-2.5">
              <div className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 h-6 box-content flex items-center justify-center">100%</div>
              <div className="flex flex-col gap-1">
                <span className="font-DanaDemiBold text-lg text-green-500">رایگان!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default CourseCard;
