import React, { useCallback, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination } from "@heroui/react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "public/svg/svgs";

export default function RichTable({ columns, statusOptions, INITIAL_VISIBLE_COLUMNS, renderCell, data, searchKey, dataTitle, filterKey, filterTitle }: any) {
  function capitalize(s: any) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
  }
  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<any>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<any>(null);
  const [page, setPage] = useState(1);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column: any) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filtereddata = [...data];

    if (hasSearchFilter) {
      filtereddata = filtereddata.filter((data) => data[searchKey].toLowerCase().includes(filterValue.toLowerCase()));
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filtereddata = filtereddata.filter((data) => Array.from(statusFilter).includes(data[filterKey]));
    }

    return filtereddata;
  }, [data, filterValue, statusFilter]);

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
          <Input
            isClearable
            className="w-full sm:max-w-[44%] font-DanaMedium"
            classNames={{
              inputWrapper: `bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md border border-transparent`,
              label: "text-white font-lalezar text-lg",
            }}
            placeholder="جستجو..."
            startContent={<MagnifyingGlassIcon className="size-5" />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {statusOptions?.length ? (
              <Dropdown shouldBlockScroll={false}>
                <DropdownTrigger className="hidden sm:flex font-DanaMedium">
                  <Button endContent={<ChevronDownIcon className="size-5" />} variant="flat">
                    {filterTitle || "وضعیت"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu className="font-DanaMedium" disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={statusFilter} onSelectionChange={(key: any) => setStatusFilter(key)} selectionMode="multiple">
                  {statusOptions.map((status: any) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : null}
            <Dropdown shouldBlockScroll={false}>
              <DropdownTrigger className="hidden sm:flex font-DanaMedium">
                <Button endContent={<ChevronDownIcon className="size-5" />} variant="flat">
                  ستون ها
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="font-DanaMedium" disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={visibleColumns} selectionMode="multiple" onSelectionChange={setVisibleColumns}>
                {columns.map((column: any) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small font-DanaMedium">
            تعداد {dataTitle} ها: {data.length}
          </span>
          <label className="flex items-center text-default-400 text-small font-DanaMedium">
            تعداد {dataTitle} در هر صفحه:
            <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, visibleColumns, onRowsPerPageChange, data.length, onSearchChange, hasSearchFilter]);

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
          {(column: any) => (
            <TableColumn key={column.uid} align="center" allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={`${dataTitle} ای یافت نشد`} items={sortedItems}>
          {(item) => <TableRow key={item._id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
        </TableBody>
      </Table>
    </>
  );
}
