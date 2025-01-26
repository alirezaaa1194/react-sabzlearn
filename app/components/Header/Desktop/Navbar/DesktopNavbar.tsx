import { NavLink } from "react-router";
import SubMenu from "./SubMenu";

function DesktopNavbar() {
  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-x-6 font-DanaRegular">
        <li className="relative group/sub-menu">
          <span className="cursor-pointer group-hover/sub-menu:text-sky-500">دوره های آموزشی</span>
          <div className="absolute pt-[38px] right-0 invisible opacity-0 group-hover/sub-menu:visible group-hover/sub-menu:opacity-100">
            <ul className="bg-white dark:bg-darker w-44 text-sm transition-all relative">
              <SubMenu />
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="/courses" className="active:text-primary">
            همه دوره ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="active:text-primary">
            مقالات
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
