import { Button } from "@heroui/button";
import { AcademicCapIcon, BookOpenIcon, TomanIcon, UserIcon } from "public/svg/svgs";
import React, { use } from "react";
import { Link, useFetcher } from "react-router";
import type { singleCourseType } from "~/types/course.type";
import * as Spinners from "react-spinners";
import { Toaster } from "react-hot-toast";
import { showToast } from "../Notification/Notification";
import { CartContext } from "~/contexts/CartContext";
const PulseLoader = Spinners.PulseLoader;

function AllocatoToCourse({ course }: { course: singleCourseType }) {
  const cartCoursesId = use(CartContext);

  const fetcher = useFetcher();
  return (
    <>
      {course.isUserRegisteredToThisCourse ? (
        <div className="w-full flex items-center justify-between mt-4 lg:mt-0">
          <div className="font-DanaDemiBold text-lg flex items-center gap-x-1">
            <UserIcon className="size-8" />
            شما دانشجوی دوره هستید
          </div>
          <Link to="/" className="btn-primary flex items-center justify-center gap-x-2.5 px-5 lg:w-56 h-[46px] rounded-lg text-sm lg:text-base font-DanaRegular">
            <BookOpenIcon className="size-6" />
            <span>مشاهده دوره</span>
          </Link>
        </div>
      ) : (
        <div className="w-full flex flex-col-reverse gap-y-3 lg:flex-row items-center justify-between mt-5 lg:mt-0 font-DanaRegular">
          <Button
            onClick={() => {
              if (!cartCoursesId?.includes(course._id)) {
                fetcher.submit({ courseId: course._id }, { method: "POST", action: "/cartRoute" });
                showToast("موفق", "دوره با موفقیت به سبد خرید اضافه شد", "success");
              } else {
                showToast("خطا", "این دوره قبلا اضافه شده !", "error");
              }
            }}
            className="bg-primary text-white hover:transition-colors hover:bg-primary-hover flex items-center justify-center gap-x-2.5 px-5 w-full lg:w-56 h-[42px] lg:h-[46px] rounded-lg text-sm lg:text-base font-DanaRegular"
          >
            <span className="font-DanaRegular">
              {fetcher.state === "loading" ? (
                <PulseLoader color="#fff" className="mx-auto" size={12} />
              ) : (
                <span className="flex items-center gap-x-2.5">
                  <AcademicCapIcon className="size-6" /> افزودن به سبد خرید
                </span>
              )}
            </span>
          </Button>
          <div className="text-lg flex items-center gap-x-4">
            {/* <span className="text-slate-500 dark:text-white/70 text-xl line-through font-DanaRegular">3,500,000</span> */}
            <span className="flex items-center font-DanaDemiBold text-2xl gap-x-1.5">
              {course.price ? (
                <>
                  {course.price.toLocaleString()} <TomanIcon className="size-7" />
                </>
              ) : (
                "رایگان!"
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default AllocatoToCourse;
