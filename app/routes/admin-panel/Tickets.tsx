import React from "react";
import type { Route } from "./+types/Comments";
import { getAllTickets, getCookie, getDepartments } from "~/utils/utils";
import TicketsList from "~/components/admin-panel/Tickets/TicketsList";
import type { ticketType } from "~/types/ticket.type";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");
  const allTickets = await getAllTickets(token as string)

  const allDepartment = await getDepartments();

  return { allTickets, allDepartment };
}

export const meta:MetaFunction=()=> {
  return [{ title: "تیکت ها - پنل مدیریت - سبزلرن" }];
}

function Comments({ loaderData }: Route.ComponentProps) {
  const tickets = [...loaderData?.allTickets.data].sort((a: ticketType, b: ticketType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));

  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">تیکت ها</span>
        </span>
        <TicketsList ticktes={tickets} departments={loaderData.allDepartment.data} />
      </div>
    </div>
  );
}

export default Comments;
