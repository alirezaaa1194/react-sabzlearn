import { useCallback } from "react";
import RichTable from "../RichTable";
import type { categoryType } from "~/types/category.type";
import moment from "jalali-moment";
import CategoryDeleteBtn from "./CategoryDeleteBtn";
import CategoryEditBtn from "./CategoryEditBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "نام دسته بندی", uid: "name", sortable: false },
  { name: "عنوان دسته بندی", uid: "title", sortable: false },
  { name: "زمان انتشار", uid: "time", sortable: false },
  { name: "ویرایش", uid: "edit" },
  { name: "حذف", uid: "delete" },
];
const INITIAL_VISIBLE_COLUMNS = ["_id", "name", "title", "time", "edit", "delete"];

export default function CategoriesList({ categories }: { categories: any }) {
  const renderCell = useCallback((category: categoryType, columnKey: keyof {}) => {
    const cellValue = category[columnKey];

    switch (columnKey) {
      case "_id":
        return <span className="md:truncate md:line-clamp-1">{category._id}</span>;

      case "name":
        return <span className="md:truncate md:line-clamp-1">{category.name}</span>;

      case "title":
        return <span className="md:truncate md:line-clamp-1">{category?.title}</span>;

      case "time":
        return <span className="md:truncate md:line-clamp-1">{moment(category.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>;

      case "edit":
        return <CategoryEditBtn category={category} />;

      case "delete":
        return <CategoryDeleteBtn category={category} />;

      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={categories} renderCell={renderCell} searchKey="title" dataTitle="منو" />
    </>
  );
}
