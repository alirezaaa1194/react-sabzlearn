import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import type { sessionType } from "~/types/session.type";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";

function MenuDeleteBtn({ menu }: { menu: any }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const removeLessonHandler = () => {
    fetcher.submit({ mainMenuId: menu._id }, { method: "POST", action: "/RemoveMenu" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);

      showToast("موفق", `${menu.parent ? "زیر منو" : "منو"} با موفقیت حذف شد`, "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title={`آیا از حذف ${menu.parent ? "زیر منو" : "منو"} اطمینان دارید؟`} action={removeLessonHandler} />
      <Button
        onPress={() => {
          setIsOpenRemoveModal(true);
        }}
        className="text-white transition-colors font-DanaMedium"
        size="sm"
        color="danger"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "حذف"}
      </Button>
    </>
  );
}

export default MenuDeleteBtn;
