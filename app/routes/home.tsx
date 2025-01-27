import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import CourseCard from "~/components/Courses/CourseCard";
import About from "~/components/Sections/About";
import HeroSection from "~/components/Sections/HeroSection";
import LinkSectionHeader from "~/components/Sections/LinkSectionHeader";

function home() {
  return (
    <div>
      <HeroSection />
      <LinkSectionHeader
        headerTitle="آخـــرین دوره های ما"
        headerDesc="سکوی پرتاپ شما به سمت موفقیت"
        linkElem={
          <Link to="/" className="flex items-center gap-x-1.5 text-sm font-DanaMedium hover:transition-colors text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500">
            همه دوره ها
            <ArrowUpLeftMiniIcon className="size-5" />
          </Link>
        }
      />
      <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 container">
        <CourseCard />
      </div>
      <About />
    </div>
  );
}

export default home;
