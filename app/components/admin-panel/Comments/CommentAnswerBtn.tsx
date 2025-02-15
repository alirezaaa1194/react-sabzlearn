import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import type { commentType } from "~/types/comment.type";
import { useFetcher } from "react-router";
import { Button } from "@heroui/button";
import { showToast } from "~/components/Notification/Notification";
import { Spinner } from "@heroui/react";

function CommentAnswerBtn({ comment }: { comment: commentType }) {
  const [isOpenAnswerModal, setIsOpenAnswerModal] = useState<boolean>(false);
  const [answerInputValue, setAnswerInputValue] = useState<string>("");
  const fetcher = useFetcher();

  const commentAnswerHandler = () => {
    if (answerInputValue) {
      if (answerInputValue !== comment?.answerContent?.body) {
        fetcher.submit({ mainCommentId: comment._id, answerBody: answerInputValue }, { method: "POST", action: "/AnswerComment" });

        if (fetcher?.data?.success === false) {
          showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
        } else {
          showToast("موفق", "پاسخ با موفقیت ثبت شد", "success");
          setIsOpenAnswerModal(false);
        }
      }
    } else {
      showToast("خطا", "لطفا پاسخ را وارد کنید", "error");
    }
  };

  return (
    <>
      <CustomModal
        isOpen={isOpenAnswerModal}
        onClose={() => setIsOpenAnswerModal(false)}
        action={commentAnswerHandler}
        desc={
          <div className="flex flex-col gap-2">
            <p>{comment.creator ?comment.creator.name:null}:</p> {comment?.body} <textarea value={answerInputValue} onChange={(e) => setAnswerInputValue(e.target.value)} placeholder="پاسخ کامنت را وارد کنید..." className="w-full bg-darker border-none outline-none rounded-md p-2" rows={10}></textarea>{" "}
          </div>
        }
      />

      <Button
        onPress={() => {
          setIsOpenAnswerModal(true);
          setAnswerInputValue(comment?.answerContent?.body || "");
        }}
        color="default"
        className={`text-white transition-colors font-DanaMedium ${!!comment?.answerContent?._id && "opacity-40"}`}
        size="sm"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "پاسخ"}
      </Button>
    </>
  );
}

export default CommentAnswerBtn;
