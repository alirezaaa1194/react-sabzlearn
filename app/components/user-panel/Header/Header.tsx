import { BarsIcon, SecondLogoIcon } from "public/svg/svgs";
import React, { use, useEffect } from "react";
import { Link, useFetcher, useLocation } from "react-router";
import CartDropdown from "~/components/Header/cart/CartDropdown";
import ThemeBtns from "~/components/Header/Desktop/ThemeBtns/ThemeBtns";
import { AuthContext } from "~/contexts/AuthContext";
import type { courseType } from "~/types/course.type";
import type { userType } from "~/types/user.type";

function Header({ courses, setIsOpenSidebar }: { courses: courseType[]; setIsOpenSidebar: (param: boolean) => void }) {
  const { userInfo }: { userInfo: userType } = use(AuthContext)!;

  const location = useLocation();

  useEffect(() => {
    setIsOpenSidebar(false);
  }, [location]);

  const fetcher = useFetcher();

  return (
    <header className="flex items-center justify-between bg-white dark:bg-darker px-4 md:px-8 py-[18px] md:py-5">
      <button className="w-13 h-13 rounded-full flex md:hidden items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white" onClick={() => setIsOpenSidebar(true)}>
        <BarsIcon className="w-[22px] h-[22px]" />
      </button>

      <div className="flex items-center gap-8">
        <Link to="/">
          <SecondLogoIcon className="w-48 md:w-56 md:pe-6 md:border-l border-l-neutral-200/50 dark:border-l-white/10" />
        </Link>
        <div className="hidden xl:block text-slate-500 dark:text-gray-400 font-DanaRegular">
          <span className="font-DanaDemiBold">{userInfo.name} </span>
          عزیز، به پنل کاربری سبزلرن خوش اومدی🎉
        </div>
      </div>
      <div className="flex items-center gap-x-5 h-13">
        <ThemeBtns />
        <CartDropdown courses={courses} fetcher={fetcher} />
      </div>
    </header>
  );
}

export default Header;
