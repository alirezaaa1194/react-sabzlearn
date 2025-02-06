import React from "react";
import SectionHeader from "../SectionHeader";
import TicketBox from "../TicketPage/TicketBox";
import NullMessage from "../NullMessage";
import type { ticketType } from "~/types/ticket.type";

function RecentTickets({ userTickets }: { userTickets: ticketType[] }) {
  console.log(userTickets);

  return (
    <div>
      <SectionHeader title="تیکت های اخیر" linkTitle="مشاهده همه" linkAdress="/my-account/tickets" />
      <div className="flex flex-col gap-3 md:gap-4">{userTickets?.length ? userTickets?.slice(0, 4)?.map((userTicket: ticketType) => <TicketBox ticket={userTicket} />) : <NullMessage title="هنوز تیکتی ارسال نکرده اید" />}</div>
    </div>
  );
}

export default RecentTickets;
