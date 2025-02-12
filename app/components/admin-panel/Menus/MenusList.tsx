import { useCallback, useState } from "react";
import RichTable from "../RichTable";
import MenuDeleteBtn from "./MenuDeleteBtn";

export const columns = [
  { name: "عنوان منو", uid: "title", sortable: false },
  { name: "مسیر منو", uid: "href", sortable: false },
  { name: "منوی پرنت", uid: "parentId", sortable: false },
  { name: "حذف", uid: "action" },
];
const INITIAL_VISIBLE_COLUMNS = ["title", "href", "parentId", "action"];

export default function MenusList({ allMenus }: { allMenus: any }) {

  const renderCell = useCallback((menu: any, columnKey: keyof {}) => {
    const cellValue = menu[columnKey];

    switch (columnKey) {
      case "title":
        return <span className="md:truncate md:line-clamp-1">{menu.title}</span>;

      case "href":
        return <span className="md:truncate md:line-clamp-1">{menu.href}</span>;

      case "parentId":
        return <span className="md:truncate md:line-clamp-1">{menu?.parent?.title || "-"}</span>;

      case "action":
        return <MenuDeleteBtn menu={menu} />;

      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={allMenus} renderCell={renderCell} searchKey="title" dataTitle="منو" />
    </>
  );
}
