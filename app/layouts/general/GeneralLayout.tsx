import { HeroUIProvider } from "@heroui/system";
import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import TimeStamp from "~/components/Header/TimeStamp";
import type { Route } from "./+types/GeneralLayout";
import { getAllCourses } from "~/utils/utils";
import type { courseType } from "~/types/course.type";

export async function loader({ params }: Route.LoaderArgs) {
  const allCourses = await getAllCourses();
  const filteredCourseByDiscount=allCourses.data.sort((a:courseType, b:courseType)=> (b?.discount as number) - (a?.discount as number) )
  const coursesDiscount = filteredCourseByDiscount[0]?.discount;
  return { coursesDiscount };
}

function GeneralLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <HeroUIProvider>
        {loaderData.coursesDiscount ? <TimeStamp discount={loaderData.coursesDiscount} /> : null}
        <Header />
        <Outlet />
        <Footer />
      </HeroUIProvider>
    </div>
  );
}

export default GeneralLayout;
