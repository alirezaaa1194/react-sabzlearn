import CommentForm from "./CommentForm";
import Comment from "./Comment";
import type { courseCommentType, singleCourseType } from "~/types/course.type";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Button } from "@heroui/button";
import { ChevronDownIcon } from "public/svg/svgs";
import NullMessage from "~/components/NullMessage/NullMessage";

function CommentSection({ course }: { course: singleCourseType }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const location = useLocation();

  const paginationHandler = () => {
    if ((currentPage + 1) * 10 <= course.comments?.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [location]);

  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8">
      <CommentForm />
      {course.comments.length ? (
        <div className="flex flex-col items-center w-full">
          <div className="space-y-[18px] sm:space-y-5 w-full">
            {[...course.comments]
              .reverse()
              .slice(0, (currentPage + 1) * 10)
              .map((comment: courseCommentType) => {
                return <Comment key={comment._id} comment={comment} isUserRegisteredToThisCourse={course.isUserRegisteredToThisCourse} />;
              })}
          </div>

          {(currentPage + 1) * 10 < course.comments?.length ? (
            <Button className="mt-5 mx-auto h-10 px-3 rounded-lg text-primary bg-transparent border border-primary transition-colors hover:bg-[#1eb35b1a] font-DanaRegular" onPress={paginationHandler}>
              مشاهده بیشتر
              <ChevronDownIcon className="size-5" />
            </Button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <NullMessage title="کامنتی وجود ندارد." />
      )}
    </div>
  );
}

export default CommentSection;
