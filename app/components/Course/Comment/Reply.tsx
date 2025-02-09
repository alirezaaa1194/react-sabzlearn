import moment from "jalali-moment";
import { CheckMiniIcon } from "public/svg/svgs";
import React from "react";
import type { courseCommentAnswerType } from "~/types/course.type";
import parse from "html-react-parser";


function Reply({ answerContent }: { answerContent: courseCommentAnswerType }) {
  
  return (
    <div className="mt-4 space-y-4">
      <div className="p-[18px] md:p-5 bg-gray-200 dark:bg-darker rounded-lg">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-b-white/40 dark:border-white/10">
          <div className="flex items-center gap-x-3.5">
            <div className="border-sky-500 sm:flex-center w-15 h-15 border rounded-full relative p-1">
              <div className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 bg-sky-500 rounded-full">
                <CheckMiniIcon className="text-white size-3.5" />
              </div>
              <img src="/public/images/user-profile.png" className="w-12 h-12 block object-cover rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-x-1">
                <span className="inline-block max-w-40 truncate font-DanaRegular">{answerContent?.creator?.name}</span>
                <strong className="font-DanaDemiBold">| {answerContent?.creator.role==='ADMIN'?'مدیریت':'مدرس'}</strong>
              </div>
              <span className="font-DanaRegular text-sm text-gray-700 dark:text-gray-400">{moment(answerContent?.createdAt, "YYYY/MM/DD")?.locale("fa")?.format("YYYY/MM/DD")}</span>
            </div>
          </div>
        </div>
        <p className="font-DanaRegular text-sm sm:text-base break-words">{parse(answerContent?.body)}</p>
      </div>
    </div>
  );
}

export default Reply;
