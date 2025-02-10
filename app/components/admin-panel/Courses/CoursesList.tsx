import React, { useCallback, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, ModalContent, ModalHeader, ModalFooter, ModalBody, useDraggable, useDisclosure } from "@heroui/react";
import type { courseType } from "~/types/course.type";
import { ChevronDownIcon, MagnifyingGlassIcon, TomanIcon, TrashIcon } from "public/svg/svgs";
import CustomModal from "~/components/Modals/CustomModal";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Toaster } from "react-hot-toast";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "نام", uid: "name", sortable: true },
  { name: "قیمت", uid: "price", sortable: true },
  { name: "تعداد شرکت کننده", uid: "registers", sortable: true },
  { name: "روش پشتیبانی", uid: "support" },
  { name: "دسته بندی", uid: "categoryTitle" },
  { name: "وضعیت", uid: "status", sortable: false },
  { name: "", uid: "action" },
];

export const statusOptions = [
  { name: "درحال برگزاری", uid: "start" },
  { name: "پیش فروش", uid: "presell" },
];
export function capitalize(s: any) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}
export const VerticalDotsIcon = ({ size = 24, width, height, ...props }: any) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
    </svg>
  );
};

const statusColorMap: any = {
  start: "success",
  presell: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["_id", "name", "price", "registers", "support", "categoryTitle", "status", "action"];

export default function CoursesList({ courses }: { courses: courseType[] }) {
  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<any>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<any>(null);
  const [page, setPage] = useState(1);
  const hasSearchFilter = Boolean(filterValue);

  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const [mainCourseId, setMainCourseId] = useState<null | string>(null);
  const fetcher = useFetcher();

  const removeCourseHandler = () => {
    fetcher.submit({ mainCourseId }, { method: "POST", action: "/RemoveCourse" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      setMainCourseId(null);

      showToast("موفق", "دوره با موفقیت حذف شد", "success");
    }
  };

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredcourses = [...courses];

    if (hasSearchFilter) {
      filteredcourses = filteredcourses.filter((course) => course.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredcourses = filteredcourses.filter((course) => Array.from(statusFilter).includes(course.status));
    }

    return filteredcourses;
  }, [courses, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    if (!sortDescriptor) {
      return items;
    }
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

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
            {cellValue === "start" ? "درحال برگزاری" : "پیش فروش"}
          </Chip>
        );
      case "action":
        return (
          <Button
            onPress={() => {
              setIsOpenRemoveModal(true);
              setMainCourseId(course._id);
            }}
            className="text-white bg-red-500 hover:bg-red-600 transition-colors font-DanaMedium"
            size="sm"
          >
            حذف
          </Button>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value: any) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input isClearable className="w-full sm:max-w-[44%] font-DanaMedium" placeholder="جستجو..." startContent={<MagnifyingGlassIcon className="size-5" />} value={filterValue} onClear={() => onClear()} onValueChange={onSearchChange} />
          <div className="flex gap-3">
            <Dropdown shouldBlockScroll={false}>
              <DropdownTrigger className="hidden sm:flex font-DanaMedium">
                <Button endContent={<ChevronDownIcon className="size-5" />} variant="flat">
                  وضعیت
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="font-DanaMedium" disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={statusFilter} onSelectionChange={(key: any) => setStatusFilter(key)} selectionMode="multiple">
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Dropdown shouldBlockScroll={false}>
              <DropdownTrigger className="hidden sm:flex font-DanaMedium">
                <Button endContent={<ChevronDownIcon className="size-5" />} variant="flat">
                  ستون ها
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="font-DanaMedium" disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={visibleColumns} selectionMode="multiple" onSelectionChange={setVisibleColumns}>
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small font-DanaMedium">تعداد دوره ها: {courses.length}</span>
          <label className="flex items-center text-default-400 text-small font-DanaMedium">
            تعداد دوره در هر صفحه:
            <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, visibleColumns, onRowsPerPageChange, courses.length, onSearchChange, hasSearchFilter]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
          className="font-DanaDemiBold"
          classNames={{
            wrapper: "rounded-xl overflow-hidden",
            prev: "-rotate-180 rounded-r-none",
            next: "-rotate-180 rounded-l-none",
          }}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title="آیا از حذف دوره اطمینان دارید؟" action={removeCourseHandler} />
      <Toaster />
      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "md:max-h-[450px] md:max-h-[700px] font-DanaMedium",
          th: "font-lalezar text-base font-normal",
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn key={column.uid} align="center" allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"دوره ای یافت نشد"} items={sortedItems}>
          {(item) => <TableRow key={item._id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
        </TableBody>
      </Table>
    </>
  );
}
