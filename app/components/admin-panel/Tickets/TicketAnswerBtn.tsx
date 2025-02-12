import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { useFetcher } from "react-router";
import { Button } from "@heroui/button";
import { showToast } from "~/components/Notification/Notification";
import { Spinner } from "@heroui/react";
import type { ticketType } from "~/types/ticket.type";
import parse from "html-react-parser";

function TicketAnswerBtn({ ticket }: { ticket: ticketType }) {
  const [isOpenAnswerModal, setIsOpenAnswerModal] = useState<boolean>(false);
  const [answerInputValue, setAnswerInputValue] = useState<string>("");
  const fetcher = useFetcher();

  const commentAnswerHandler = () => {
    if (answerInputValue) {
      fetcher.submit({ mainTicketId: ticket._id, answerBody: answerInputValue }, { method: "POST", action: "/AnswerTicket" });

      if (fetcher?.data?.success === false) {
        showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
      } else {
        showToast("موفق", "پاسخ با موفقیت ثبت شد", "success");
        setIsOpenAnswerModal(false);
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
            {ticket.user}: {parse(ticket?.body)} <textarea value={answerInputValue} onChange={(e) => setAnswerInputValue(e.target.value)} placeholder="پاسخ تیکت را وارد کنید..." className="w-full bg-darker border-none outline-none rounded-md p-2" rows={10}></textarea>
          </div>
        }
      />

      <Button
        onPress={() => {
          if (!ticket.answer) {
            setIsOpenAnswerModal(true);
          } else {
            showToast("خطا", "پاسخ تیکت قبلا ثبت شده است", "error");
          }
        }}
        color="default"
        className={`text-white transition-colors font-DanaMedium ${!!ticket?.answer && "opacity-40"}`}
        size="sm"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "پاسخ"}
      </Button>
    </>
  );
}

export default TicketAnswerBtn;
