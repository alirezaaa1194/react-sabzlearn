import React from "react";
import UserProfileDropdown from "~/components/Header/Desktop/userProfile/userProfileDropdown";
import Header from "~/components/Header/Header";

function home() {
  return (
    <div>
      <title>آکادمی آموزش برنامه نویسی سبزلرن | Sabzlearn</title>
      <Header />
      <UserProfileDropdown />
    </div>
  );
}

export default home;
