import moment from "jalali-moment";
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { ticketType } from "~/types/ticket.type";

function TicketBox({ ticket }: { ticket: ticketType }) {
  return (
    <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-y-4 bg-white dark:bg-darker p-2.5 md:py-5 md:px-6 rounded font-DanaRegular">
      <Link to="/my-account/tickets" className="block lg:truncate text-xs md:text-base font-DanaMedium">
        {ticket.title}
      </Link>
      <div className="flex items-center justify-between lg:justify-start gap-x-3 md:gap-x-5 w-full lg:w-auto text-slate-500 dark:text-gray-400 text-xs md:text-base">
        <span className="select-none">{ticket?.departmentID}</span>
        <span className="select-none mr-auto lg:mr-0">{moment(ticket.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
        {ticket.isAnswer ? <CheckCircleIcon className="size-5 md:size-6 text-green-500" /> : <InformationCircleIcon className="size-5 md:size-6 text-amber-400" />}
      </div>
    </div>
  );
}

export default TicketBox;
