import { BarsIcon, LogoIcon } from "public/svg/svgs";
import { Link, useLocation } from "react-router";
import DesktopNavbar from "./Desktop/Navbar/DesktopNavbar";
import Searchbar from "./Desktop/Searchbar/Searchbar";
import ThemeBtns from "./Desktop/ThemeBtns/ThemeBtns";
import CartDropdown from "./cart/CartDropdown";
import LoginBtn from "./Desktop/userProfile/LoginBtn";
import MobileSidebar from "./Mobile/MobileSidebar";
import { use, useEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";
import { AuthContext, type AuthContextType } from "~/contexts/AuthContext";
import UserProfileDropdown from "./Desktop/userProfile/UserProfileDropdown";

function Header() {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const location = useLocation();

  const userInfoContext = use(AuthContext) as AuthContextType;

  const handleOpenAndCloseSidebar = () => {
    setIsOpenSideBar((prev) => !prev);
  };

  useEffect(() => {
    setIsOpenSideBar(false);
  }, [location]);

  return (
    <header className="bg-white dark:bg-darker relative">
      {/* desktop header */}
      <div className="container flex items-center justify-between h-20 lg:h-25 relative">
        <button type="submit" className="w-13 h-13 rounded-full flex lg:hidden items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white" onClick={handleOpenAndCloseSidebar}>
          <BarsIcon className="size-6" />
        </button>

        <div className="flex items-center justify-center lg:gap-x-8">
          <Link to="/">
            <LogoIcon className="w-[63px] h-[48px] lg:w-[74px] lg:h-[56px]" />
          </Link>
          <DesktopNavbar />
        </div>
        {/* header left hand */}
        <div className="flex items-center gap-x-5">
          <Searchbar />
          <ThemeBtns />
          <CartDropdown />

          {userInfoContext?.isUserRegister ? <UserProfileDropdown /> : <LoginBtn />}
        </div>
      </div>
      {/* mobile sidebar */}
      <Overlay isOpen={isOpenSideBar} setIsOpen={setIsOpenSideBar} />
      <MobileSidebar isOpenSideBar={isOpenSideBar} />
    </header>
  );
}

export default Header;
