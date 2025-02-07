import React, { useEffect, useState } from "react";
import TicketsStatistics from "~/components/user-panel/TicketPage/TicketsStatistics";
import { getCookie, getUserTickets } from "~/utils/utils";
import type { Route } from "./+types/tickets";
import SectionHeader from "~/components/user-panel/SectionHeader";
import NullMessage from "~/components/user-panel/NullMessage";
import type { ticketType } from "~/types/ticket.type";
import TicketBox from "~/components/user-panel/TicketPage/TicketBox";
import SortSelect from "~/components/user-panel/TicketPage/SortSelect";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const userTickets = await getUserTickets(token);

  return { token, userTickets };
}

function tickets({ loaderData }: Route.ComponentProps) {
  const userTickets = loaderData.userTickets.data || [];
  const [sortValue, setSortValue] = useState<string>("");

  const [filteredTickets, setFilteredTickets] = useState(userTickets);

  useEffect(() => {
    let sortedTickets = [...userTickets];

    switch (sortValue) {
      case "":
        {
          sortedTickets = sortedTickets;
        }
        break;
      case "wait_reply":
        {
          sortedTickets = sortedTickets.filter((ticket: ticketType) => !ticket.answer);
        }
        break;
      case "replied":
        {
          sortedTickets = sortedTickets.filter((ticket: ticketType) => ticket.answer);
        }
        break;
      case "newest":
        {
          sortedTickets = sortedTickets;
        }
        break;
      case "oldest":
        {
          sortedTickets = sortedTickets.reverse();
        }
        break;
    }

    setFilteredTickets(sortedTickets);
  }, [sortValue, userTickets]);
  return (
    <section>
      <TicketsStatistics userTickets={userTickets} />
      <div className="flex flex-col mt-6 md:mt-10">
        <SectionHeader title={`تیکت های من (${userTickets?.length})`} elem={<SortSelect setSortValue={setSortValue} />} />
        {userTickets?.length ? (
          <div className="flex flex-col gap-3 md:gap-4">
            {filteredTickets?.map((ticket: ticketType) => (
              <TicketBox ticket={ticket} />
            ))}
          </div>
        ) : (
          <NullMessage title="هنوز تیکتی ارسال نکرده اید" />
        )}
      </div>
    </section>
  );
}

export default tickets;
