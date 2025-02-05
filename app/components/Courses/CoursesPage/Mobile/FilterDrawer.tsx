import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { ArrowsUpDownIcon, FunnelIcon, TrashIcon, XCircleIcon } from "public/svg/svgs";
import React, { memo, useState } from "react";
import FilterSwitch from "./FilterSwitchs";
import { useSearchParams } from "react-router";

const FilterDrawer = memo(({ isUserLogedIn }: any) => {
  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState<boolean>(false);
  const [removeAllFilter, setRemoveAllFilter] = useState<boolean>(false);

  return (
    <>
      <Button onPress={() => setIsOpenFilterDrawer(true)} className="flex w-full md:hidden items-center !mb-0 bg-white dark:text-white dark:bg-darker rounded-lg h-[42px]">
        <div className="button btn btn-white w-full flex items-center justify-center gap-2.5 font-DanaRegular text-sm">
          <FunnelIcon className="w-6 h-6 shrink-0" />
          <span>فیلتر</span>
        </div>
      </Button>
      <div className={`fixed top-0 right-0 z-[10000000000] w-svw h-svh bg-white dark:bg-darker  flex flex-col lg:hidden transition-all ${isOpenFilterDrawer ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex items-center justify-between h-16 px-5 bg-gray-100 dark:bg-dark">
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center" onClick={() => setIsOpenFilterDrawer(false)}>
              <XCircleIcon className="size-6" />
            </button>
            <span className="font-DanaDemiBold text-lg">فیلترها</span>
          </div>
          <button className="flex items-center gap-2 text-red-500 font-DanaRegular" onClick={() => setRemoveAllFilter(true)}>
            حذف فیلتر ها
            <TrashIcon className="size-6" />
          </button>
        </div>
        <FilterSwitch isUserLogedIn={isUserLogedIn} removeAllFilter={removeAllFilter} setRemoveAllFilter={setRemoveAllFilter} setIsOpenFilterDrawer={setIsOpenFilterDrawer} />
      </div>
    </>
  );
});

export default FilterDrawer;
