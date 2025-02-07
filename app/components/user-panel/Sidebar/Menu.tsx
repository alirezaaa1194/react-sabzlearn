import { AcademicCapIcon, ChatBubbleLeftRightIcon, ChevronLeftMiniIcon, PencilSquareIcon, Squares2x2Icon } from "public/svg/svgs";
import React from "react";
import { NavLink, useLocation } from "react-router";

function Menu() {
  const location = useLocation();

  return (
    <ul className="mt-3 md:mt-0">
      <li className="font-DanaMedium text-sm md:text-base py-4 md:py-6 border-b border-b-neutral-200/50 dark:border-b-white/10">
        <NavLink to="/my-account" end className="w-full flex items-center justify-between active:text-sky-500 dark:active:text-sky-500 text-gray-900 dark:text-gray-100">
          <span className="flex items-center gap-x-2.5">
            <Squares2x2Icon className="size-5 md:size-7" />
            <span>پنل کاربری</span>
          </span>
          <ChevronLeftMiniIcon className="size-5 md:size-6" />
        </NavLink>
      </li>
      <li className="font-DanaMedium text-sm md:text-base py-4 md:py-6 border-b border-b-neutral-200/50 dark:border-b-white/10">
        <NavLink to="/my-account/courses" className="w-full flex items-center justify-between active:text-sky-500 dark:active:text-sky-500 text-gray-900 dark:text-gray-100">
          <span className="flex items-center gap-x-2.5">
            <AcademicCapIcon className="size-5 md:size-7" />
            <span>دوره های من</span>
          </span>
          <ChevronLeftMiniIcon className="size-5 md:size-6" />
        </NavLink>
      </li>
      <li className="font-DanaMedium text-sm md:text-base py-4 md:py-6 border-b border-b-neutral-200/50 dark:border-b-white/10">
        <NavLink to="/my-account/tickets" className={({ isActive }) => (isActive || location.pathname.includes("/my-account/add-ticket") || location.pathname.includes("/my-account/view-ticket") ? "w-full flex items-center justify-between text-sky-500 dark:text-sky-500" : "w-full flex items-center justify-between text-gray-900 dark:text-gray-100")}>
          <span className="flex items-center gap-x-2.5">
            <ChatBubbleLeftRightIcon className="size-5 md:size-7" />
            <span>تیکت ها</span>
          </span>
          <ChevronLeftMiniIcon className="size-5 md:size-6" />
        </NavLink>
      </li>
      <li className="font-DanaMedium text-sm md:text-base py-4 md:py-6">
        <NavLink to="/my-account/edit-account" className="w-full flex items-center justify-between active:text-sky-500 dark:active:text-sky-500 text-gray-900 dark:text-gray-100">
          <span className="flex items-center gap-x-2.5">
            <PencilSquareIcon className="size-5 md:size-7" />
            <span>ویرایش حساب</span>
          </span>
          <ChevronLeftMiniIcon className="size-5 md:size-6" />
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
