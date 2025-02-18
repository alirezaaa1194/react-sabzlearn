import moment from "jalali-moment";
import React, { useCallback } from "react";
import type { commentType } from "~/types/comment.type";
import RichTable from "../RichTable";
import { Chip } from "@heroui/react";
import CommentAcceptBtn from "./CommentAcceptBtn";
import CommentRejectBtn from "./CommentRejectBtn";
import CommentDeleteBtn from "./CommentDeleteBtn";
import CommentShowBtn from "./CommentShowBtn";
import CommentAnswerBtn from "./CommentAnswerBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "ارسال کننده", uid: "creatorName", sortable: false },
  { name: "دوره", uid: "courseName", sortable: false },
  { name: "تاریخ ثبت", uid: "createdAt", sortable: true },
  { name: "مشاهده", uid: "show" },
  { name: "پاسخ", uid: "answer" },
  { name: "تایید/رد", uid: "accept/reject" },
  { name: "حذف", uid: "delete" },
];
const INITIAL_VISIBLE_COLUMNS = ["_id", "creatorName", "courseName", "createdAt", "show", "answer", "accept/reject", "delete"];

function CommentsList({ comments }: { comments: commentType[] }) {
  const renderCell = useCallback((comment: commentType, columnKey: keyof {}) => {
    const cellValue = comment[columnKey];

    switch (columnKey) {
      case "_id":
        return (
          <Chip className="capitalize p-3" color={comment.answer === 1 ? "primary" : "danger"} size="sm" variant="flat">
            {comment._id.substring(comment._id.length - 4)}
          </Chip>
        );

      case "creatorName":
        return <span className="md:truncate md:line-clamp-1">{comment?.creator? comment?.creator?.name:null}</span>;

      case "courseName":
        return <span className="md:truncate md:line-clamp-1">{comment.course}</span>;

      case "createdAt":
        return <span className="md:truncate md:line-clamp-1">{moment(comment.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>;

      case "show":
        return <CommentShowBtn comment={comment} />;

      case "answer":
        return <CommentAnswerBtn comment={comment} />;

      case "accept/reject":
        return comment.answer ? <CommentRejectBtn comment={comment} /> : <CommentAcceptBtn comment={comment} />;

      case "delete":
        return <CommentDeleteBtn comment={comment} />;

      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <RichTable columns={columns} statusOptions={[]} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={comments} renderCell={renderCell} searchKey="body" dataTitle="کامنت" />
    </div>
  );
}

export default CommentsList;
