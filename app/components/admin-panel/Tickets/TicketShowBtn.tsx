import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Button } from "@heroui/button";
import type { commentType } from "~/types/comment.type";
import type { ticketType } from "~/types/ticket.type";
import parse from "html-react-parser";

function TicketShowBtn({ ticket }: { ticket: ticketType }) {
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);

  return (
    <>
      <CustomModal
        isOpen={isOpenInfoModal}
        onClose={() => setIsOpenInfoModal(false)}
        desc={
          <>
            <p>{ticket.user}:</p>
            {parse(ticket?.body)}
          </>
        }
      />
      <Button
        onPress={() => {
          setIsOpenInfoModal(true);
        }}
        color="secondary"
        className="text-white transition-colors font-DanaMedium"
        size="sm"
      >
        مشاهده
      </Button>
    </>
  );
}

export default TicketShowBtn;
