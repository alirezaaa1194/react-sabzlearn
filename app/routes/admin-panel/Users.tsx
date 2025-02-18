import React from "react";
import AddUserForm from "~/components/admin-panel/Users/AddUserForm/AddUserForm";
import UsersList from "~/components/admin-panel/Users/UsersList";
import type { Route } from "./+types/Users";
import { getAllUsers, getCookie } from "~/utils/utils";
import type { userType } from "~/types/user.type";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");
  const users = await getAllUsers(token as string);

  return { users };
}

export const meta:MetaFunction=()=> {
  return [{ title: "کاربران - پنل مدیریت - سبزلرن" }];
}

function Users({ loaderData }: Route.ComponentProps) {
  const users = [...loaderData?.users?.data]?.sort((a: userType, b: userType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">کاربر</span> جدید
        </span>
        <AddUserForm users={loaderData.users.data} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">کاربر ها</span>
        </span>
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default Users;
