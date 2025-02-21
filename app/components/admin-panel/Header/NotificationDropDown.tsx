import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { BellIcon, ChevronDownIcon } from "public/svg/svgs";
import React from "react";
import { useNavigate } from "react-router";
import type { commentType } from "~/types/comment.type";
import type { ticketType } from "~/types/ticket.type";

function NotificationDropDown({ comments, tickets }: { comments: commentType[]; tickets: ticketType[] }) {
  const dontAnsweredComments = [...comments].filter((comment) => !comment.answer || !comment.answerContent);
  const dontAnsweredTickets = [...tickets].filter((comment) => !comment.answer);

  const navigate = useNavigate();
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <button className="size-11 flex items-center justify-center bg-white/5 text-white rounded-xl relative">
          {dontAnsweredComments.length || dontAnsweredTickets.length ? <span className="font-DanaRegular flex items-center justify-center absolute -top-1 -right-1 text-[13px] size-5 rounded-full bg-amber-500 text-white">{dontAnsweredComments.length + dontAnsweredTickets.length}</span> : null}
          <BellIcon className="size-6 md:size-7" />
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions" closeOnSelect={true}>
        {dontAnsweredComments.length ? (
          <DropdownItem key="comments" className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium">
            <Button onPress={() => navigate("/admin-panel/comments")} className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium bg-transparent p-0">
              {dontAnsweredComments.length} کامنت جدید دارید
            </Button>
          </DropdownItem>
        ) : null}

        {dontAnsweredTickets.length ? (
          <DropdownItem key="tickets" className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium">
            <Button onPress={() => navigate("/admin-panel/tickets")} className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium bg-transparent p-0">
              {dontAnsweredTickets.length} تیکت جدید دارید
            </Button>
          </DropdownItem>
        ) : null}

        {!dontAnsweredComments.length && !dontAnsweredTickets.length ? (
          <DropdownItem key="tickets" className="w-full flex items-center justify-start gap-x-2.5 h-8 px-2.5 rounded-lg font-DanaMedium">
            <p className="text-slate-500 dark:text-gray-400  block w-full text-center">هیچ پیغامی وجود ندارد!</p>
          </DropdownItem>
        ) : null}
      </DropdownMenu>
    </Dropdown>
  );
}

export default NotificationDropDown;
