import { MagnifyingGlassIcon } from "public/svg/svgs";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

function Searchbar() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [searchInputValue, setSearchInputValue] = useState<string>((searchParams.get("s") as string) || "");
  const navigate = useNavigate();
  const serachInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchInputValue("");
  }, [location.pathname]);

  useEffect(() => {
    setSearchInputValue(searchParams.get("s") as string);
  }, [searchParams]);

  const searchInputValueChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/courses?s=${searchInputValue}`);
      serachInputRef?.current?.blur();
    }
  };

  return (
    <div className="h-13 bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-DanaMedium rounded-full hidden lg:flex items-center">
      <input type="text" placeholder="چیو میخوای یاد بگیری؟" className="bg-gray-100 dark:bg-transparent outline-none border-none px-4 h-full rounded-r-full" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} onKeyUp={searchInputValueChangeHandler} ref={serachInputRef} />
      <button
        className="p-[14px] ps-0"
        onClick={() => {
          navigate(`/courses?s=${searchInputValue}`);
        }}
      >
        <MagnifyingGlassIcon className="size-6" />
      </button>
    </div>
  );
}

export default Searchbar;
