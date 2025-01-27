import { NavLink } from "react-router";
import type { subSubMenuType } from "~/types/menus.type";

function SubSubMenu({ subSubMenu }: { subSubMenu: subSubMenuType }) {
  return (
    <li className="flex">
      <NavLink to={`/course/${subSubMenu.href.split("/course-info/").join("")}`} className="hover:text-sky-500 transition-all active:text-sky-500">
        {subSubMenu.title}
      </NavLink>
    </li>
  );
}

export default SubSubMenu;
