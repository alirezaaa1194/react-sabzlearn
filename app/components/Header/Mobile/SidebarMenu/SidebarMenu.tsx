import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "~/utils/utils";
import type { subMenuType } from "~/types/menus.type";
import SidebarSubMenu from "./SidebarSubMenu";
import { AuthContext } from "~/contexts/AuthContext";

function SidebarMenu() {
  const authContext = use(AuthContext);
  const userInfo = authContext?.userInfo!;

  const [mainMenu, setMainMenu] = useState<string>("");

  const { data: menus } = useQuery({ queryKey: ["menus"], queryFn: getMenus });

  return (
    <ul className="flex flex-col gap-x-1 font-DanaRegular text-sm">
      {menus?.data.map((subMenu: subMenuType) => (
        <SidebarSubMenu key={subMenu._id} subMenu={subMenu} mainMenu={mainMenu} setMainMenu={setMainMenu} />
      ))}

      {userInfo?.role === "ADMIN" ? (
        <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5">
          <div className="flex items-center justify-between h-8 w-full">
            <NavLink to="/my-account">پنل مدیریت</NavLink>
          </div>
        </li>
      ) : null}
    </ul>
  );
}

export default SidebarMenu;
