import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
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
      <About />
    </div>
  );
}

export default home;
