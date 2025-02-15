import { useCallback } from "react";
import type { courseType } from "~/types/course.type";
import RichTable from "../RichTable";
import OffDeleteBtn from "./OffDeleteBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "کد", uid: "code", sortable: false },
  { name: "درصد", uid: "percent", sortable: true },
  { name: "دوره", uid: "course" },
  { name: "حداکثر استفاده", uid: "max", sortable: true },
  { name: "دفعات استفاده شده", uid: "uses", sortable: true },
  { name: "دفعات مانده", uid: "enough", sortable: true },
  { name: "سازنده", uid: "creator" },
  { name: "حذف", uid: "delete" },
];

const INITIAL_VISIBLE_COLUMNS = ["_id", "code", "percent", "course", "max", "uses", "enough", "creator", "delete"];

export default function OffsList({ courses, offs }: { courses: courseType[]; offs: any }) {
  const renderCell = useCallback((off: any, columnKey: keyof {}) => {
    const cellValue = off[columnKey];

    const mainCourse = courses.find((course) => course._id === off.course);

    switch (columnKey) {
      case "_id":
        return <span className="md:truncate md:line-clamp-1">{off._id.substring(off._id.length - 4)}</span>;
      case "code":
        return <span className="md:truncate md:line-clamp-1">{off.code}</span>;
      case "percent":
        return <span className="md:truncate md:line-clamp-1">{off.percent}%</span>;
      case "course":
        return <span className="md:truncate md:line-clamp-1">{mainCourse?.name}</span>;
      case "max":
        return <span className="md:truncate md:line-clamp-1">{off.max}</span>;
      case "uses":
        return <span className="md:truncate md:line-clamp-1">{off.uses}</span>;
      case "enough":
        return <span className="md:truncate md:line-clamp-1">{off.max - off.uses}</span>;
      case "creator":
        return <span className="md:truncate md:line-clamp-1">{off.creator}</span>;
      case "delete":
        return <OffDeleteBtn off={off} />;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} filterKey="status" INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={offs} renderCell={renderCell} searchKey="code" dataTitle="کدهای نخفیف" />
    </>
  );
}
