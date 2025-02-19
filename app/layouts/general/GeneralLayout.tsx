import { HeroUIProvider } from "@heroui/system";
import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import TimeStamp from "~/components/Header/TimeStamp";
import type { Route } from "./+types/GeneralLayout";
import { getAllCourses } from "~/utils/utils";

export async function loader({ params }: Route.LoaderArgs) {
  const allCourses = await getAllCourses();
  const coursesDiscount = allCourses.data[0]?.discount;
  return { coursesDiscount };
}

function GeneralLayout({ loaderData }: Route.ComponentProps) {
  console.log(loaderData.coursesDiscount);
  
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
