import type { MetaFunction } from "react-router";
import AboutSection from "~/components/Sections/AboutSection";
import AllCoursesSection from "~/components/Sections/AllCoursesSection";
import ArticlesSection from "~/components/Sections/ArticlesSection";
import HelpSection from "~/components/Sections/HelpSection";
import HeroSection from "~/components/Sections/HeroSection";
import PopularCourseSection from "~/components/Sections/PopularCourseSection";
import RoadmapSection from "~/components/Sections/RoadmapSection";
import SliderAllCourseSection from "~/components/Sections/SliderAllCourseSection";
import SliderPopularCourseSection from "~/components/Sections/SliderPopularCourseSection";

export const meta: MetaFunction = () => {
  return [{ title: "آکادمی آموزش برنامه نویسی سبزلرن {از صفر تا استخدام} | Sabzlearn" }];
};

function home() {
  return (
    <>
      <HeroSection />
      <AllCoursesSection />
      <RoadmapSection />
      <SliderPopularCourseSection />
      <HelpSection />
      <SliderAllCourseSection />
      <ArticlesSection />
      <PopularCourseSection />
      <AboutSection />
    </>
  );
}

export default home;
