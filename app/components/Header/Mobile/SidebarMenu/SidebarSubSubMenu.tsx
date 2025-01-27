import React from "react";
import { NavLink } from "react-router";
import type { subSubMenuType } from "~/types/menus.type";

function SidebarSubSubMenu({ subSubMenu }: { subSubMenu: subSubMenuType }) {
  return (
    <li>
      <NavLink to={`course/${subSubMenu.href.split("/course-info/").join("")}`} className="hover:text-primary hover:transition-colors active:text-primary">
        {subSubMenu.title}
      </NavLink>
    </li>
  );
}

export default SidebarSubSubMenu;
