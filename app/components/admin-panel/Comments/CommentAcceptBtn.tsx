import React, { useState } from "react";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomModal from "../Modals/CustomModal";
import { Button } from "@heroui/button";
import type { commentType } from "~/types/comment.type";
import { Spinner } from "@heroui/react";

function CommentAcceptBtn({ comment }: { comment: commentType }) {
  const [isOpenAcceptModal, setIsOpenAcceptModal] = useState<boolean>(false);

  const fetcher = useFetcher();

  const acceptCommentHandler = () => {
    fetcher.submit({ mainCommentId: (comment as commentType)._id }, { method: "POST", action: "/AcceptComment" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenAcceptModal(false);

      showToast("موفق", "کامنت با موفقیت تایید شد", "success");
    }
  };
  return (
    <>
      <CustomModal isOpen={isOpenAcceptModal} onClose={() => setIsOpenAcceptModal(false)} title="آیا از تایید کامنت اطمینان دارید؟" action={acceptCommentHandler} />
      <Button
        onPress={() => {
          setIsOpenAcceptModal(true);
        }}
        color="primary"
        className="text-white transition-colors font-DanaMedium"
        size="sm"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "تایید"}
      </Button>
    </>
  );
}

export default CommentAcceptBtn;
