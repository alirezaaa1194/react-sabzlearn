import { Spinner } from "@heroui/react";
import { TomanIcon, TrashIcon, XCircleMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link, useFetcher } from "react-router";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";
import { showToast } from "../Notification/Notification";

function CourseBox({ cartCourse }: { cartCourse: courseType }) {
  const fetcher = useFetcher();
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between xs:px-8 sm:px-0 last:pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-5 relative">
        <button onClick={() => fetcher.submit({ courseId: cartCourse._id }, { method: "POST", action: "/RemoveCartCourse" })} className="sm:hidden absolute right-3 top-2 flex-center size-10">
          <XCircleMiniIcon className="size-5 transition-colors text-white hover:text-red-500" />
        </button>

        <Link to={`/course/${cartCourse.shortName}`} className="md:hidden lg:block mx-auto">
          <img className="rounded-xl sm:rounded-xl w-full xs:w-[280px] sm:w-[156px]" src={`${baseUrl}/courses/covers/${cartCourse.cover}`} alt={cartCourse.name} />
        </Link>
        <div className="flex flex-col gap-y-2 sm:max-w-60 xl:max-w-96">
          <Link to={`/course/${cartCourse.shortName}`} className="text-sm md:text-base font-DanaMedium line-clamp-2">
            {cartCourse.name}
          </Link>
          <span className="hidden sm:inline-block text-xs md:text-sm text-slate-500 dark:text-gray-400 font-DanaRegular">{cartCourse.creator}</span>
        </div>
      </div>
      <div className="flex justify-between sm:justify-start items-center sm:gap-x-8 xl:gap-x-15 w-full sm:w-auto mt-2 sm:mt-0">
        <span className="sm:hidden text-xs md:text-sm text-slate-500 dark:text-gray-400 font-DanaRegular">{cartCourse.creator}</span>
        <div className="flex flex-col gap-1">
          <span className="text-green-500 font-DanaDemiBold text-lg flex items-center gap-1">
            {cartCourse.price.toLocaleString()} <TomanIcon className="size-7" />
          </span>
        </div>
        <button
          onClick={() => {
            fetcher.submit({ courseId: cartCourse._id }, { method: "POST", action: "/RemoveCartCourse" });
            if (fetcher.state !== "loading") {
              showToast("موفق", "از سبد خرید شما حذف شد", "success");
            }
          }}
          className="hidden sm:flex items-center justify-center size-6 group"
        >
          {fetcher.state === "loading" ? <Spinner size="sm" /> : <TrashIcon className="size-4 text-neutral-300 dark:text-gray-400 group-hover:text-red-500 transition-colors" />}
        </button>
      </div>
    </div>
  );
}

export default CourseBox;
