import { ChevronDownMiniIcon } from "public/svg/svgs";
import React from "react";
import { NavLink } from "react-router";

function SubMenu() {
  return (
    <li className="group">
      <NavLink to="/course-cat/frontend" className="p-3 flex items-center justify-between group-hover:bg-sky-500/10 group-hover:text-sky-500 border-l-2 border-l-white dark:border-l-darker group-hover:border-l-sky-500 transition-all">
        <span>فرانت اند</span>
        <ChevronDownMiniIcon className="rotate-90 size-4" />
      </NavLink>
      <ul className="w-54 h-full pe-2 py-3 ps-4 overflow-y-auto absolute right-full top-0 bg-zinc-50 dark:bg-dark flex flex-col gap-y-4 justify-between invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <li className="flex">
          <NavLink to="/course/a" className="hover:text-sky-500 transition-all">
            مینی پروژه های تخصصی با Css
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default SubMenu;
