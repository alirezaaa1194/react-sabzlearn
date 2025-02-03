import { Spinner } from "@heroui/react";
import { TomanIcon, TrashIcon } from "public/svg/svgs";
import React from "react";
import { Link, useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";

function CartCourse({ course }: { course: courseType }) {
  const fetcher = useFetcher();
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="h-15 w-[106px]">
          <Link to={`/course/${course.shortName}`} className="inline-block h-15 w-[106px]">
            <img src={`${baseUrl}/courses/covers/${course.cover}`} className="h-15 w-[106px] aspect-video rounded-lg" alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <Link to={`/course/${course.shortName}`} className="line-clamp-2 font-DanaMedium text-sm">
            {course.name}
          </Link>
          <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400">
            {course.price > 0 ? (
              <span className="font-DanaMedium text-sm flex gap-x-1 items-center">
                {course.price.toLocaleString()}
                <TomanIcon className="size-4" />
              </span>
            ) : (
              <span className="font-DanaMedium text-sm">رایگان</span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          fetcher.submit({ courseId: course._id }, { method: "POST", action: "/RemoveCartCourse" });
          // if (fetcher.state !== "loading") {
          //   showToast("موفق", "از سبد خرید شما حذف شد", "success");
          // }
        }}
      >
        {fetcher.state === "loading" ? <Spinner size="sm" /> : <TrashIcon className="size-4 transition-colors text-gray-400 hover:text-red-500" />}
      </button>
    </li>
  );
}

export default CartCourse;
