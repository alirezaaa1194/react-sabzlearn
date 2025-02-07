import { ClipboardDocumentIcon } from "public/svg/svgs";
import React from "react";
import { useLocation } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { baseRoute } from "~/utils/utils";

function ShortLinkBox() {
  const location = useLocation();

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`${baseRoute}${location.pathname}`);
    showToast("موفق", "با موفقیت کپی شد.", 'success');
  };

  return (
    <div className="hidden lg:block bg-white dark:bg-darker rounded-xl p-5 text-center">
      <span className="font-DanaDemiBold text-lg">لینک کوتاه آموزش</span>
      <div className="flex items-center justify-between gap-x-3 p-4 mt-[18px] bg-sky-50 dark:bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-xl">
        <button onClick ={copyLinkHandler}>
          <ClipboardDocumentIcon className="w-8 h-8" />
        </button>
        <span className="font-DanaMedium text-lg w-64 text-ltr text-left truncate">{`${baseRoute}${location.pathname}`}</span>
      </div>
    </div>
  );
}

export default ShortLinkBox;
