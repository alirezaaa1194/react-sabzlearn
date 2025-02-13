import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";
import type { userType } from "~/types/user.type";

function UserBanBtn({ user }: { user: userType }) {
  const [isOpenBanModal, setIsOpenBanModal] = useState(false);

  const fetcher = useFetcher();

  const banUserHandler = () => {
    fetcher.submit({ userId: user._id }, { method: "POST", action: "/BanUser" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenBanModal(false);
      showToast("موفق", "کاربر با موفقیت بن شد", "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenBanModal} onClose={() => setIsOpenBanModal(false)} title="آیا از بن کردن کاربر اطمینان دارید؟" action={banUserHandler} />
      <Button
        onPress={() => {
          setIsOpenBanModal(true);
        }}
        className="text-black transition-colors font-DanaMedium"
        size="sm"
        color="warning"
      >
        {fetcher.state === "loading" ? <Spinner color="current" size="sm" /> : "بن"}
      </Button>
    </>
  );
}

export default UserBanBtn;
