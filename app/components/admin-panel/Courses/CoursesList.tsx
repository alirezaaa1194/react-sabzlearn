import { useCallback, useState } from "react";
import { Button, Chip } from "@heroui/react";
import type { courseType } from "~/types/course.type";
import { TomanIcon } from "public/svg/svgs";
import { useFetcher, useNavigate } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Toaster } from "react-hot-toast";
import CustomModal from "../Modals/CustomModal";
import RichTable from "../RichTable";
import CourseDeleteBtn from "./CourseDeleteBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "نام", uid: "name", sortable: true },
  { name: "قیمت", uid: "price", sortable: true },
  { name: "تعداد شرکت کننده", uid: "registers", sortable: true },
  { name: "روش پشتیبانی", uid: "support" },
  { name: "دسته بندی", uid: "categoryTitle" },
  { name: "وضعیت", uid: "status", sortable: false },
  { name: "ویرایش", uid: "edit" },
  { name: "حذف", uid: "action" },
];

export const statusOptions = [
  { name: "درحال ضبط", uid: "start" },
  { name: "پیش فروش", uid: "presell" },
];
const statusColorMap: any = {
  start: "success",
  presell: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["_id", "name", "price", "registers", "support", "categoryTitle", "status", "edit", "action"];

export default function CoursesList({ courses }: { courses: courseType[] }) {
  const navigate = useNavigate();
  const renderCell = useCallback((course: courseType, columnKey: keyof {}) => {
    const cellValue = course[columnKey];

    switch (columnKey) {
      case "name":
        return <span className="md:truncate md:line-clamp-1">{course.name}</span>;

      case "price":
        return (
          <span className="flex flex-col items-center gap-1">
            <span className="md:truncate md:line-clamp-1">{course.price.toLocaleString()}</span> <TomanIcon className="size-4" />
          </span>
        );
      case "registers":
        return <span className="md:truncate md:line-clamp-1">{course.registers}</span>;
      case "support":
        return <span className="md:truncate md:line-clamp-1">{course.support}</span>;
      case "categoryTitle":
        return <span className="md:line-clamp-1">{course.categoryID.title}</span>;

      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[course.status]} size="sm" variant="flat">
            {cellValue === "start" ? "درحال ضبط" : "پیش فروش"}
          </Chip>
        );
      case "edit":
        return (
          <Button
            color="secondary"
            size="sm"
            onPress={() => {
              navigate(`/admin-panel/editcourse/${course.shortName}`);
            }}
          >
            ویرایش
          </Button>
        );
      case "action":
        return <CourseDeleteBtn course={course} />;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={statusOptions} filterKey="status" INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={courses} renderCell={renderCell} searchKey="name" dataTitle="دوره" />
    </>
  );
}
