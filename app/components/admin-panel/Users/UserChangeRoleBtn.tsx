import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner, user } from "@heroui/react";
import type { userType } from "~/types/user.type";

function UserChangeRoleBtn({ user }: { user: userType }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const changeUserRoleHandler = () => {
    const userNewRoleInfo = {
      id: user._id,
      role: user.role === "USER" ? "ADMIN" : "USER",
    };

    fetcher.submit({ userNewRoleInfo: JSON.stringify(userNewRoleInfo) }, { method: "POST", action: "/ChangeUserRole" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      showToast("موفق", `نقش ${user.role === "USER" ? "کاربر" : "مدیر"} به ${user.role === "USER" ? "مدیر" : "کاربر"} تغییر یافت`, "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal
        isOpen={isOpenRemoveModal}
        onClose={() => setIsOpenRemoveModal(false)}
        title={
          <span>
            آیا از تغییر نقش {user.role === "USER" ? "کاربر" : "مدیر"} به <span className="border-b-2 border-b-red-500 font-bold px-2">{user.role === "USER" ? "مدیر" : "کاربر"}</span> اطمینان دارید؟
          </span>
        }
        action={changeUserRoleHandler}
      />
      <Button
        onPress={() => {
          setIsOpenRemoveModal(true);
        }}
        className="text-white  transition-colors font-DanaMedium"
        size="sm"
        color="primary"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "تغییر نقش"}
      </Button>
    </>
  );
}

export default UserChangeRoleBtn;
