import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";

function OffDeleteBtn({ off }: { off: any }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const fetcher = useFetcher();

  const removeoffHandler = () => {
    fetcher.submit({ mainoffId: off._id }, { method: "POST", action: "/RemoveOff" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      showToast("موفق", "کدتخفیف با موفقیت حذف شد", "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title="آیا از حذف کدتخفیف اطمینان دارید؟" action={removeoffHandler} />
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

export default OffDeleteBtn;
