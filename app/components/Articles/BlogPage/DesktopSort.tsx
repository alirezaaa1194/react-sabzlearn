import { Tab, Tabs } from "@heroui/react";
import { extendVariants } from "@heroui/system";
import { ArrowsUpDownIcon } from "public/svg/svgs";
import React from "react";
import { useSearchParams } from "react-router";

function DesktopSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const CustomTabs = extendVariants(Tabs, {
    variants: {
      color: {
        primary: {
          base: "h-full p-0",
          tabList: "h-full p-0 bg-transparent",
          tab: ["h-full transition-all font-DanaMedium", "data-[selected=true]:bg-transparent", "data-[selected=true]:text-secondary"],
          cursor: "w-full transition-all bg-transparent border-t-2 border-b-2 border-t-secondary border-b-secondary rounded-none desktop-sort-tab-cursor", // Ensure the cursor takes full width
        },
      },
    },
    defaultVariants: {
      color: "primary",
      variant: "solid",
    },
  });

  return (
    <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-white dark:bg-darker shadow-normal dark:shadow-none rounded-lg">
      <div className="flex items-center shrink-0 gap-x-2">
        <ArrowsUpDownIcon className="size-7" />
        <span className="font-DanaMedium">مرتب سازی بر اساس :</span>
      </div>
      <div className="flex gap-x-5 lg:gap-x-8 h-full items-center">
        
        <CustomTabs
          key={111}
          aria-label="Options"
          className="h-full"
          onSelectionChange={(key:any) => {
            searchParams.set("sort", key as string);
            setSearchParams(searchParams);
          }}
          selectedKey={searchParams.get("sort") || "normal"}
        >
          <Tab key="normal" title="عادی" className="h-full"></Tab>
          <Tab key="newest" title="جدیدترین" className="h-full"></Tab>
          <Tab key="oldest" title="قدیمی ترین" className="h-full"></Tab>
          <Tab key="popular" title="پر نظر ها" className="h-full"></Tab>
        </CustomTabs>
      </div>
    </div>
  );
}

export default DesktopSort;
