import { useQuery } from "@tanstack/react-query";
import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import CourseCard from "~/components/Courses/CourseCard";
import AboutSection from "~/components/Sections/AboutSection";
import AllCoursesSection from "~/components/Sections/AllCoursesSection";
import HelpSection from "~/components/Sections/HelpSection";
import HeroSection from "~/components/Sections/HeroSection";
import LinkSectionHeader from "~/components/Sections/LinkSectionHeader";
import RoadmapSection from "~/components/Sections/RoadmapSection";
import { getAllCourses } from "~/utils/utils";

function home() {
  return (
    <div>
      <HeroSection />
      <AllCoursesSection />
      <RoadmapSection />
      <HelpSection />
      <AboutSection />
    </div>
  );
}

export default home;
