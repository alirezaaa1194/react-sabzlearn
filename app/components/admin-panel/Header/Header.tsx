import { BarsIcon, BellIcon } from "public/svg/svgs";
import React, { use } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Sidebar from "./Sidebar";
export default function Header({ isOpenSidebar, setIsOpenSidebar }: { isOpenSidebar: boolean; setIsOpenSidebar: (param: boolean) => void }) {
  const authContext = use(AuthContext);

  return (
    <header className="bg-darker w-full md:px-5">
      <div className="container sticky top-0 right-0 flex items-center justify-between py-5 z-[1] font-lalezar">
        {/* header right side */}
        <div className="flex items-center gap-4">
          <img src="/public/images/user-profile.png" className="w-[50px] h-[50px] rounded-full" alt="profile" />
          <div className="flex flex-col gap-1">
            <span className="text-base text-white">{authContext?.userInfo.name}</span>
            <span className="text-sm text-[#858585]">مدیریت</span>
          </div>
        </div>

        {/* header left side */}
        <div className="flex items-center gap-5">
          <div className="h-11 hidden md:flex items-center gap-1 relative rounded-xl p-1 bg-white/5 text-white">
            <input type="text" className="px-2 border-none outline-none bg-transparent text-white" placeholder="جستحو کنید..." />
            <button className="bg-white/5 text-white px-3 py-1 rounded-lg">جست و جو</button>
          </div>

          <button className="size-11 flex items-center justify-center bg-white/5 text-white rounded-xl">
            <BellIcon className="size-6 md:size-7" />
          </button>
          <button onClick={() => setIsOpenSidebar(true)} className="size-11 flex items-center justify-center bg-white/5 text-white rounded-xl md:hidden">
            <BarsIcon className="size-6 md:size-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
