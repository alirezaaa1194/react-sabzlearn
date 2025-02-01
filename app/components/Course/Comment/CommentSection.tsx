import React from "react";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { AcademicCapFillIcon, AcademicCapMiniIcon, ArrowLeftCircleMiniIcon, ArrowUturnLeftIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightFillIcon, CheckMiniIcon, ChevronDownIcon, ExclamationTriangleIcon, PlayCircleIcon, SparklesIcon, UserMiniIcon } from "public/svg/svgs";
import { Link, type FetcherWithComponents } from "react-router";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import type { courseCommentType, singleCourseType } from "~/types/course.type";

function CommentSection({ fetcher, course }: { fetcher: FetcherWithComponents<any>; course: singleCourseType }) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8">
      <CommentForm fetcher={fetcher} />
      {course.comments.length ? (
        <div className="space-y-[18px] sm:space-y-5">
          {course.comments.map((comment: courseCommentType) => (
            <Comment key={comment._id} comment={comment} isUserRegisteredToThisCourse={course.isUserRegisteredToThisCourse} />
          ))}
        </div>
      ) : (
        <h3 className="font-DanaMedium text-center">کامنتی وجود ندارد.</h3>
      )}

      {/* <!-- Load more --> */}
      {/* <button data-id="130" type="button" className="show-more btn btn-primary btn-tiny btn-outline mt-5 mx-auto">
      مشاهده بیشتر
      <svg className="show-more__icon w-6 h-6">
        <use href="#chevron-down"></use>
      </svg>
      <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
        <use href="#refresh"></use>
      </svg>
    </button> */}
    </div>
  );
}

export default CommentSection;
