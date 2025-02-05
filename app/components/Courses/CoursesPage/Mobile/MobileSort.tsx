import { Button } from "@heroui/button";
import { ArrowsUpDownIcon, CheckCircleIcon, XCircleIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { useSearchParams } from "react-router";
import Overlay from "~/components/Overlay/Overlay";
import { createPortal } from "react-dom";
function MobileSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isOpenSortBox, setIsOpenSortBox] = useState<boolean>(false);

  const changeSortHandler = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams,  { replace: true, preventScrollReset: true });

    setIsOpenSortBox(false);
  };

  return (
    <>
      {isOpenSortBox && createPortal(<Overlay isOpen={isOpenSortBox} setIsOpen={setIsOpenSortBox} />, document?.body)}

      <Button onPress={() => setIsOpenSortBox(true)} className="flex w-full md:hidden items-center !mb-0 bg-white dark:text-white dark:bg-darker rounded-lg h-[42px]">
        <div className="button btn btn-white w-full flex items-center justify-center gap-2.5 font-DanaRegular text-sm">
          <ArrowsUpDownIcon className="w-6 h-6 shrink-0" />
          <span>{searchParams.get("sort") === "all" ? "همه دوره ها" : searchParams.get("sort") === "mostCheap" ? "ارزان ترین" : searchParams.get("sort") === "mostExpensive" ? "گران ترین" : searchParams.get("sort") === "mostPopular" ? "پر مخاطب ها" : "همه دوره ها"}</span>
        </div>
      </Button>

      <div className={`block lg:hidden fixed right-0 z-[1000000] transition-all rounded-t-2xl w-full ${isOpenSortBox ? "bottom-0 visible opacity-100" : "-bottom-full invisible opacity-0"}`}>
        <div className="flex items-center justify-between rounded-t-2xl bg-gray-100 dark:bg-dark h-16 px-5">
          <span className="font-DanaDemiBold text-lg">مرتب سازی بر اساس</span>
          <button onClick={() => setIsOpenSortBox(false)}>
            <XCircleIcon className="size-6" />
          </button>
        </div>

        <div className="bg-white dark:bg-darker w-full flex flex-col px-5">
          <Button onPress={() => changeSortHandler("all")} className={`px-0 flex items-center justify-between h-[68px] w-full bg-transparent text-gray-900 dark:text-gray-100 active:text-primary dark:active:text-primary font-DanaMedium text-base rounded-none outline-none border-b border-b-gray-100 dark:border-b-dark ${searchParams.get("sort") === "all" || searchParams.get("sort") === "" || searchParams.get("sort") === null ? "active" : ""}`}>
            <span>همه دوره ها</span>
            <CheckCircleIcon className={`size-6 text-primary ${searchParams.get("sort") === "all" || searchParams.get("sort") === "" || searchParams.get("sort") === null ? "block" : "hidden"}`} />
          </Button>

          <Button onPress={() => changeSortHandler("mostCheap")} className={`px-0 flex items-center justify-between h-[68px] w-full bg-transparent text-gray-900 dark:text-gray-100 active:text-primary dark:active:text-primary font-DanaMedium text-base rounded-none outline-none border-b border-b-gray-100 dark:border-b-dark ${searchParams.get("sort") === "mostCheap" ? "active" : ""}`}>
            <span>ارزان ترین</span>
            <CheckCircleIcon className={`size-6 text-primary ${searchParams.get("sort") === "mostCheap" ? "block" : "hidden"}`} />
          </Button>
          <Button onPress={() => changeSortHandler("mostExpensive")} className={`px-0 flex items-center justify-between h-[68px] w-full bg-transparent text-gray-900 dark:text-gray-100 active:text-primary dark:active:text-primary font-DanaMedium text-base rounded-none outline-none border-b border-b-gray-100 dark:border-b-dark ${searchParams.get("sort") === "mostExpensive" ? "active" : ""}`}>
            <span>گران ترین</span>
            <CheckCircleIcon className={`size-6 text-primary ${searchParams.get("sort") === "mostExpensive" ? "block" : "hidden"}`} />
          </Button>
          <Button onPress={() => changeSortHandler("mostPopular")} className={`px-0 flex items-center justify-between h-[68px] w-full bg-transparent text-gray-900 dark:text-gray-100 active:text-primary dark:active:text-primary font-DanaMedium text-base rounded-none outline-none border-none ${searchParams.get("sort") === "mostPopular" ? "active" : ""}`}>
            <span>پر مخاطب ها</span>
            <CheckCircleIcon className={`size-6 text-primary ${searchParams.get("sort") === "mostPopular" ? "block" : "hidden"}`} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default MobileSort;
