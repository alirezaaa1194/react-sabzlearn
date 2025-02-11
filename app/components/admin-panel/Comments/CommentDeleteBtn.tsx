import React, { useState } from "react";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomModal from "../Modals/CustomModal";
import { Button } from "@heroui/button";
import type { commentType } from "~/types/comment.type";
import { Spinner } from "@heroui/react";

function CommentDeleteBtn({ comment }: { comment: commentType }) {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const fetcher = useFetcher();

  const deleteCommentHandler = () => {
    fetcher.submit({ mainCommentId: (comment as commentType)._id }, { method: "POST", action: "/DeleteComment" });
    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenDeleteModal(false);
      showToast("موفق", "کامنت با موفقیت حذف شد", "success");
    }
  };
  return (
    <>
    
      <CustomModal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)} title="آیا از حذف کامنت اطمینان دارید؟" action={deleteCommentHandler} />

      <Button
        onPress={() => {
          setIsOpenDeleteModal(true);
        }}
        color="danger"
        className="text-white transition-colors font-DanaMedium"
        size="sm"
      >
       {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "حذف"}
      </Button>
    </>
  );
}

export default CommentDeleteBtn;
