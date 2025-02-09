import { AcademicCapMiniIcon, CheckCircleIcon, InformationCircleIcon } from "public/svg/svgs";
import React, { use, useEffect, useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import moment from "jalali-moment";
import { useQuery } from "@tanstack/react-query";
import { getTicketAnswer } from "~/utils/utils";
import { AuthContext } from "~/contexts/AuthContext";
import type { courseSessionType } from "~/types/course.type";
import parse from "html-react-parser";
import { Skeleton } from "@heroui/skeleton";

function QuestionItem({ question, session }: { question: any; session: courseSessionType }) {
  const authContext = use(AuthContext);

  const { data: questionAnswer, isLoading } =
    question.answer &&
    useQuery({
      queryKey: ["ticket-answer", question._id],
      queryFn: () => getTicketAnswer(question._id, authContext?.token as string),
    });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-[18px] md:p-5 bg-gray-100 dark:bg-dark rounded-lg">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
        <div className="flex items-center gap-x-3.5">
          {true ? (
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
              <span className="inline-block max-w-40 truncate font-DanaRegular">{question?.user}</span>
              <strong className="font-DanaDemiBold">| دانشجو</strong>
            </div>
            <span className="font-DanaRegular text-sm text-gray-700 dark:text-gray-400">{moment(question.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
          </div>
        </div>
        {question.answer ? <CheckCircleIcon className="size-7 text-green-500" /> : <InformationCircleIcon className="size-7 text-amber-400" />}
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-DanaRegular text-sm sm:text-base break-words">{mounted && parse(question.body)}</p>
        {isLoading ? <Skeleton className="w-full h-32 rounded-lg" /> : question.answer ? <QuestionAnswer answer={questionAnswer?.data} date={question.createdAt} /> : null}
      </div>
    </div>
  );
}

export default QuestionItem;
