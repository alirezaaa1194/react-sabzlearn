import { Button } from "@heroui/button";
import { ArrowLeftOnRectangleMiniIcon } from "public/svg/svgs";
import React from "react";
import { useFetcher } from "react-router";
import * as Spinners from "react-spinners";
const PulseLoader = Spinners.PulseLoader;

function LogoutBtn() {
  const fetcher = useFetcher();

  return (
    <Button
      type="submit"
      className="w-full h-[50px] shrink-0 mt-auto btn justify-between bg-gray-100 text-gray-900 dark:bg-dark dark:text-gray-400 rounded-lg font-DanaMedium"
      onPress={() => {
        fetcher.submit(null, { method: "POST", action: "/logout" });
      }}
    >
      {fetcher.state === "loading" ? (
        <PulseLoader color="#fff" className="mx-auto" size={12} />
      ) : (
        <>
          خروج از حساب کاربری
          <ArrowLeftOnRectangleMiniIcon className="size-6" />
        </>
      )}
    </Button>
  );
}

export default LogoutBtn;
