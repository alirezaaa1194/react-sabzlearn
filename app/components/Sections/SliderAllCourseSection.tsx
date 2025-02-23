import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import LinkSectionHeader from "./LinkSectionHeader";
import type { courseType } from "~/types/course.type";
import CourseCard from "../Courses/CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "public/svg/svgs";

const SliderAllCourseSection = memo(({courses}:{courses:courseType[]}) => {

  const swiperRef = useRef<any>(null);

  return (
    <section className="container flex flex-col mt-[100px] lg:mt-40 relative">
      <LinkSectionHeader
        headerTitle="پرطرفدار ترین دوره ها"
        headerDesc="دوره های محبوب و پروژه محور سبزلرن"
        linkElem={
          <div className="hidden lg:flex gap-4">
            <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronRightIcon className="size-6" />
            </button>

            <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slideNext()}>
              <ChevronLeftIcon className="size-6" />
            </button>
          </div>
        }
      />
      <div className="rounded-xl relative z-[2]">
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
          loop={true}
          autoplay={true}
          dir="rtl"
          className="mySwiper rounded-xl"
        >
          {courses?.map((course: courseType) => (
            <SwiperSlide key={course._id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-4 lg:hidden mx-auto mt-7 relative z-[2]">
        <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slidePrev()}>
          <ChevronRightIcon className="size-6" />
        </button>

        <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slideNext()}>
          <ChevronLeftIcon className="size-6" />
        </button>
      </div>
      <div className="w-[300px] h-[300px] absolute top-0 left-0 z-[1] rounded-full bg-sky-500 blur-[120px] opacity-40 hidden lg:block"></div>
    </section>
  );
});

export default SliderAllCourseSection;
