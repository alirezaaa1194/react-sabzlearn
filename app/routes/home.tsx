import { useOutletContext, type MetaFunction } from "react-router";
import AboutSection from "~/components/Sections/AboutSection";
import AllCoursesSection from "~/components/Sections/AllCoursesSection";
import HelpSection from "~/components/Sections/HelpSection";
import HeroSection from "~/components/Sections/HeroSection";
import RoadmapSection from "~/components/Sections/RoadmapSection";
import ArticlesSection from "~/components/Sections/ArticlesSection";
import PopularCourseSection from "~/components/Sections/PopularCourseSection";
import SliderAllCourseSection from "~/components/Sections/SliderAllCourseSection";
import SliderPopularCourseSection from "~/components/Sections/SliderPopularCourseSection";
import type { Route } from "./+types/home";
import { getPopularCourses } from "~/utils/utils";

export async function loader({ params }: Route.LoaderArgs) {
  const popularCourses = await getPopularCourses();
  return { popularCourses };
}

export const meta: MetaFunction = () => {
  return [{ title: "آکادمی آموزش برنامه نویسی سبزلرن {از صفر تا استخدام} | Sabzlearn" }];
};

function home({ loaderData }: Route.ComponentProps) {
  const { courses } = useOutletContext() as any;
  return (
    <>
      <HeroSection />
      <AllCoursesSection courses={courses} />
      <RoadmapSection courses={courses} />
      <SliderPopularCourseSection popularCourses={loaderData?.popularCourses?.data} />
      <HelpSection />
      <SliderAllCourseSection courses={courses} />
      <ArticlesSection />
      <PopularCourseSection popularCourses={courses} />
      <AboutSection />
    </>
  );
}

export default home;
