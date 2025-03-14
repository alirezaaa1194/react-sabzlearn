import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import React, { lazy, memo, use, useEffect, useState } from "react";
import { ShoppingBagIcon } from "public/svg/svgs";
import CartDropdownCard from "./CartDropdownCard";
// const CartDropdownCard = lazy(() => import("./CartDropdownCard"));
import { useLocation } from "react-router";
import { CartContext } from "~/contexts/CartContext";
import type { courseType } from "~/types/course.type";

const CartDropdown = ({ courses, fetcher }: { courses: courseType[]; fetcher: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const cartCoursesId = use(CartContext);

  const cartCoursesIds = cartCoursesId?.split("; ");

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Dropdown backdrop="blur" isOpen={isOpen} onOpenChange={setIsOpen} onClose={() => setIsOpen(false)} placement="bottom-start" offset={23} className={`p-0 bg-transparent`}>
      <DropdownTrigger>
        <button aria-expanded={false} className={`w-13 h-13 rounded-full bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white flex items-center justify-center relative ${isOpen ? "z-[100001]" : "z-[1]"}`}>
          {cartCoursesId ? <span className="font-DanaRegular flex items-center justify-center absolute -top-1 -right-1 text-[10px] size-5 border-2 border-white dark:border-darker rounded-full bg-green-500 text-white">{cartCoursesIds?.length}</span> : null}
          <ShoppingBagIcon className="size-6" />
        </button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false} aria-label="Static Actions" variant="faded" className="p-0 m-0 border-none bg-transparent rounded-lg">
        <DropdownItem key="new2" className="p-0 m-0 border-none bg-transparent cursor-default">
          <CartDropdownCard courses={courses} fetcher={fetcher} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CartDropdown;
