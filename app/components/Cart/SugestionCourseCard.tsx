import { Button } from "@heroui/button";
import { StarMiniIcon, TomanIcon, UserIcon, UsersIcon } from "public/svg/svgs";
import React, { use } from "react";
import { showToast } from "../Notification/Notification";
import { Link, useFetcher } from "react-router";
import { CartContext } from "~/contexts/CartContext";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";
import { Spinner } from "@heroui/react";

function SugestionCourseCard({ course }: { course: courseType }) {
  const cartCoursesId = use(CartContext);

  const fetcher = useFetcher();
  return (
    <div className="course flex flex-col bg-white dark:bg-darker rounded-xl h-100">
      {/* Course Banner */}
      <div className="relative group">
        <Link to={`/course/${course.shortName}`} className="block w-full h-full" title={course.name}>
          <img className="block w-full h-full object-cover rounded-xl" src={`${baseUrl}/courses/covers/${course.cover}`} alt={course?.name} />
        </Link>
      </div>
      {/* Course Title & Description */}
      <div className="px-3 my-4 flex-grow">
        <h4 className="font-DanaDemiBold line-clamp-2 h-14">
          <Link to={`/course/${course.shortName}`}>{course?.name}</Link>
        </h4>
      </div>
      {/* Course Footer */}
      <div className="px-3 pb-3">
        {/* Teacher & Rating */}
        <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm">
          <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
            <UserIcon className="size-5" />
            <span className="font-DanaRegular">{course.creator}</span>
          </div>
          <div className="flex items-center gap-x-0.5 text-amber-500">
            <span className="font-DanaMedium">5.0</span>
            <StarMiniIcon className="size-5" />
          </div>
        </div>
        <div className="flex items-end justify-between mt-4">
          <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm font-DanaRegular">
            <UsersIcon className="size-5" />
            {course.registers}{" "}
          </span>
          <div className="flex items-center gap-x-2.5">
            {course.price ? (
              <>
                {course?.discount ? (
                  <div className="flex items-center gap-x-2.5">
                    <div className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 h-6 box-content flex items-center justify-center">{course?.discount}%</div>
                    <div className="flex flex-col gap-1">
                      <span className="font-DanaMedium text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">{course.price.toLocaleString()}</span>
                      {course?.discount === 100 ? (
                        <span className="font-DanaDemiBold text-lg text-green-500">رایگان!</span>
                      ) : (
                        <span className="font-DanaDemiBold text-lg text-green-500 flex items-center gap-1">
                          {(+(((100 - course?.discount) / 100) * course.price).toFixed()).toLocaleString()} <TomanIcon className="size-6" />
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <span className="flex items-center gap-1 text-lg font-DanaDemiBold text-green-500">
                    {(+course.price.toFixed()).toLocaleString()}
                    <TomanIcon className="size-6" />
                  </span>
                )}
              </>
            ) : (
              <div className="flex items-center gap-x-2.5">
                <div className="text-sm font-DanaMedium rounded bg-green-500 text-white p-1 h-6 box-content flex items-center justify-center">100%</div>
                <div className="flex flex-col gap-1">
                  <span className="font-DanaDemiBold text-lg text-green-500">رایگان!</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          className="btn-primary--outline w-full mt-5 bg-transparent text-primary font-DanaMedium rounded-lg"
          onPress={() => {
            if (!cartCoursesId?.includes(course._id)) {
              fetcher.submit({ courseId: course._id }, { method: "POST", action: "/saveCartCourses" });
              showToast("موفق", "به سبد خرید شما اضافه شد", "success");
            } else {
              showToast("خطا", "این دوره قبلا اضافه شده !", "error");
            }
          }}
        >
          {fetcher.state === "loading" ? <Spinner size="sm" color="primary" /> : "افزودن به سبد خرید"}
        </Button>
      </div>
    </div>
  );
}

export default SugestionCourseCard;
