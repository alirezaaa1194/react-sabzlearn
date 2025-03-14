import { data, NavLink } from "react-router";
import SubMenu from "./SubMenu";
import { memo, use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "~/utils/utils";
import type { subMenuType } from "~/types/menus.type";
import { AuthContext } from "~/contexts/AuthContext";

const DesktopNavbar = memo(() => {
  const [isHoverMenu, setIsHoverMenu] = useState<boolean>(false);

  const handleShowOverlay = () => {
    setIsHoverMenu(true);
  };
  const handleHideOverlay = () => {
    setIsHoverMenu(false);
  };

  const { data } = useQuery({ queryKey: ["menus"], queryFn: getMenus, staleTime: 6000 * 1000 }) || {};

  const authContext = use(AuthContext);
  const userInfo = authContext?.userInfo!;

  const menusResponss = data?.data ?? [];

  const menus = [...menusResponss].sort((a: subMenuType, b: subMenuType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));

  return (
    <nav>
      {isHoverMenu && <div className="w-screen h-screen fixed top-0 right-0 bg-black/40 z-30"></div>}
      <ul className="hidden lg:flex items-center gap-x-6 font-DanaRegular relative">
        <li className="relative group/sub-menu z-40" onMouseEnter={handleShowOverlay} onMouseLeave={handleHideOverlay}>
          <span className="cursor-pointer group-hover/sub-menu:text-sky-500">دوره های آموزشی</span>
          <div className="absolute pt-[38px] right-0 invisible opacity-0 group-hover/sub-menu:visible group-hover/sub-menu:opacity-100">
            <ul className="bg-white dark:bg-darker w-44 text-sm transition-all relative">
              {menus?.map((subMenu: subMenuType) => {
                return <SubMenu key={subMenu._id} subMenu={subMenu} />;
              })}
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
        {userInfo?.role === "ADMIN" ? (
          <li>
            <NavLink to="/admin-panel" className="active:text-primary">
              پنل مدیریت
            </NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  );
});

export default DesktopNavbar;
