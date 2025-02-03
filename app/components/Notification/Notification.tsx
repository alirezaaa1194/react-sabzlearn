import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleSolidIcon, InformationCircleSolidIcon, XCircleSolidIcon } from "public/svg/svgs";
import toast from "react-hot-toast";

type ToastType = {
  id: string;
  visible: boolean;
  type: "success" | "error" | "loading" | "blank" | "custom";
  duration?: number;
  position?: string;
  ariaProps: {
    role: string;
    "aria-live": "assertive" | "polite";
  };
};

type notificationPropsType = {
  t: ToastType;
  title: "خطا" | "موفق" | "هشدار";
  desc: string;
  status: "error" | "success" | "warning";
};

function Notification({ t, title, desc, status }: notificationPropsType) {
  return (
    <AnimatePresence>
      {t.visible && (
        <motion.div key={t.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="bg-white dark:bg-gray-800 p-5 h-[92px] w-80 relative">
          <div className="flex items-center gap-x-3.5">
            {status === "error" && <XCircleSolidIcon className="w-13 h-13 text-red-500" />}
            {status === "success" && <CheckCircleSolidIcon className="w-13 h-13 text-green-500" />}
            {status === "warning" && <InformationCircleSolidIcon className="w-13 h-13 text-amber-500" />}

            <div className="flex flex-col gap-y-1">
              <span className="font-DanaDemiBold text-medium">{title}</span>
              <p className="font-DanaRegular text-sm">{desc}</p>
            </div>
            <div className="w-full h-[3px]  bg-gray-100 absolute bottom-0 left-0" dir="ltr">
              <motion.span initial={{ width: "100%" }} animate={{ width: 0 }} transition={{ duration: 5 }} className={`block h-full ${status === "error" ? " bg-red-500" : status === "success" ? " bg-green-500" : status === "warning" ? " bg-amber-500" : ""}`}></motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function showToast(title: "خطا" | "موفق" | "هشدار", desc: string, status: "error" | "success" | "warning") {
  toast.custom((t: ToastType) => <Notification t={t} title={title} desc={desc} status={status} />, {
    position: "top-right",
    duration: 5000,
  });
}

export default Notification;
