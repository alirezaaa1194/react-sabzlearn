import React, { useEffect } from "react";
import SectionHeader from "~/components/user-panel/SectionHeader";

import AccountForm from "~/components/user-panel/EditAccountPage/AccountForm";
import type { Route } from "./+types/edit-account";
import { getCookie, updateUserInfo } from "~/utils/utils";
import { redirect, useActionData, useFetcher, type MetaFunction } from "react-router";
import { Toaster } from "react-hot-toast";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const userDepartmentID = formData.get("name");
  const userDepartmentSubID = formData.get("username");
  const userTitle = formData.get("email");
  const userPriority = formData.get("phone");
  const userBody = formData.get("password");

  const userNewInfo = {
    name: userDepartmentID,
    username: userDepartmentSubID,
    email: userTitle,
    phone: userPriority,
    password: userBody,
  };

  try {
    const res = await updateUserInfo(userNewInfo, token);

    return { success: true };
  } catch {
    return { success: false };
  }
}

export const meta: MetaFunction = () => {
  return [{ title: "جزئیات حساب - پنل کاربری - سبزلرن" }];
};
function editAccount() {
  return (
    <section>
      <Toaster />
      <SectionHeader title="جزئیات حساب کاربری" />
      <AccountForm />
    </section>
  );
}

export default editAccount;
