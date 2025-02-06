import { getAllCourses, getCookie, getMe, getPreSellCourses } from "~/utils/utils";
import MobileSort from "~/components/Courses/CoursesPage/Mobile/MobileSort";
import DesktopSort from "~/components/Courses/CoursesPage/Desktop/DesktopSort";
import type { courseType } from "~/types/course.type";
import CoursesSection from "~/components/Courses/CoursesPage/CoursesSection";
import type { Route } from "./+types/courses";
import FilterSwitchs from "~/components/Courses/CoursesPage/Desktop/FilterSwitchs";
import CategoryFilter from "~/components/Courses/CoursesPage/Desktop/CategoryFilter";
import FilterDrawer from "~/components/Courses/CoursesPage/Mobile/FilterDrawer";
import type { MetaFunction } from "react-router";
import SearchBox from "~/components/SearchBox/SearchBox";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const userInfos = token ? await getMe(token) : null;
  const userCourses = userInfos?.data?.courses;

  const data = await getAllCourses();
  const preSellCourses = await getPreSellCourses();

  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const searchQuery = searchParams.get("s");

  const sortQuery = searchParams.get("sort");

  const categoryQuery = searchParams.get("category");

  const freeQuery = searchParams.get("free-courses");
  const preSellQuery = searchParams.get("presell-courses");
  const registeredQuery = searchParams.get("registered-courses");

  let filteredCourses = data?.data?.filter((course: courseType) => course?.name.toLocaleLowerCase()?.includes((searchQuery as string)?.toLocaleLowerCase() || "") || course?.description?.toLocaleLowerCase()?.includes((searchQuery as string)?.toLocaleLowerCase() || ""));

  switch (sortQuery) {
    case "all":
      filteredCourses = filteredCourses;
      break;
    case "mostCheap":
      filteredCourses = filteredCourses.sort((a: courseType, b: courseType) => a.price - b.price);
      break;
    case "mostExpensive":
      filteredCourses = filteredCourses.sort((a: courseType, b: courseType) => b.price - a.price);
      break;
    case "mostPopular":
      filteredCourses = filteredCourses.sort((a: courseType, b: courseType) => b.registers - a.registers);
      break;
  }

  // filter by category
  if (categoryQuery) {
    filteredCourses = filteredCourses.filter((course: courseType) => course.categoryID?.name === categoryQuery);
  }

  if (registeredQuery) {
    filteredCourses = filteredCourses.filter((course: courseType) => {
      const isUserRegistered = userCourses.some((userCourse: courseType) => userCourse._id === course._id);
      if (isUserRegistered) {
        return course;
      }
    });
  }

  if (preSellQuery) {
    filteredCourses = filteredCourses.filter((course: courseType) => {
      const isPreselCourse = preSellCourses?.data?.some((userCourse: courseType) => userCourse._id === course._id);
      if (isPreselCourse) {
        return course;
      }
    });
  }
  if (freeQuery) {
    filteredCourses = filteredCourses.filter((course: courseType) => course.price === 0);
  }

  return { filteredCourses, userInfos };
}

export const meta: MetaFunction = () => {
  return [{ title: "دوره ها - سبزلرن" }];
};

function Courses({ loaderData }: Route.ComponentProps) {
  const { filteredCourses }: { filteredCourses: courseType[] } = loaderData;

  const { userInfos: isUserLogedIn } = loaderData;
  return (
    <main className="container mt-8 sm:mt-10">
      <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-14">
        <div className="flex gap-2.5 items-center">
          <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
          <h2 className="font-MorabaBold text-2xl lg:text-2.5xl text-center">دوره ها</h2>
        </div>
        <span className="sm:text-xl font-DanaMedium text-slate-500">
          <span>{filteredCourses.length}</span> عنوان آموزشی
        </span>
      </div>

      <section className="grid grid-cols-12 gap-y-8 md:gap-x-7">
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
          <div className="space-y-6">
            <SearchBox queryKey="s" title="دوره ها" />
            <FilterSwitchs isUserLogedIn={isUserLogedIn} />
            <CategoryFilter />
          </div>
          <div className="flex md:hidden items-center gap-6 mb-8">
            <FilterDrawer isUserLogedIn={isUserLogedIn} />
            <MobileSort />
          </div>
        </aside>
        <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
          <DesktopSort />
          <CoursesSection filteredCourses={filteredCourses} />
        </div>
      </section>
    </main>
  );
}

export default Courses;
