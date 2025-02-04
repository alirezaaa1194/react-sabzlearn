import { Button } from "@heroui/button";
import { CheckCircleIcon, ChevronDownIcon } from "public/svg/svgs";
import React from "react";

function OfferSecion() {
  return (
    <div className="bg-white dark:bg-darker px-4 md:px-6 py-5 overflow-hidden rounded-xl">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-b-neutral-200 dark:border-b-white/10">
        <span className="font-DanaDemiBold text-slate-500 dark:text-gray-400"> کد تخفیف دارید؟ </span>
        <button type="button">
          <ChevronDownIcon className="size-6 rotate-180 text-slate-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="">
        <div className="relative">
          <input type="text" className="w-full h-[60px] pr-3.5 pl-32 text-sm bg-gray-100 dark:bg-dark rounded-xl font-DanaRegular outline-none" placeholder="کد تخفیف را وارد کنید" />
          <Button className="bg-secondary hover:bg-secondary-hover text-white transition-colors rounded-lg absolute left-2.5 top-0 bottom-0 my-auto font-DanaRegular">اعمال</Button>
        </div>
      </div>

      <div className="flex items-center gap-x-2 bg-sky-50 dark:bg-sky-500/10 text-sky-500 py-2.5 px-3 sm:px-3.5 rounded-xl mt-2.5">
        <CheckCircleIcon className="size-5" />
        <span className="font-DanaRegular">
          <span /> اعمال شد، <span className="underline cursor-pointer text-rose-500"> حذف؟ </span>
        </span>
      </div>
    </div>
  );
}

export default OfferSecion;
