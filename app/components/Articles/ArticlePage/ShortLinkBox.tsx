import { ChevronDownIcon, ClipboardDocumentIcon, ShareIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { baseRoute } from "~/utils/utils";

function ShortLinkBox() {
  const [isOpenBox, setIsOpenBox] = useState<boolean>(true);
  const location = useLocation();

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`${baseRoute}${location.pathname}`);
    showToast("موفق", "با موفقیت کپی شد.", "success");
  };

  return (
    <div className="bg-white dark:bg-darker rounded-lg p-5 pb-0 overflow-hidden">
      <div className={`flex items-center justify-between pb-5 ${isOpenBox ? "border-b border-b-neutral-200/60 dark:border-b-white/10" : ""}`}>
        <div className="flex items-center gap-x-2 font-DanaDemiBold">
          <ShareIcon className="size-7" />
          اشتراک گذاری مطلب
        </div>
        <button onClick={() => setIsOpenBox((prev) => !prev)}>
          <ChevronDownIcon className={`w-[22px] h-[22px] ${isOpenBox ? "rotate-180" : ""}`} />
        </button>
      </div>
      {isOpenBox ? (
        <div className="flex items-center justify-between gap-x-3 p-4 mb-5 mt-[18px] bg-sky-50 dark:bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-xl">
          <button onClick={copyLinkHandler}>
            <ClipboardDocumentIcon className="size-8" />
          </button>
          <span className="font-DanaMedium text-lg w-64 text-ltr text-left truncate">{`${baseRoute}${location.pathname}`}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShortLinkBox;
