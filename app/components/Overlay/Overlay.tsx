import React from "react";

type OverlayPropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function Overlay({ isOpen, setIsOpen }: OverlayPropsType) {
  const handleCloseOverlay = () => {
    setIsOpen(!isOpen);
  };
  return <div className={`fixed w-screen h-screen top-0 left-0 bg-black/40 z-40 lg:hidden transition-all ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={handleCloseOverlay}></div>;
}

export default Overlay;
