import React from "react";
import { Outlet } from "react-router";

function GeneralLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
