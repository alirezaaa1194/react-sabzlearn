import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

function AccordionItem({ cat, mainAccordion, setMainAccordion }: any) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (mainAccordion !== cat.id) {
      setIsOpen(false);
    }
  }, [mainAccordion]);

  return (
    <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5">
      <div className="flex items-center justify-between h-8 w-full">
        <NavLink to="/courses" className={mainAccordion === cat.id && isOpen ? "text-primary" : ""}>
          {cat.title}
        </NavLink>
        <button
          onClick={() => {
            setMainAccordion(cat.id);
            setIsOpen((prev) => !prev);
          }}
        >
          <ChevronLeftMiniIcon className={`size-5 ${mainAccordion === cat.id && isOpen ? "-rotate-90 text-primary" : ""}`} />
        </button>
      </div>

      {/* submenu */}
      {mainAccordion === cat.id && isOpen ? (
        <ul className="bg-[#f5f5f5] dark:bg-dark rounded-lg w-full p-3 text-xs font-DanaRegular flex flex-col gap-3">
          <li>
            <NavLink to="course/a" className="hover:text-primary hover:transition-colors">
              آموزش HTML
            </NavLink>
          </li>
        </ul>
      ) : null}
    </li>
  );
}

export default AccordionItem;
