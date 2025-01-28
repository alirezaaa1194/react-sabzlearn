import { useQuery } from "@tanstack/react-query";
import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import CourseCard from "~/components/Courses/CourseCard";
import AboutSection from "~/components/Sections/AboutSection";
import AllCoursesSection from "~/components/Sections/AllCoursesSection";
import HeroSection from "~/components/Sections/HeroSection";
import LinkSectionHeader from "~/components/Sections/LinkSectionHeader";
import { getAllCourses } from "~/utils/utils";

function home() {
  return (
    <div>
      <HeroSection />
      <AllCoursesSection />
      <AboutSection />
    </div>
  );
}

export default home;
