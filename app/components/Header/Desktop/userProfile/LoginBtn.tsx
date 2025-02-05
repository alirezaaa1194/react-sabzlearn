import { UserIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

function LoginBtn() {
  
  return (
    <Link to="/login" className="px-5 h-[46px] hidden lg:flex items-center gap-x-[.625rem] rounded-lg font-DanaRegular transition-colors text-white bg-secondary hover:bg-secondary-hover">
      <UserIcon className="size-6" />
      ورود | عضویت
    </Link>
  );
}

export default LoginBtn;
