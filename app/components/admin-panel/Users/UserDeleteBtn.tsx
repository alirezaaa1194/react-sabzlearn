import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";
import type { userType } from "~/types/user.type";

function UserDeleteBtn({ user }: { user: userType }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const removeUserHandler = () => {
    fetcher.submit({ userId: user._id }, { method: "POST", action: "/RemoveUser" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      showToast("موفق", "کاربر با موفقیت حذف شد", "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title="آیا از حذف کاربر اطمینان دارید؟" action={removeUserHandler} />
      <Button
        onPress={() => {
          setIsOpenRemoveModal(true);
        }}
        className="text-white  transition-colors font-DanaMedium"
        size="sm"
        color="danger"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "حذف"}
      </Button>
    </>
  );
}

export default UserDeleteBtn;
