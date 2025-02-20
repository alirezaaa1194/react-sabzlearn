import { TomanIcon } from "public/svg/svgs";
import React, { use } from "react";
import { useNavigate } from "react-router";
import CartCourse from "./CartCourse";
import { CartContext } from "~/contexts/CartContext";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "~/utils/utils";
import type { courseType } from "~/types/course.type";
import { Button } from "@heroui/button";

function CartDropdownCard() {
  const cartCoursesId = use(CartContext);
  const cartCoursesIds = cartCoursesId?.split("; ");

  const { data: allCourses } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
    staleTime:1000000000
  });
  const cartCourses = allCourses?.data.filter((course: courseType) => cartCoursesIds?.includes(course._id));

  const coursesSumPrice = cartCourses.reduce((prev: number, curr: courseType) => prev + curr.price, 0);

  const cartCoursesSumPriceWithOff = cartCourses.reduce((prev: any, curr: any) => prev + ((100 - ((curr?.discount as number) || 0)) / 100) * curr.price, 0);

  const navigate = useNavigate();
  return (
    <div className="w-80 sm:w-[362px] h-fit bg-white dark:bg-darker rounded-lg flex flex-col">
      {/* header */}
      <div className="px-5 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-500 rounded-t-lg flex items-center justify-between">
        <span className="font-DanaDemiBold">سبد خرید من</span>
        <span className="font-DanaDemiBold text-slate-500">{cartCoursesId ? cartCoursesIds?.length : 0} دوره</span>
      </div>

      {/* body */}
      {cartCourses.length ? (
        <ul className="flex flex-col gap-y-4 p-5 max-h-[200px] overflow-y-auto">
          {cartCourses.map((course: courseType) => (
            <CartCourse key={course._id} course={course} />
          ))}
        </ul>
      ) : (
        <div className="py-5">
          <span className="font-DanaMedium text-slate-500 dark:text-gray-400 block text-center">سبد خرید شما خالیست :(</span>
        </div>
      )}

      {/* footer */}
      {cartCourses.length ? (
        <div className="px-5 pb-5">
          <div className="flex flex-col pt-4 gap-y-5 border-t border-neutral-200 dark:border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-DanaMedium">مبلغ قابل پرداخت:</span>
              {coursesSumPrice > 0 ? (
                <span className="text-lg font-DanaDemiBold flex items-center gap-1">
                  {cartCoursesSumPriceWithOff.toLocaleString()}
                  <TomanIcon className="size-5" />
                </span>
              ) : (
                <span className="text-lg font-DanaDemiBold flex">رایگان</span>
              )}
            </div>
            <Button onPress={() => navigate("/cart")} className="bg-primary hover:bg-primary-hover hover:transition-colors text-white w-full flex items-center justify-center h-12 rounded-lg font-DanaMedium">
              مشاهده سبد خرید
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartDropdownCard;
