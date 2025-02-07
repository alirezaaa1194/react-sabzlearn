import moment from "jalali-moment";
import { AcademicCapMiniIcon } from "public/svg/svgs";
import React, { use } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import type { userType } from "~/types/user.type";

function Userinfo() {
  const { userInfo }: { userInfo: userType } = use(AuthContext)!;

  const date = moment();
  const persianDate = date.locale("fa").format("dddd D MMMM YYYY");

  return (
    <div className="relative bg-sky-500 text-white rounded md:h-[140px] px-3 py-3 md:pt-5 mb-8 md:mb-10 text-center">
      <span className="block font-DanaDemiBold truncate ">{userInfo.name}</span>
      <span className=" text-sm truncate mt-2.5 font-DanaRegular">{persianDate} </span>
      <div className="hidden md:block relative -mb-11 mx-auto mt-3.5 size-[88px] p-1 bg-gradient-to-b from-white/40 to-white/0 to-100% shadow-md rounded-full">
        <img src="/public/images/user-profile.png" className="size-full object-cover rounded-full" alt={userInfo.name} />
        <div className="absolute left-1 bottom-1 flex items-center justify-center size-6 bg-sky-500 border-2 border-white rounded-full">
          <AcademicCapMiniIcon className="size-3" />
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
