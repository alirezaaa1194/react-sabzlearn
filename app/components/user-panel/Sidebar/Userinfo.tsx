import moment from "jalali-moment";
import React, { use } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import type { userType } from "~/types/user.type";

function Userinfo() {
  const { userInfo }: { userInfo: userType } = use(AuthContext)!;

  const date = moment();
  const persianDate = date.locale("fa").format("dddd D MMMM YYYY");

  return (
    <div className="w-full bg-sky-500 text-white rounded flex flex-col items-center p-3 md:p-5 md:h-[140px] relative mb-0 md:mb-14">
      <span className="block font-DanaDemiBold truncate ">{userInfo.name}</span>
      <span className="text-sm truncate mt-2.5 font-DanaRegular">{persianDate}</span>
      <div className="hidden md:block absolute rounded-full w-20 h-20 -bottom-1/2 left-0 right-0 mx-auto bg-gradient-to-b from-white/40 to-white/0 to-100% shadow-md -translate-y-1/3">
        <img src="/public/images/user-profile.png" alt="user-profile" className="rounded-full w-20 h-20 p-1" />
      </div>
    </div>
  );
}

export default Userinfo;
