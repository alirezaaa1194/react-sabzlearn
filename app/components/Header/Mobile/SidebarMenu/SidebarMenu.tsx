import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { NavLink } from "react-router";
import AccordionItem from "./SidebarSubMenu";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "~/utils/utils";
import type { subMenuType } from "~/types/menus.type";
import SidebarSubMenu from "./SidebarSubMenu";

function SidebarMenu() {
  const [mainMenu, setMainMenu] = useState<string>("");

  const { data: menus } = useQuery({ queryKey: ["menus"], queryFn: getMenus });

  return (
    <ul className="flex flex-col gap-x-1 font-DanaRegular text-sm">
      {menus?.data.map((subMenu: subMenuType) => (
        <SidebarSubMenu subMenu={subMenu} mainMenu={mainMenu} setMainMenu={setMainMenu} />
      ))}
    </ul>
  );
}

export default SidebarMenu;
