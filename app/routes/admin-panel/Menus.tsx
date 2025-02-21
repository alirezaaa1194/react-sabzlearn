import React from "react";
import type { Route } from "./+types/Menus";
import { getAllPAdminMenus, getMenus } from "~/utils/utils";
import AddMenuForm from "~/components/admin-panel/Menus/AddMenuForm";
import MenusList from "~/components/admin-panel/Menus/MenusList";
import type { subMenuType } from "~/types/menus.type";
import type { MetaFunction } from "react-router";
export async function loader({ params, request }: Route.LoaderArgs) {
  try {
    const menus = await getMenus();
    const allMenus = await getAllPAdminMenus();

    return { allMenus, menus };
  } catch {
    return { allMenus: { data: [] }, menus: { data: [] } };
  }
}

export const meta: MetaFunction = () => {
  return [{ title: "منو ها - پنل مدیریت - سبزلرن" }];
};

function Menus({ loaderData }: Route.ComponentProps) {
  const allMenus = [...loaderData.allMenus.data].sort((a: subMenuType, b: subMenuType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));
  const menus = [...loaderData.menus.data].sort((a: subMenuType, b: subMenuType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));

  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">منوی</span> جدید
        </span>
        <AddMenuForm menus={menus} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">منو ها</span>
        </span>
        <MenusList allMenus={allMenus} />
      </div>
    </div>
  );
}

export default Menus;
