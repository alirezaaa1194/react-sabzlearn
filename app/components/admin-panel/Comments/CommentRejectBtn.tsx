import React, { useState } from "react";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomModal from "../Modals/CustomModal";
import { Button } from "@heroui/button";
import type { commentType } from "~/types/comment.type";
import { Spinner } from "@heroui/react";

function CommentRejectBtn({ comment }: { comment: commentType }) {
  const [isOpenRejectModal, setIsOpenRejectModal] = useState<boolean>(false);

  const fetcher = useFetcher();

  const rejectCommentHandler = () => {
    fetcher.submit({ mainCommentId: (comment as commentType)._id }, { method: "POST", action: "/RejectComment" });
    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRejectModal(false);
      showToast("موفق", "کامنت با موفقیت رد شد", "success");
    }
  };
  return (
    <>
      <CustomModal isOpen={isOpenRejectModal} onClose={() => setIsOpenRejectModal(false)} title="آیا از رد کامنت اطمینان دارید؟" action={rejectCommentHandler} />
      <Button
        onPress={() => {
          setIsOpenRejectModal(true);
        }}
        color="warning"
        className="text-black transition-colors font-DanaMedium"
        size="sm"
      >
        {fetcher.state === "loading" ? <Spinner color="current" size="sm" /> : "رد"}
      </Button>
    </>
  );
}

export default CommentRejectBtn;
