import { CheckCircleSolidIcon, CheckMiniIcon, GiftIcon, ShoppingBagIcon, TomanIcon, TrashIcon, XCircleMiniIcon } from "public/svg/svgs";
import React from "react";
import type { courseType } from "~/types/course.type";
import CourseBox from "./CourseBox";

function CoursesSection({ cartCourses }: { cartCourses: courseType[] }) {
  return (
    <section className="col-span-full md:col-span-8 space-y-5 md:space-y-8">
      <div className="rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 md:px-6 h-[60px] bg-green-500 text-white">
          <div className="flex items-center gap-x-2">
            <ShoppingBagIcon className="size-7 md:size-8" />
            <span className="md:text-xl font-DanaDemiBold">سبد خرید</span>
          </div>
        </div>
        <div className="bg-white dark:bg-darker py-5 px-4 md:px-6 sm:divide-y divide-neutral-200 dark:divide-white/10 space-y-7 sm:space-y-4 sm:child:pt-4 first-child:pt-0">
          {[...cartCourses].reverse().map((cartCourse) => (
            <CourseBox key={cartCourse._id} cartCourse={cartCourse} />
          ))}
        </div>
      </div>
      <div className="rounded-xl overflow-hidden ">
        <div className="flex items-center justify-between px-4 md:px-6 h-[60px] bg-green-500 text-white">
          <div className="flex items-center gap-x-2">
            <GiftIcon className="size-7 md:size-8" />
            <span className="md:text-xl font-DanaDemiBold">هدیه سبزلرن</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 lg:flex-row justify-between bg-white dark:bg-darker py-5 px-4 md:px-6">
          <div className="flex flex-col items-center lg:block">
            <span className="block text-sm font-DanaDemiBold mb-6">به ازای مقدار خریدتان هدیه دریافت کنید</span>
            <div className="flex items-center gap-x-2"></div>
            <div className="flex items-center gap-x-5 mt-4">
              <div className="flex items-center gap-x-1 text-green-500">
                <CheckMiniIcon className="size-5" />
                <span className="text-xs font-DanaDemiBold">کانال الماسی</span>
              </div>
              <div className="flex items-center gap-x-1 text-green-500">
                <CheckMiniIcon className="size-5" />

                <span className="text-xs font-DanaDemiBold">مستر فریلنس</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="relative flex flex-col items-center h-20 lg:h-auto lg:w-1/2 text-green-500">
            <div className="flex items-center gap-x-4 absolute bottom-0 left-[30%]">
              <div className="flex items-center gap-1">
                <span className="text-xs font-DanaMedium">1,980,000</span>
                <TomanIcon className="size-4" />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xs font-DanaMedium">2,500,000</span>
                <TomanIcon className="size-4" />
              </div>
            </div>

            <div className="relative my-auto w-full h-0.5 bg-neutral-300 dark:bg-white/40 text-ltr overflow-hidden">
              <div className="absolute inset-0 h-full bg-green-500" style={{ width: "100%" }} />
            </div>

            <div className="flex items-center gap-x-4 absolute top-0 left-[30%]">
              <div className="">
                <GiftIcon className="size-5 hidden" />
                <span className="text-xs font-DanaDemiBold">کانال الماسی</span>
              </div>

              <div className="">
                <GiftIcon className="size-5 hidden" />
                <span className="text-xs font-DanaDemiBold">مستر فریلنس</span>
              </div>
            </div>

            <CheckCircleSolidIcon className="size-6 absolute top-1/2 left-[30%] -translate-y-2/3 bg-white dark:bg-darker rounded-full" />
            <CheckCircleSolidIcon className="size-6 absolute top-1/2 left-[50%] -translate-y-2/3 bg-white dark:bg-darker rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
