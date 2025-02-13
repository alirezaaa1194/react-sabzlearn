import React from "react";
import SectionHeader from "../SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import type { courseType } from "~/types/course.type";
import SessionCard from "./SessionCard";
import type { sessionType } from "~/types/session.type";
import NullMessage from "../NullMessage";

function RecentLessons({ watchedLessons, watchedSessions, allCourses }: any) {
  return (
    <section className="w-full">
      <SectionHeader title="اخیرا مشاهده شده" linkTitle="مشاهده همه" linkAdress="/my-account/courses" />
      <div className="pr-0 md:pr-5">
        {watchedSessions?.length ? (
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
            loop={true}
            dir="rtl"
            className="mySwiper rounded-xl"
          >
            {[...watchedSessions?.slice(0, 10)].reverse()?.map((session: sessionType) => {
              const mainCourse = allCourses?.find((course: courseType) => course._id === session.course?._id);
              const sessionIndex = watchedLessons?.find((sessionInfo: any) => sessionInfo?.split(", ")[1] === session._id).split(", ")[0];
              return (
                <SwiperSlide key={session._id}>
                  <SessionCard session={session} sessionIndex={sessionIndex} course={mainCourse} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <NullMessage title="هنوز دوره ای را مشاهده نکرده اید" />
        )}
      </div>
    </section>
  );
}

export default RecentLessons;
