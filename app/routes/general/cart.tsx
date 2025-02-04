import { TrophyIcon } from "public/svg/svgs";
import OfferSecion from "~/components/Cart/OfferSecion";
import PaySection from "~/components/Cart/PaySection";
import type { Route } from "./+types/cart";
import session from "~/sessions.server";
import { getAllCourses } from "~/utils/utils";
import type { courseType } from "~/types/course.type";
import CoursesSection from "~/components/Cart/CoursesSection";
import NullMessage from "~/components/Header/Desktop/cart/NullMessage";
import { Toaster } from "react-hot-toast";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);
  const coursesId = currentSession.data.coursesId as string;

  const splitedCoursesId = coursesId?.split("; ");

  const allCourses = await getAllCourses();
  const cartCourses = allCourses.data.filter((course: courseType) => splitedCoursesId.includes(course._id)).reverse();

  return { coursesId, allCourses, cartCourses };
}

function cart({ loaderData }: Route.ComponentProps) {
  const coursesId: string = loaderData.coursesId as string;
  const { data: AllCourses }: { data: courseType[] } = loaderData.allCourses;
  const cartCourses: courseType[] = loaderData.cartCourses;

  console.log(cartCourses);

  if (!cartCourses.length) {
    return (
      <main className="container mt-8 md:mt-16">
        <NullMessage />
      </main>
    );
  }

  return (
    <main className="container mt-8 md:!mt-16">
      <Toaster />
      <div className="flex items-center gap-x-2 my-5 md:my-8 py-2.5 sm:py-4 px-4 md:px-6 bg-white dark:bg-darker text-red-500 rounded-xl">
        <TrophyIcon className="size-7" />

        <p className="text-sm md:text-base font-DanaDemiBold">با افزودن هر یک دوره به سبد خرید، 2 درصد تخفیف بیشتری دریافت کنید(تا سقف 20 درصد).</p>
      </div>

      <section className="grid grid-cols-12 gap-y-5 gap-6 lg:gap-x-7 mt-5">
        <CoursesSection cartCourses={cartCourses} />

        <aside className="col-span-full md:col-span-4 space-y-5 md:space-y-6">
          <PaySection cartCourses={cartCourses} />

          {/* <OfferSecion /> */}
        </aside>
      </section>
    </main>
  );
}

export default cart;
