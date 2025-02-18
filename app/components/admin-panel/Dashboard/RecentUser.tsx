import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import type { userType } from "~/types/user.type";

export default function RecentUser({ users }: { users: userType[] }) {
  return (
    <Table
      aria-label="Example static collection table"
      classNames={{
        th: "font-lalezar text-base font-normal",
        wrapper: "font-DanaMedium",
      }}
    >
      <TableHeader>
        <TableColumn align="center">نشاسه</TableColumn>
        <TableColumn align="center">نام کاربری</TableColumn>
        <TableColumn align="center">ایمیل</TableColumn>
        <TableColumn align="center">شماره موبایل</TableColumn>
        <TableColumn align="center">نام و نام خانوادگی</TableColumn>
        <TableColumn align="center">نقش</TableColumn>
      </TableHeader>
      <TableBody>
        {[...users].slice(0, 10).map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.role === "ADMIN" ? "مدیر" : "کاربر"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
