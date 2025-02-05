import { MagnifyingGlassIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInputValue, setSearchInputValue] = useState<string>(searchParams.get("s") || "");

  const changeInputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };
  const keyupInputSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      searchParams.set("s", searchInputValue);
      setSearchParams(searchParams, {
        preventScrollReset: true,
      });
    }
  };

  useEffect(() => {
    setSearchInputValue(searchParams.get("s") as string);
  }, [searchParams]);

  return (
    <div className="h-17 bg-white dark:bg-darker rounded-lg p-4 md:p-5">
      <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-white">
        <input type="text" className="font-DanaMedium placeholder-slate-500 bg-transparent flex-grow outline-none" value={searchInputValue} onChange={changeInputSearchHandler} onKeyUp={keyupInputSearchHandler} name="s" placeholder="جستجو بین دوره ها" />
        <button
          onClick={() => {
            searchParams.set("s", searchInputValue);
            setSearchParams(searchParams, {
              preventScrollReset: true,
              replace:true
            });
          }}
        >
          <MagnifyingGlassIcon className="size-7" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
