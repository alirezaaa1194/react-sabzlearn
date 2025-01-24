import { TomanIcon, TrashIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

function CartCourse() {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="h-15 w-[106px]">
          <Link to="/course/a" className="inline-block h-15 w-[106px]">
            <img src="public/images/nodejs-course.webp" className="h-15 w-[106px] aspect-video rounded-lg" alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <Link to="/course/a" className="line-clamp-2 font-DanaMedium text-sm">
            آموزش حرفه ای NodeJS بدون پیش نیاز
          </Link>
          <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400">
            <span className="font-DanaMedium text-sm line-through">11,000,000</span>
            <span className="font-DanaMedium text-sm flex gap-x-1 items-center">
              8,800,000
              <TomanIcon className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <button>
        <TrashIcon className="size-4 transition-colors text-gray-400 hover:text-red-500" />
      </button>
    </li>
  );
}

export default CartCourse;
