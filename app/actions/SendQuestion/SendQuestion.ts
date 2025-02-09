import { getCookie, saveTicket } from "~/utils/utils";
import type { Route } from "../sendQuestion/+types/sendQuestion";

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
  
    //   return redirect("/my-account/tickets");
    } catch {
      return { success: false };
    }
  }