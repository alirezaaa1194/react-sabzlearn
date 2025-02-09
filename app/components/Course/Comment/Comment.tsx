import Reply from "./Reply";
import type { courseCommentType } from "~/types/course.type";
import moment from "jalali-moment";
import { AcademicCapMiniIcon } from "public/svg/svgs";
import parse from "html-react-parser";


function Comment({ comment, isUserRegisteredToThisCourse }: { comment: courseCommentType; isUserRegisteredToThisCourse: boolean }) {
  return (
    <div className="p-[18px] md:p-5 bg-gray-100 dark:bg-dark rounded-lg">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
        <div className="flex items-center gap-x-3.5">
          {isUserRegisteredToThisCourse ? (
            <div className="border-amber-400 sm:flex-center w-15 h-15 border rounded-full relative p-1">
              <div className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 bg-amber-400 rounded-full">
                <AcademicCapMiniIcon className="text-white size-3.5" />
              </div>
              <img src="/public/images/user-profile.png" className="w-12 h-12 block object-cover rounded-full" />
            </div>
          ) : (
            <div className="hidden border-b-neutral-200/60 p-1 dark:border-white/10 sm:flex items-center justify-center w-15 h-15 border rounded-full relative">
              <img src="/public/images/user-profile.png" className="w-12 h-12 block object-cover rounded-full" />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-x-1">
              <span className="inline-block max-w-40 truncate font-DanaRegular">{comment.creator?.name}</span>
              <strong className="font-DanaDemiBold">| {comment.creator.role === "ADMIN" ? "مدیریت" : isUserRegisteredToThisCourse ? "دانشجو" : "کاربر"}</strong>
            </div>
            <span className="font-DanaRegular text-sm text-gray-700 dark:text-gray-400">{moment(comment.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
          </div>
        </div>
      </div>
      <p className="font-DanaRegular text-sm sm:text-base break-words">{parse(comment.body)}</p>
      {/* <!-- Replies --> */}
      {comment.answerContent ? <Reply answerContent={comment.answerContent} /> : ""}
    </div>
  );
}

export default Comment;
