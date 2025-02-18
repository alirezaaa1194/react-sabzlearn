import React from "react";
import { getAllCourses, getAllOffs, getCookie } from "~/utils/utils";
import type { Route } from "./+types/Offs";
import OffsList from "~/components/admin-panel/Offs/OffsList";
import AddOffCodeForm from "~/components/admin-panel/Offs/AddOffCodeForm";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const allOffs = await getAllOffs(token as string);
  const allCourses = await getAllCourses();
  return { allCourses, allOffs };
}

export const meta:MetaFunction=()=> {
  return [{ title: "تخفیفات - پنل مدیریت - سبزلرن" }];
}

function Offs({ loaderData }: Route.ComponentProps) {
  const offs = [...loaderData.allOffs.data].sort((a: any, b: any) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">کد تخفیف</span> جدید
        </span>
        <AddOffCodeForm courses={loaderData?.allCourses?.data} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">کدهای تخفیف</span>
        </span>
        <OffsList offs={offs} courses={loaderData?.allCourses?.data} />
      </div>
    </div>
  );
}

export default Offs;
