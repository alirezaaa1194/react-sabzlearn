import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { ChevronDownIcon } from "public/svg/svgs";
import React, { use } from "react";
import { Link, useFetcher } from "react-router";
import { AuthContext } from "~/contexts/AuthContext";

function AdminInfoDropDown() {
  const authContext = use(AuthContext);
  const fetcher = useFetcher();
  return (
    <div className="flex items-center gap-4">
      <img src="/public/images/user-profile.png" className="w-[50px] h-[50px] rounded-full" alt="profile" />
      <div className="flex flex-col gap-1">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button className="text-base text-white flex items-center gap-2">
              {authContext?.userInfo.name}
              <ChevronDownIcon className="size-4" />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit-account" className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium">
              <Link to="/">بازدید سایت</Link>
            </DropdownItem>
            <DropdownItem key="edit-account" className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium">
              <Link to={`admin-panel/edituser/${authContext?.userInfo._id}`}>ویرایش حساب</Link>
            </DropdownItem>
            <DropdownItem key="logout" className="p-0">
              <Button
                type="submit"
                className={`w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium hover:text-white hover:bg-red-500 transition-colors bg-transparent ${fetcher.state === "loading" ? "bg-red-500" : "bg-transparent"}`}
                onPress={() => {
                  fetcher.submit(null, { method: "POST", action: "/logout" });
                }}
              >
                خروج
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <span className="text-sm text-[#858585]">مدیریت</span>
      </div>
    </div>
  );
}

export default AdminInfoDropDown;
