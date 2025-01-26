import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { NavLink } from "react-router";
import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "test1",
    subs: ["sub1 test1", "sub1 test2"],
  },
  {
    id: 2,
    title: "test2",
    subs: ["sub2 test1", "sub2 test2"],
  },
  {
    id: 3,
    title: "test3",
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
