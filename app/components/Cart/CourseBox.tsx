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
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between xs:px-8 sm:px-0 pt-4 first:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-5 relative">
        {fetcher.state === "loading" ? (
          <Spinner color="danger" size="sm" className="absolute right-3 top-2 sm:hidden" />
        ) : (
          <button
            onClick={() => {
              fetcher.submit({ courseId: cartCourse._id }, { method: "POST", action: "/RemoveCartCourse" });

              showToast("موفق", "از سبد خرید شما حذف شد", "success");
            }}
            className="sm:hidden absolute right-3 top-2 flex-center size-10"
          >
            <XCircleMiniIcon className="size-5 transition-colors text-white hover:text-red-500" />
          </button>
        )}

        <Link to={`/course/${cartCourse.shortName}`} className="md:hidden lg:block mx-auto">
          <img className="rounded-xl sm:rounded-xl w-full xs:w-[280px] sm:w-[156px]" src={`${cartCourse.cover}`} alt={cartCourse?.name} />
        </Link>
        <div className="flex flex-col gap-y-2 sm:max-w-60 xl:max-w-96">
          <Link to={`/course/${cartCourse.shortName}`} className="text-sm md:text-base font-DanaMedium line-clamp-2">
            {cartCourse?.name}
          </Link>
          <span className="hidden sm:inline-block text-xs md:text-sm text-slate-500 dark:text-gray-400 font-DanaRegular">{cartCourse.creator}</span>
        </div>
      </div>
      <div className="flex justify-between sm:justify-start items-center sm:gap-x-8 xl:gap-x-15 w-full sm:w-auto mt-2 sm:mt-0">
        <span className="sm:hidden text-xs md:text-sm text-slate-500 dark:text-gray-400 font-DanaRegular">{cartCourse.creator}</span>
        <div className="flex flex-col gap-1">
          <span className="text-green-500 font-DanaDemiBold text-lg flex items-center gap-1">
            {cartCourse.price > 0 ? (
              <>
                {cartCourse?.discount ? (
                  <span className="flex flex-col gap-2">
                    <span className="font-DanaMedium text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">{cartCourse.price.toLocaleString()}</span>
                    <span className="flex items-center gap-1">
                      {((100 - (cartCourse?.discount as number)) / 100) * cartCourse?.price ? (
                        <>
                          {(+(((100 - (cartCourse?.discount as number)) / 100) * cartCourse?.price).toFixed()).toLocaleString()} <TomanIcon className="size-6" />
                        </>
                      ) : (
                        "رایگان!"
                      )}
                    </span>
                  </span>
                ) : (
                  <>
                    {(+cartCourse.price.toFixed()).toLocaleString()} <TomanIcon className="size-7" />
                  </>
                )}
              </>
            ) : (
              "رایگان"
            )}
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
          {fetcher.state === "loading" ? <Spinner size="sm" color="danger" /> : <TrashIcon className="size-4 text-neutral-300 dark:text-gray-400 group-hover:text-red-500 transition-colors" />}
        </button>
      </div>
    </div>
  );
}

export default CourseBox;
