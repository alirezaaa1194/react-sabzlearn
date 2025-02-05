import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import React, { memo, use, useState } from "react";
import UserProfileDropdownCard from "./UserProfileDropdownCard";
import { UserIcon } from "public/svg/svgs";

const UserProfileDropdown=memo(()=> {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown backdrop="blur" onOpenChange={setIsOpen} placement="bottom-start" offset={23} className={`p-0 bg-transparent hidden lg:block`}>
      <DropdownTrigger>
        <button aria-expanded={false} className={`w-13 h-13 rounded-full bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white hidden lg:flex items-center justify-center relative z-[1] ${isOpen ? "z-[100001]" : "z-[1]"}`}>
          <UserIcon className="size-6" />
        </button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false} aria-label="Static Actions" variant="faded" className="p-0 m-0 border-none bg-transparent rounded-lg">
        <DropdownItem key="new2" className="p-0 m-0 border-none bg-transparent cursor-default">
          <UserProfileDropdownCard />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
})

export default UserProfileDropdown;
