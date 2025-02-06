import { PlayCircleSolidIcon, PlayIcon, PlayVideoIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

function HeroSection() {
  return (
    <section className="container relative flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-16 gap-8">
      <div className="flex gap-y-7 lg:gap-y-14 flex-col items-center lg:items-start">
        <div className="text-center lg:text-right">
          <h1 className="font-MorabaBold text-2xl sm:text-[2.5rem] leading-10">سبزلرن، اولین گام برنامه‌نویس شدن</h1>
          <p className="font-DanaDemiBold text-sm sm:text-lg mt-3 sm:mt-6 px-8 sm:px-0">با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</p>
        </div>
        <div className="flex items-center gap-7">
          <Link to="/courses" className="text-white rounded-full bg-secondary hover:bg-secondary-hover transition-colors px-3 lg:px-5 h-10 lg:h-12 text-medium lg:text-lg font-DanaMedium flex items-center">
            از اینجا شروع کن
          </Link>
          <Link to="/" className="flex items-center gap-2 text-lg font-DanaDemiBold">
            <span className="w-10 lg:w-12 h-10 lg:h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary-hover transition-colors">
              <PlayIcon className="size-6 lg:size-7 text-white" />
            </span>
            <span className="dark:text-neutral-300 text-medium lg:text-lg">ما کی هستیم؟</span>
          </Link>
        </div>
      </div>
      <div>
        <img src="public/images/hero.svg" alt="" />
      </div>
      <div className="w-[300px] h-[300px] absolute top-20 left-0 rounded-full bg-sky-500 blur-[120px] opacity-40 hidden lg:block"></div>
    </section>
  );
}

export default HeroSection;
