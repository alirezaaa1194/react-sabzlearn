import { TomanIcon, TrashIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import CartCourse from "./CartCourse";

function CartDropdownCard() {
  return (
    <div className="w-80 xs:w-[362px] h-fit bg-white dark:bg-darker rounded-lg flex flex-col">
      {/* header */}
      <div className="px-5 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-500 rounded-t-lg flex items-center justify-between">
        <span className="font-DanaDemiBold">سبد خرید من</span>
        <span className="font-DanaDemiBold text-slate-500">2 دوره</span>
      </div>

      {/* empty cart body */}
      {/* <div className="py-5">
        <span className="font-DanaMedium text-slate-500 dark:text-gray-400 block text-center">سبد خرید شما خالیست :(</span>
      </div> */}

      {/* body */}
      <ul className="flex flex-col gap-y-4 p-5">
        <CartCourse />
      </ul>
      {/* footer */}
      <div className="px-5 pb-5">
        <div className="flex flex-col pt-4 gap-y-5 border-t border-neutral-200 dark:border-white/10">
          <div className="flex items-center justify-between">
            <span className="font-DanaMedium">مبلغ قابل پرداخت:</span>
            <span className="text-lg font-DanaDemiBold flex items-center gap-1">
              11,211,200
              <TomanIcon className="size-5" />
            </span>
          </div>
          <Link to="/cart" className="w-full flex items-center justify-center h-12 rounded-lg bg-primary text-white transition-colors hover:bg-primary-hover font-DanaMedium">
            مشاهده سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartDropdownCard;
