import { HeroUIProvider } from "@heroui/system";
import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header/Header";

function GeneralLayout() {
  return (
    <div>
      <HeroUIProvider>
        <Header />
        <Outlet />
      </HeroUIProvider>
    </div>
  );
}

export default GeneralLayout;
