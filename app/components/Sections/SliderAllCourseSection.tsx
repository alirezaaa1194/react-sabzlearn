import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import LinkSectionHeader from "./LinkSectionHeader";
import { useQuery } from "@tanstack/react-query";
import { getPopularCourses } from "~/utils/utils";
import type { courseType } from "~/types/course.type";
import CourseCard from "../Courses/CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "public/svg/svgs";

export default function SliderAllCourseSection() {
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: getPopularCourses,
  });

  const swiperRef = useRef<any>(null);

  return (
    <section className="container flex flex-col mt-[100px] lg:mt-40">
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
      <div className="rounded-xl">
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
          {courses?.data.map((course: courseType) => (
            <SwiperSlide key={course._id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-4 lg:hidden mx-auto mt-7">
        <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slidePrev()}>
          <ChevronRightIcon className="size-6" />
        </button>

        <button className="w-[50px] h-[50px] bg-transparent p-0 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:transition-colors" onClick={() => swiperRef.current?.slideNext()}>
          <ChevronLeftIcon className="size-6" />
        </button>
      </div>
    </section>
  );
}
