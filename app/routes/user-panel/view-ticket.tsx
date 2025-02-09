import React from "react";
import type { Route } from "./+types/view-ticket";
import { getCookie, getTicketAnswer, getUserTickets } from "~/utils/utils";
import { CheckCircleIcon, InformationCircleIcon } from "public/svg/svgs";
import moment from "jalali-moment";
import type { MetaFunction } from "react-router";
import parse from "html-react-parser";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const ticketId = params.ticketId;

  const allTickets = await getUserTickets(token);
  const ticketFullInfo = allTickets?.data?.find((ticket: any) => ticket._id === ticketId);

  const ticketAnswer = await getTicketAnswer(ticketId, token);

  return { ticketFullInfo, ticketAnswer };
}

export const meta: MetaFunction<typeof loader> = ({ data }: any) => {
  return [{ title: `تیکت #${data?.ticketFullInfo?._id?.substr(0, 4)} - پنل کاربری - سبزلرن` }];
};

function viewTicket({ loaderData }: Route.ComponentProps) {
  const ticket = loaderData.ticketFullInfo;
  const ticketAnswer = loaderData.ticketAnswer.data;

  return (
    <section className="mt-6 md:mt-10">
      <div className="bg-white dark:bg-darker p-5 rounded">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-6 pb-6 border-b border-b-neutral-200 dark:border-b-white/10">
          <span className="sm:text-lg font-DanaDemiBold">
            #{ticket?._id?.substr(0, 4)} {ticket.title}
          </span>
          {ticket.answer ? (
            <div className="flex items-center gap-x-1.5 text-base text-green-500 shrink-0 mr-auto">
              <CheckCircleIcon className="size-6" />
              <span className="font-DanaMedium">بسته شده</span>
            </div>
          ) : (
            <div className="flex items-center gap-x-1.5 text-base text-amber-400 shrink-0 mr-auto">
              <InformationCircleIcon className="size-6" />
              <span className="font-DanaMedium">منتظر پاسخ</span>
            </div>
          )}
        </div>
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-25">
          <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-dark p-4 rounded">
            <p className="text-sm md:text-base font-DanaMedium">{parse(ticket.body)}</p>
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-gray-400 mt-2.5 pt-2.5 sm:mt-4 sm:pt-4 border-t border-t-neutral-200 dark:border-t-white/10">
              <span className="font-DanaRegular">{moment(ticket.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
            </div>
          </div>

          {ticket.answer ? (
            <>
              <div className="w-full lg:w-1/2 bg-slate-500 dark:bg-dark p-4 rounded text-white mr-auto">
                <div className="flex items-center gap-x-1.5 mb-2 md:mb-4 text-sm sm:text-base font-DanaMedium">
                  <div className="size-2 rounded-full bg-green-500"></div>| مدیریت
                </div>
                <p className="text-sm md:text-base font-DanaMedium">{parse(ticketAnswer.answer)}</p>
                <div className="flex items-center justify-between text-sm text-white dark:text-gray-400 mt-2.5 pt-2.5 sm:mt-4 sm:pt-4 border-t border-t-white/10">
                  <span className="font-DanaRegular">{moment(ticket.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-slate-500 dark:bg-dark p-4 rounded text-white mr-auto">
                <div className="flex items-center gap-x-1.5 mb-2 md:mb-4 text-sm sm:text-base font-DanaMedium">
                  <div className="size-2 rounded-full bg-green-500" />| مدیریت
                </div>
                <p className="text-sm md:text-base font-DanaRegular">این تیکت بصورت اتوماتیک بسته شده است.</p>
                <div className="flex items-center justify-between text-sm text-white dark:text-gray-400 mt-2.5 pt-2.5 sm:mt-4 sm:pt-4 border-t border-t-white/10">
                  <span className="font-DanaRegular">{moment(ticket.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default viewTicket;
