import { ChatBubbleLeftRightIcon, FolderOpenIcon, HomeIcon, PowerIcon, UserIcon } from "public/svg/svgs";
import React, { use } from "react";
import { Link, useFetcher } from "react-router";
import { AuthContext, type AuthContextType } from "~/contexts/AuthContext";
import * as Spinners from "react-spinners";
import { Button } from "@heroui/button";
import { useQuery } from "@tanstack/react-query";
import { getUserTickets } from "~/utils/utils";
const PulseLoader = Spinners.PulseLoader;

function UserProfileDropdownCard() {
  const userInfoContext = use(AuthContext) as AuthContextType;
  const fetcher = useFetcher();

  const { data: userTickets } = useQuery({
    queryKey: ["user-tickets"],
    queryFn: () => getUserTickets(userInfoContext.token),
  });

  const isHaveUnAnsweredTicket = userTickets?.data.some((ticket: any) => !ticket.answer);

  return (
    <div className="w-[278px] bg-white dark:bg-darker p-5 pb-[14px] rounded-lg flex flex-col">
      {/* header */}
      <div className="flex items-center pb-5 gap-x-3.5  border-b border-b-neutral-200 dark:border-b-white/5">
        <div className="w-14 h-14 rounded-full flex items-center justify-center">
          <Link to="/my-account">
            <img src="/public/images/user-profile.png" className="rounded-full" alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-DanaDemiBold">{userInfoContext.userInfo?.name}</span>
          <span className="text-sm font-DanaMedium text-green-500">موجودی: 0 تومان</span>
        </div>
      </div>
      {/* body */}
      <ul className="flex flex-col font-DanaMedium py-2">
        <li>
          <Link to="/my-account" className="flex items-center gap-x-2.5 h-12 px-2.5 rounded-xl hover:text-white hover:bg-green-500 transition-colors">
            <HomeIcon className="size-6" />
            پیشخوان
          </Link>
        </li>
        <li>
          <Link to="/my-account/courses" className="flex items-center gap-x-2.5 h-12 px-2.5 rounded-xl hover:text-white hover:bg-green-500 transition-colors">
            <FolderOpenIcon className="size-6" />
            دوره های من
          </Link>
        </li>
        <li>
          <Link to="/my-account/tickets" className="flex items-center justify-between h-12 px-2.5 rounded-xl hover:text-white hover:bg-green-500 transition-colors">
            <span className="flex items-center gap-x-2.5">
              <ChatBubbleLeftRightIcon className="size-6" />
              تیکت های من
            </span>
            {isHaveUnAnsweredTicket ? <span className="block size-2 rounded-full bg-amber-400"></span> : null}
          </Link>
        </li>
        <li>
          <Link to="/my-account/edit-account" className="flex items-center gap-x-2.5 h-12 px-2.5 rounded-xl hover:text-white hover:bg-green-500 transition-colors">
            <UserIcon className="size-6" />
            جزئیات حساب
          </Link>
        </li>
      </ul>
      {/* footer */}
      <div className="pt-2 border-t border-t-neutral-200 dark:border-t-white/5 font-DanaMedium">
        <fetcher.Form action="/logout" method="POST">
          <Button type="submit" className={`w-full flex items-center justify-start gap-x-2.5 h-12 px-2.5 rounded-xl hover:text-white hover:bg-red-500 transition-colors bg-transparent ${fetcher.state === "loading" ? "bg-red-500" : "bg-transparent"}`}>
            {fetcher.state === "loading" ? (
              <PulseLoader color="#fff" className="mx-auto" size={12} />
            ) : (
              <>
                <PowerIcon className="size-6" />
                خروج
              </>
            )}
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default UserProfileDropdownCard;
