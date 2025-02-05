import { ChevronLeftIcon, ChevronRightIcon, RocketLaunchIcon } from "public/svg/svgs";
import React, { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SugestionCourseCard from "./SugestionCourseCard";

import "swiper/css";
import "swiper/css/pagination";
import type { courseType } from "~/types/course.type";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "~/utils/utils";
import NullMessage from "../NullMessage/NullMessage";

function SuggestionSlider({ cartCourses }: { cartCourses: courseType[] }) {
  const swiperRef = useRef<any>(null);

  const { data: allCourses } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const mainCourseInCart = cartCourses[0];
  const suggestionCourses: courseType[] = allCourses?.data.filter((course: courseType) => {
    const isInCart = cartCourses.some((cartCourse) => cartCourse._id === course._id);
    return !isInCart && course.categoryID._id === mainCourseInCart.categoryID._id;
  });

  if (!suggestionCourses.length) {
    return (
      <section className="mt-8">
        <NullMessage title="دوره پیشنهادی وجود ندارد" />
      </section>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden mt-12 relative">
      <div className="flex items-center justify-between px-4 md:px-6 h-[60px] bg-green-500 text-white">
        <div className="flex items-center gap-x-2">
          <RocketLaunchIcon className="size-7 md:size-8" />
          <span className="md:text-xl font-DanaDemiBold">دوره های مخصوص شما</span>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-9 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-9 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-6 lg:flex-row justify-between bg-white dark:bg-darker py-5 px-4 md:px-6">
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },

            640: {
              spaceBetween: 28,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 28,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 28,
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={false}
          autoplay={true}
          dir="rtl"
          className="mySwiper rounded-xl w-full"
        >
          {suggestionCourses?.map((suggestionCourse: courseType) => (
            <SwiperSlide key={suggestionCourse._id}>
              <SugestionCourseCard course={suggestionCourse} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SuggestionSlider;
