import React, { useState, type JSX } from "react";

type DropDownPropsType = {
  icon: React.ReactNode;
  children: React.ReactNode;
  tooltip?: React.ReactNode;

  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
};

function DropDown({ isOpen, setIsOpen, icon, children, tooltip }: DropDownPropsType) {
  const openDropDownHanlder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${isOpen ? "z-[5]" : ""}`}>
      <button className="w-13 h-13 rounded-full bg-white dark:bg-dark flex items-center justify-center" onClick={openDropDownHanlder}>
        {tooltip}
        {icon}
      </button>
      <div className={`absolute left-0 top-[76px] transition-all  ${isOpen === true ? "opacity-100 visible" : "opacity-0 invisible"}`}>{children}</div>
    </div>
  );
}

export default DropDown;
