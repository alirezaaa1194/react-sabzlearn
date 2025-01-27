import { StarIcon, TomanIcon, UserIcon, UsersIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

function CourseCard() {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-darker max-w-[294px]">
      <Link to="/">
        <img src="public/images/nodejs-course.webp" className="rounded-xl w-full" alt="" />
      </Link>
      <div className="flex flex-col justify-between px-[18px] pb-3 pt-4 gap-8">
        <div className="flex flex-col">
          <Link to="/" className="font-DanaDemiBold line-clamp-2 mb-3">
            آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js
          </Link>
          <p className="text-sm line-clamp-2 text-gray-700 dark:text-gray-400">دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این کتابخانه بسازید. این دوره به…</p>
        </div>
        <div className="flex items-center justify-between  text-slate-500 dark:text-white/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
          <span className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
            <UserIcon className="size-5" />
            محمدامین سعیدی راد
          </span>
          <span className="flex items-center gap-x-0.5 text-amber-500 font-DanaMedium">
            5.0
            <StarIcon className="size-5" />
          </span>
        </div>
      </div>
      <div className="flex justify-between px-[18px] pb-3">
        <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
          <UsersIcon className="size-6" />
          5654
        </span>

        <span className="flex items-center gap-1 text-lg font-DanaDemiBold text-green-500">
          1,400,000
          <TomanIcon className="size-6" />
        </span>
      </div>
      {/* model2: */}
      {/* <div className="flex justify-between px-[18px] pb-3">
        <span className="self-end flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
          <UsersIcon className="size-6" />
          5654
        </span>

        <div className="flex items-center gap-x-2.5">
          <span className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 py-2">100%</span>
          <div className="flex flex-col gap-1">
            <span className="font-DanaMedium text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">150,000</span>
            <span className="font-DanaDemiBold text-lg text-green-500">رایگان!</span>
          </div>
        </div>
      </div> */}

      {/* model3: */}
      {/* <div className="flex justify-between px-[18px] pb-3">
        <span className="self-end flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaMedium">
          <UsersIcon className="size-6" />
          5654
        </span>

        <div className="flex items-center gap-x-2.5">
          <span className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 py-2">50%</span>
          <div className="flex flex-col gap-1">
            <span className="font-DanaMedium text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">150,000</span>
            <span className="font-DanaDemiBold text-lg text-green-500 flex items-center gap-1">
              320,000 <TomanIcon className="size-6" />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CourseCard;
