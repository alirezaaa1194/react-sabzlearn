import { BarsIcon, BellIcon, ChevronDownIcon } from "public/svg/svgs";
import AdminInfoDropDown from "./AdminInfoDropDown";
import NotificationDropDown from "./NotificationDropDown";
import type { commentType } from "~/types/comment.type";
import type { ticketType } from "~/types/ticket.type";

export default function Header({ isOpenSidebar, setIsOpenSidebar, comments, tickets }: { isOpenSidebar: boolean; setIsOpenSidebar: (param: boolean) => void; comments: commentType[]; tickets: ticketType[] }) {
  return (
    <header className="bg-darker w-full md:px-5">
      <div className="container sticky top-0 right-0 flex items-center justify-between py-4 z-[1] font-lalezar">
        {/* header right side */}
        <AdminInfoDropDown />

        {/* header left side */}
        <div className="flex items-center gap-5">
          <div className="h-11 hidden md:flex items-center gap-1 relative rounded-xl p-1 bg-white/5 text-white">
            <input type="text" className="px-2 border-none outline-none bg-transparent text-white" placeholder="جستحو کنید..." />
            <button className="bg-white/5 text-white px-3 py-1 rounded-lg">جست و جو</button>
          </div>
          <NotificationDropDown comments={comments} tickets={tickets} />
          <button onClick={() => setIsOpenSidebar(true)} className="size-11 flex items-center justify-center bg-white/5 text-white rounded-xl md:hidden">
            <BarsIcon className="size-6 md:size-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
