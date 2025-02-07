import React from "react";

function SortSelect({ setSortValue }: { setSortValue: (param: string) => void }) {
  return (
    <div>
      <select onChange={(e) => setSortValue(e.target.value)} className="bg-gray-100 dark:bg-dark text-gray-900 dark:text-white text-sm md:text-base w-full md:w-64 h-8 md:h-13 pr-3.5 border-l-[14px] border-l-transparent rounded outline-none font-DanaMedium cursor-pointer">
        <option value="">مرتب سازی بر اساس:</option>
        <option value="wait_reply">منتظر پاسخ</option>
        <option value="replied">پاسخ داده شده</option>
        <option value="newest">جدیدترین</option>
        <option value="oldest">قدیمی ترین</option>
      </select>
    </div>
  );
}

export default SortSelect;
