import { Button } from "@heroui/button";
import moment from "jalali-moment";
import React, { useCallback, useState } from "react";
import RichTable from "../RichTable";
import { Chip } from "@heroui/react";
import type { ticketType } from "~/types/ticket.type";
import CommentAnswerBtn from "../Comments/CommentAnswerBtn";
import CommentShowBtn from "../Comments/CommentShowBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "عنوان", uid: "title", sortable: true },
  { name: "ارسال کننده", uid: "creatorName", sortable: true },
  { name: "تاریخ ارسال", uid: "createdAt", sortable: false },
  { name: "مشاهده", uid: "show" },
  { name: "پاسخ", uid: "answer" },
];
const INITIAL_VISIBLE_COLUMNS = ["_id", "title", "creatorName", "createdAt", "show", "answer"];

function TicketsList({ ticktes }: { ticktes: ticketType[] }) {


  const renderCell = useCallback((ticket: ticketType, columnKey: keyof {}) => {
    const cellValue = ticket[columnKey];

    switch (columnKey) {
      case "_id":
        return (
          <Chip className="capitalize p-3" color={ticket.answer === 1 ? "primary" : "danger"} size="sm" variant="flat">
            {ticket._id.substring(ticket._id.length - 4)}
          </Chip>
        );

      case "creatorName":
        return <span className="md:truncate md:line-clamp-1">{ticket.user}</span>;

      case "createdAt":
        return <span className="md:truncate md:line-clamp-1">{moment(ticket.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>;

      case "show":
        return <CommentShowBtn comment={ticket} />;

      case "answer":
        return <CommentAnswerBtn comment={ticket} />;

      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <RichTable columns={columns} statusOptions={[]} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={ticktes} renderCell={renderCell} searchKey="body" dataTitle="کامنت" />
    </div>
  );
}

export default TicketsList;
