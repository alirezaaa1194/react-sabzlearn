import { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import type { courseSessionType } from "~/types/course.type";
import { Button } from "@heroui/button";
import { ChevronDownIcon } from "public/svg/svgs";

function QuestionList({ questions, session }: { questions: any; session: courseSessionType }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const paginationHandler = () => {
    if ((currentPage + 1) * 5 <= questions?.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="mt-8 sm:mt-10 flex flex-col gap-4">
      {questions?.length ? (
        <>
          {questions.slice(0, (currentPage + 1) * 5).map((ticket: any) => {
            return <QuestionItem key={ticket._id} question={ticket} session={session} />;
          })}
         
          {(currentPage + 1) * 5 < questions?.length ? (
            <Button className="mt-5 mx-auto h-10 px-3 rounded-lg text-primary bg-transparent border border-primary transition-colors hover:bg-[#1eb35b1a] font-DanaRegular" onPress={paginationHandler}>
              مشاهده بیشتر
              <ChevronDownIcon className="size-5" />
            </Button>
          ) : ''}
        </>
      ) : (
        <div className="space-y-[18px] sm:space-y-5">
          <p className="text-zinc-700 dark:text-white font-DanaRegular leading-7">هنوز برای این جلسه سوالی نپرسیده‌اید!</p>
        </div>
      )}
    </div>
  );
}

export default QuestionList;
