import { useQuery } from "@tanstack/react-query";
import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import ArticlesCard from "~/components/Articles/ArticlesCard";
import CourseCard from "~/components/Courses/CourseCard";
import AboutSection from "~/components/Sections/AboutSection";
import AllCoursesSection from "~/components/Sections/AllCoursesSection";
import ArticlesSection from "~/components/Sections/ArticlesSection";
import HelpSection from "~/components/Sections/HelpSection";
import HeroSection from "~/components/Sections/HeroSection";
import LinkSectionHeader from "~/components/Sections/LinkSectionHeader";
import PopularCourseSection from "~/components/Sections/PopularCourseSection";
import RoadmapSection from "~/components/Sections/RoadmapSection";
import { getAllCourses } from "~/utils/utils";

function home() {
  return (
    <div>
      <HeroSection />
      <AllCoursesSection />
      <RoadmapSection />
      <HelpSection />
      <ArticlesSection />
      <PopularCourseSection />
      <AboutSection />
    </div>
  );
}

export default home;
