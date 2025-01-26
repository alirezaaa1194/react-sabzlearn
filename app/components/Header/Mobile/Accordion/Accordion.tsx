import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { NavLink } from "react-router";
import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "فرانت اند",
    subs: ["sub1 test1", "sub1 test2"],
  },
  {
    id: 2,
    title: "بک اند",
    subs: ["sub2 test1", "sub2 test2"],
  },
  {
    id: 3,
    title: "امنیت",
    subs: ["sub3 test1", "sub3 test2"],
  },
];

function Accordion() {
  const [mainAccordion, setMainAccordion] = useState();

  return (
    <ul className="flex flex-col gap-x-1 font-DanaRegular text-sm">
      {data.map((cat) => (
        <AccordionItem cat={cat} mainAccordion={mainAccordion} setMainAccordion={setMainAccordion} />
      ))}
    </ul>
  );
}

export default Accordion;
