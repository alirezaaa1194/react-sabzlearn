import { useCallback, useState } from "react";
import { Button, Chip } from "@heroui/react";
import { TomanIcon } from "public/svg/svgs";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Toaster } from "react-hot-toast";
import CustomModal from "../Modals/CustomModal";
import RichTable from "../RichTable";
import type { sessionType } from "~/types/session.type";
import LessonDeleteBtn from "./LessonDeleteBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "نام", uid: "title", sortable: true },
  { name: "نام دوره", uid: "courseName", sortable: false },
  { name: "قیمت", uid: "price", sortable: false },
  { name: "مدت زمان", uid: "time", sortable: false },
  { name: "حذف", uid: "action" },
];
const INITIAL_VISIBLE_COLUMNS = ["_id", "title", "courseName", "price", "time", "action"];

export default function LessonsList({ lessons }: { lessons: sessionType[] }) {
  const renderCell = useCallback((lesson: sessionType, columnKey: keyof {}) => {
    const cellValue = lesson[columnKey];

    switch (columnKey) {
      case "title":
        return <span className="md:truncate md:line-clamp-1">{lesson.title}</span>;
      case "courseName":
        return <span className="md:truncate md:line-clamp-1">{lesson.course.name}</span>;

      case "price":
        return (
          <span className="flex flex-col items-center gap-1">
            <span className="md:truncate md:line-clamp-1">{lesson.free ? "رایگان" : "نقدی"}</span>
          </span>
        );
      case "time":
        return <span className="md:truncate md:line-clamp-1">{lesson.time}</span>;
      case "action":
        return <LessonDeleteBtn lesson={lesson} />;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={lessons} renderCell={renderCell} searchKey="title" dataTitle="جلسه" />
    </>
  );
}
