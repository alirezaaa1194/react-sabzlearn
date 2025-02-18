import React from "react";
import type { Route } from "./+types/Campaign";
import { doCampaign, getAllCourses, getCookie } from "~/utils/utils";
import type { courseType } from "~/types/course.type";
import AddCampaignForm from "~/components/admin-panel/Campaign/AddCampaignForm";
import DiscountList from "~/components/admin-panel/Campaign/DiscountList";
import type { MetaFunction } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const allCourses = await getAllCourses();

  const isHaveDiscount = allCourses.data.some((course: courseType) => course.discount);

  if (isHaveDiscount) {
    return { discount: allCourses.data[0].discount };
  }
  return { discount: null };
}

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const discount = formData.get("discount");

  try {
    await doCampaign(token as string, discount);
  } catch {
    return { success: false };
  }
}

export const meta:MetaFunction=()=> {
  return [{ title: "جشنواره ها - پنل مدیریت - سبزلرن" }];
}

function Campaign({ loaderData }: Route.ComponentProps) {
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      {loaderData.discount ? (
        <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
          <span className="text-xl font-lalezar text-white">
            لیست <span className="text-secondary">جشنواره ها</span>
          </span>
          <DiscountList discount={loaderData.discount} />
        </div>
      ) : (
        <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
          <span className="text-xl font-lalezar text-white">
            برگزاری <span className="text-secondary">جشنواره</span>
          </span>
          <AddCampaignForm />
        </div>
      )}
    </div>
  );
}

export default Campaign;
