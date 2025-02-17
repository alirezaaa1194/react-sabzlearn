import { Button } from "@heroui/button";
import { ArrowDownTrayMiniIcon } from "public/svg/svgs";

function DownloadBox({videoSrc}:{videoSrc:string}) {
  return (
    <div className="bg-white dark:bg-darker p-[18px] sm:p-5 text-center rounded-lg !mt-6 lg:!mt-8">
      <div className="flex items-center justify-center w-[90px] h-[90px] mx-auto bg-sky-50 dark:bg-sky-500/10 rounded-full">
        <ArrowDownTrayMiniIcon className="w-8 h-8 text-sky-500" />
      </div>
      <span className="inline-block my-[18px] text-lg font-DanaDemiBold">دانلود ویدیو</span>
      <a href={videoSrc} download={true} target="_blank" className="w-full">
        <Button className="w-full h-13 lg:h-[46px] rounded-lg bg-secondary hover:transition-colors hover:bg-secondary-hover text-white font-DanaMedium text-base">دانلود</Button>
      </a>
    </div>
  );
}

export default DownloadBox;
