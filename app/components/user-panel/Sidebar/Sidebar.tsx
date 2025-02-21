import Userinfo from "./Userinfo";
import Menu from "./Menu";
import { Link } from "react-router";
import { CloseIcon, LogoIcon } from "public/svg/svgs";
import ThemeBtns from "~/components/Header/Desktop/ThemeBtns/ThemeBtns";
import LogoutBtn from "./LogoutBtn";

function Sidebar({ isOpenSidebar, setIsOpenSidebar }: { isOpenSidebar: boolean; setIsOpenSidebar: (param: boolean) => void }) {
  return (
    <aside className={`w-64 md:w-1/5 h-screen fixed md:sticky top-0 !z-[100000000] md:!z-[1] transition-all ${isOpenSidebar ? "right-0 opacity-100 visible" : "-right-full opacity-0 invisible"} md:right-0 md:opacity-100 md:visible overflow-y-auto bg-white dark:bg-darker px-6 py-[18px] flex flex-col items-center justify-between`}>
      <div className="w-full flex flex-col">
        <div className="w-full flex md:hidden items-center justify-between pb-8">
          <Link to="/">
            <LogoIcon className="w-14" />
          </Link>
          <div className="flex gap-x-3">
            <ThemeBtns className="!flex" />
            <button className="w-13 h-13 rounded-full flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white" onClick={() => setIsOpenSidebar(false)}>
              <CloseIcon className="w-[22px] h-[22px]" />
            </button>
          </div>
        </div>
        <Userinfo />
        <Menu />
      </div>
      <LogoutBtn />
    </aside>
  );
}

export default Sidebar;
