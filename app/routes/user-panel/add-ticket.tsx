import React, { useEffect } from "react";
import SectionHeader from "~/components/user-panel/SectionHeader";
import TicketForm from "~/components/user-panel/TicketPage/TicketForm";
import type { Route } from "./+types/add-ticket";
import { getCookie, getDepartments, saveTicket } from "~/utils/utils";
import { Toaster } from "react-hot-toast";
import { redirect, type MetaFunction } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const departments = await getDepartments();

  return { departments };
}

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const ticketDepartmentID = formData.get("departmentID");
  const ticketDepartmentSubID = formData.get("departmentSubID");
  const ticketTitle = formData.get("title");
  const ticketPriority = formData.get("priority");
  const ticketBody = formData.get("body");

  const newTicketInfo = {
    departmentID: ticketDepartmentID,
    departmentSubID: ticketDepartmentSubID,
    title: ticketTitle,
    priority: ticketPriority,
    body: ticketBody,
  };

  try {
    await saveTicket(newTicketInfo, token);

    return redirect("/my-account/tickets");
  } catch {
    return { success: false };
  }
}

export const meta:MetaFunction=()=> {
  return [{ title: "ارسال تیکت - پنل کاربری - سبزلرن" }];
}
function addTicket({ loaderData }: Route.ComponentProps) {
  const departments = loaderData.departments.data;
  return (
    <section>
      <Toaster />
      <SectionHeader title="ارسال تیکت جدید" linkTitle="بازگشت به تیکت ها" linkAdress="/my-account/tickets" />
      <TicketForm departments={departments} />
    </section>
  );
}

export default addTicket;
