import moment from "jalali-moment";
import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext, type AuthContextType } from "~/contexts/AuthContext";

function UserInfo() {
  const userInfoContext = use(AuthContext) as AuthContextType;

  const date = moment();
  const persianDate = date.locale("fa").format("dddd D MMMM YYYY");
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-3.5 px-4 bg-gray-100 dark:bg-dark">
        <div className="flex items-center gap-x-2.5">
          <Link to="/my-account">
            <img src="/images/user-profile.png" className="w-14 h-14 rounded-full" alt="" />
          </Link>
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-DanaMedium truncate">{userInfoContext.userInfo?.name}</span>
            <span className="text-xs opacity-80 font-DanaRegular">{persianDate}</span>
          </div>
        </div>
        <Link to="/my-account">
          <ChevronLeftMiniIcon className="size-5" />
        </Link>
      </div>
      <div className="px-6 pt-5">
        <div className="flex flex-col border-b border-b-neutral-200 dark:border-b-white/10">
          <p className="text-sm font-DanaMedium text-green-500 h-6 mb-2.5">دسترسی سریع</p>
          <ul className="flex flex-col gap-x-1 font-DanaRegular text-sm">
            <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5 h-8">
              <Link to="/my-account/courses" className="w-full flex items-center justify-between">
                <span>دوره های من</span>
                <ChevronLeftMiniIcon className="size-5" />
              </Link>
            </li>
            <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5 h-8">
              <Link to="/my-account/tickets" className="w-full flex items-center justify-between">
                <span>تیکت های من</span>
                <ChevronLeftMiniIcon className="size-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
