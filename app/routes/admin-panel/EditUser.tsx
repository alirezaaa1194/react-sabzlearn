import React from "react";
import EditUserForm from "~/components/admin-panel/Users/AddUserForm/EditUserForm";
import type { Route } from "./+types/EditUser";
import { getAllUsers, getCookie } from "~/utils/utils";
import type { userType } from "~/types/user.type";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");
  const userId = params.userId;
  const allUsers = await getAllUsers(token as string);
  const mainUser = allUsers.data.find((user: userType) => user._id === userId);

  return { mainUser };
}


export const meta: MetaFunction<typeof loader> = ({ data }: any) => {
  return [{ title: `ویرایش کاربر - ${data.mainUser.name} - پنل مدیریت - سبزلرن` }];
};

function EditUser({ loaderData }: Route.ComponentProps) {
    
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          ویرایش <span className="text-secondary">کاربر</span>
        </span>
        <EditUserForm user={loaderData.mainUser} />
      </div>
    </div>
  );
}

export default EditUser;
