import React from "react";
import { AcademicCapIcon, BarsIcon, BellIcon, BookOpenIcon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, CloseIcon, CurrencyDollarIcon, FunnelIcon, HomeIcon, LogoIcon, ShoppingBagIcon, UsersIcon, VideoCameraIcon } from "public/svg/svgs";
import { Link, NavLink, useLocation } from "react-router";

export default function Sidebar({ isOpenSidebar, setIsOpenSidebar }: { isOpenSidebar: boolean; setIsOpenSidebar: (param: boolean) => void }) {
  const location = useLocation();
  return (
    <aside className={`w-64 md:!w-1/5 fixed md:!sticky z-50 !top-0 !h-screen overflow-y-auto flex flex-col bg-darker font-lalezar transition-all -right-full md:!right-0 md:opacity-100 md:visible ${isOpenSidebar ? "right-0 opacity-100 visible" : "-right-full opacity-0 invisible"}`}>
      <div className="flex items-center justify-between md:justify-start md:gap-x-2 p-[15px] border-b border-b-white/10 h-[90px]">
        <Link to="/">
          <LogoIcon />
        </Link>
        <h2 className="text-white text-2xl">پنل مدیریت</h2>
        <button className="text-white flex justify-end lg:hidden" onClick={() => setIsOpenSidebar(false)}>
          <CloseIcon className="size-6" />
        </button>
      </div>
      <ul>
        <li>
          <NavLink to="/admin-panel" end className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <HomeIcon className="size-7" />
            <span className="text-xl">صفحه اصلی</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/courses" className={({ isActive }) => (isActive || location.pathname.includes("admin-panel/courses") || location.pathname.includes("admin-panel/editcourse") ? `text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent border-l-4 border-l-secondary bg-gradient-to-r from-white/10 to-transparent` : "text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent")}>
            <AcademicCapIcon className="size-7" />
            <span className="text-xl">دوره ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/lessons" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <VideoCameraIcon className="size-7" />
            <span className="text-xl">جلسات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/comments" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <ChatBubbleBottomCenterTextIcon className="size-7" />
            <span className="text-xl">کامنت ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/tickets" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <ChatBubbleLeftRightIcon className="size-7" />
            <span className="text-xl">تیکت ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/menus" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <BarsIcon className="size-7" />
            <span className="text-xl">منو ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/blog" className={({ isActive }) => (isActive || location.pathname.includes("admin-panel/blog") ? `text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent border-l-4 border-l-secondary bg-gradient-to-r from-white/10 to-transparent` : "text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent")}>
            <BookOpenIcon className="size-7" />
            <span className="text-xl">مقالات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/categories" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <FunnelIcon className="size-7" />
            <span className="text-xl">دسته بندی ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/users" className={({ isActive }) => (isActive || location.pathname.includes("admin-panel/users") || location.pathname.includes("admin-panel/edituser") ? `text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent border-l-4 border-l-secondary bg-gradient-to-r from-white/10 to-transparent` : "text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent")}>
            <UsersIcon className="size-7" />
            <span className="text-xl">کاربران</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/campaign" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <CalendarDaysIcon className="size-7" />
            <span className="text-xl">جشنواره ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/offs" className="text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <CurrencyDollarIcon className="size-7" />
            <span className="text-xl">تخفیفات</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
