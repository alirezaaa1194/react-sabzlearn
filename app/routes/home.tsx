import React from "react";
import CartDropdown from "~/components/Header/Desktop/cart/CartDropdown";
import UserProfileDropdown from "~/components/Header/Desktop/userProfile/UserProfileDropdown";
import Header from "~/components/Header/Header";

function home() {
  return (
    <div>
      <title>آکادمی آموزش برنامه نویسی سبزلرن | Sabzlearn</title>
      <Header />
      <div className="flex p-5 gap-5">
        <UserProfileDropdown />
        <CartDropdown />
      </div>
    </div>
  );
}

export default home;
