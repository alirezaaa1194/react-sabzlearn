import React from "react";

function NullMessage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center text-sm md:text-base h-16 bg-white dark:bg-darker rounded dark:divide-dark font-DanaMedium">
      <div className="col-span-12">{title}</div>
    </div>
  );
}

export default NullMessage;
