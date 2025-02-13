import { useCallback, useState } from "react";
import RichTable from "../RichTable";

import type { userType } from "~/types/user.type";
import UserChangeRoleBtn from "./UserChangeRoleBtn";
import UserDeleteBtn from "./UserDeleteBtn";
import UserBanBtn from "./UserBanBtn";
import { useNavigate } from "react-router";
import { Button } from "@heroui/button";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "نام و نام خانوادگی", uid: "name", sortable: true },
  { name: "شماره تماس", uid: "phone", sortable: false },
  { name: "ایمیل", uid: "email", sortable: false },
  { name: "نام کاربری", uid: "username", sortable: false },
  { name: "نقش", uid: "role", sortable: false },
  { name: "تغییر نقش", uid: "chage-role" },
  { name: "ویرایش", uid: "edit" },
  { name: "حذف", uid: "delete" },
  { name: "بن", uid: "ban" },
];

const INITIAL_VISIBLE_COLUMNS = ["_id", "name", "phone", "email", "username", "role", "chage-role", "edit", "delete", "ban"];

export default function UsersList({ users }: { users: userType[] }) {
  const navigate = useNavigate();

  const renderCell = useCallback((user: userType, columnKey: keyof {}) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "_id":
        return <span className="md:truncate md:line-clamp-1">{user._id}</span>;

      case "name":
        return <span className="md:truncate md:line-clamp-1">{user.name}</span>;
      case "phone":
        return <span className="md:truncate md:line-clamp-1">{user.phone}</span>;
      case "email":
        return <span className="md:truncate md:line-clamp-1">{user.email}</span>;
      case "username":
        return <span className="md:truncate md:line-clamp-1">{user.username}</span>;
      case "role":
        return <span className="md:truncate md:line-clamp-1">{user.role === "USER" ? "کاربر" : "مدیر"}</span>;

      case "chage-role":
        return <UserChangeRoleBtn user={user} />;
      case "edit":
        return (
          <Button
            color="secondary"
            size="sm"
            onPress={() => {
              navigate(`/admin-panel/edituser/${user._id}`);
            }}
          >
            ویرایش
          </Button>
        );
      case "delete":
        return <UserDeleteBtn user={user} />;
      case "ban":
        return <UserBanBtn user={user} />;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} filterKey="status" INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={users} renderCell={renderCell} searchKey="name" dataTitle="کاربر" />
    </>
  );
}
