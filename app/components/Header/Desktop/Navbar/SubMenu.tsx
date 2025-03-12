import { ChevronDownMiniIcon } from "public/svg/svgs";
import { NavLink } from "react-router";
import SubSubMenu from "./SubSubMenu";
import type { subMenuType } from "~/types/menus.type";
import { memo } from "react";

const SubMenu = memo(({ subMenu }: { subMenu: subMenuType }) => {
  return (
    <li className="group">
      <NavLink to={`/course-cat/${subMenu.href.split("/category-info/").join("")}`} className="p-3 flex items-center justify-between group-hover:bg-sky-500/10 group-hover:text-sky-500 border-l-2 border-l-white dark:border-l-darker group-hover:border-l-sky-500 transition-all active:text-sky-500">
        <span>{subMenu.title}</span>
        {subMenu?.submenus?.length ? <ChevronDownMiniIcon className="rotate-90 size-4" /> : null}
      </NavLink>

      {subMenu?.submenus?.length ? (
        <ul className="navbar-subsub-menu w-54 h-full pe-2 py-3 ps-4 overflow-y-auto absolute right-full top-0 bg-zinc-50 dark:bg-dark flex flex-col gap-y-4 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          {[...subMenu.submenus].reverse().map((subSubMenu) => (
            <SubSubMenu key={subSubMenu._id} subSubMenu={subSubMenu} />
          ))}
        </ul>
      ) : null}
    </li>
  );
});

export default SubMenu;
