import { Button } from "@heroui/button";
import { CheckCircleIcon, ChevronDownIcon, CreditCardIcon, TomanIcon } from "public/svg/svgs";
import React, { useState } from "react";
import { Link, useFetcher, useNavigate } from "react-router";
import type { courseType } from "~/types/course.type";
import { showToast } from "../Notification/Notification";

function PaySection({ cartCourses, userToken }: { cartCourses: courseType[]; userToken: string | null }) {
  const cartCoursesSumPrice = cartCourses.reduce((prev, curr) => prev + curr.price, 0);

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [isOpenOfferBox, setIsOpenOfferBox] = useState<boolean>(true);

  const [isValidOfferCode, setIsValidOfferCode] = useState<boolean>(false);
  const [offerInputValue, setOfferInputValue] = useState<string>("");
  const [offerPercent, setOfferPercent] = useState<number>(0);

  const [coursesSumPrice, setCoursesSumPrice] = useState<number>((cartCoursesSumPrice * (100 - cartCourses.length * 2)) / 100);

  const changeOfferInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferInputValue(e.target.value);
  };

  const keyupOfferInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      validateOfferCode();
    }
  };

  const validateOfferCode = () => {
    if (offerInputValue === "sabzlearn.ir") {
      setOfferPercent(50);

      setCoursesSumPrice((prev) => (prev * (100 - 50)) / 100);

      setOfferInputValue("");
      showToast("موفق", "کد تخفیف با موفقیت اعمال شد", "success");
      setIsValidOfferCode(true);
    } else {
      if (offerInputValue === "") {
        showToast("خطا", "لطفا کد تخفیف را وارد کنید", "error");
      } else {
        showToast("خطا", "کد تخفیف معتبر نیست", "error");
      }
      setOfferPercent(0);
      setIsValidOfferCode(false);
    }
  };

  const fetcher = useFetcher();

  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 md:px-6 h-[60px] bg-green-500 text-white">
          <div className="flex items-center gap-x-2">
            <CreditCardIcon className="size-7 md:size-8" />
            <span className="md:text-xl font-DanaDemiBold">اطلاعات پرداخت</span>
          </div>
        </div>
        <div className="bg-white dark:bg-darker py-5 px-4 md:px-6">
          <div className="space-y-4 text-slate-500 dark:text-white border-b border-b-neutral-200 dark:border-b-white/10 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="font-DanaMedium">مبلغ کل</span>
              <div className="flex items-center gap-x-1">
                <span className="font-DanaDemiBold">{cartCoursesSumPrice.toLocaleString()}</span>
                <TomanIcon className="size-6" />
              </div>
            </div>

            {userToken ? (
              <>
                <div className="flex items-center justify-between text-red-500">
                  <span className="font-DanaMedium">تخفیف</span>
                  <div className="flex items-center gap-x-1">
                    <div>
                      <span className="text-sm font-DanaRegular">({offerPercent}%) </span>
                      <span className="font-DanaDemiBold">{((offerPercent / 100) * cartCoursesSumPrice).toLocaleString()}</span>
                    </div>
                    <TomanIcon className="size-6" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-red-500">
                  <span className="font-DanaMedium">تخفیف پلکانی</span>
                  <div className="flex items-center gap-x-1">
                    <div>
                      <span className="text-sm font-DanaRegular">({cartCourses.length * 2}%) </span>
                      <span className="font-DanaDemiBold">{!isValidOfferCode ? (((cartCourses.length * 2) / 100) * cartCoursesSumPrice).toLocaleString() : (((cartCourses.length * 2) / 100) * (offerPercent / 100) * cartCoursesSumPrice).toLocaleString()}</span>
                    </div>
                    <TomanIcon className="size-6" />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="flex items-center justify-between">
              <span className="font-DanaMedium">موجودی کیف پول</span>
              <div className="flex items-center gap-x-1">
                <span className="font-DanaDemiBold">0</span>
                <TomanIcon className="size-6" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-DanaDemiBold xl:text-lg">مجموع:</span>
            <div className="flex items-center gap-x-1">
              <TomanIcon className="size-6" />
              <span className="font-DanaDemiBold text-xl xl:text-2xl flex items-center gap-1">{Math.floor(coursesSumPrice).toLocaleString()}</span>
            </div>
          </div>
          <div>
            {userToken ? (
              <>
                <div className="flex items-center gap-x-1 mb-5">
                  <label className="flex items-center gap-2">
                    <input className="peer hidden" type="checkbox" required checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                    <span className="block w-4 h-4 rounded-sm bg-gray-200 dark:bg-dark peer-checked:bg-secondary cursor-pointer transition-colors duration-100" />
                    <span className="text-sm xl:text-base text-slate-500 dark:text-gray-400 select-none font-DanaRegular">قوانین را مطالعه نموده ام.</span>
                  </label>

                  <Link to="/terms-conditions" className="text-xs xl:text-sm text-sky-500 font-DanaRegular">
                    (مشاهده)
                  </Link>
                </div>
                <Button
                  onClick={() => {
                    fetcher.submit({ cartCourses }, { method: "POST" });
                  }}
                  className={`btn-primary w-full h-12 font-DanaMedium text-base bg-primary hover:bg-primary-hover transition-colors text-white rounded-lg disabled:opacity-50 disabled:cursor-no-drop disabled:hover:bg-primary disabled:hover:opacity-50`}
                  disabled={!acceptedTerms}
                >
                  تکمیل خرید
                </Button>
              </>
            ) : (
              <Link to="/login" className={`btn-primary flex items-center justify-center w-full h-12 font-DanaMedium text-base bg-primary hover:bg-primary-hover transition-colors text-white rounded-lg disabled:opacity-50 disabled:cursor-no-drop disabled:hover:bg-primary disabled:hover:opacity-50`}>
                ورود و ادامه
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* offer */}

      <div className="bg-white dark:bg-darker px-4 md:px-6 py-5 overflow-hidden rounded-xl">
        <div className={`flex items-center justify-between ${isOpenOfferBox ? "mb-5 pb-4 border-b border-b-neutral-200 dark:border-b-white/10" : ""}`}>
          <span className="font-DanaDemiBold text-slate-500 dark:text-gray-400"> کد تخفیف دارید؟ </span>
          <button
            type="button"
            onClick={() => {
              setIsOpenOfferBox((prev) => !prev);
            }}
          >
            <ChevronDownIcon className={`size-6 ${isOpenOfferBox ? "rotate-180" : ""} text-slate-500 dark:text-gray-400`} />
          </button>
        </div>
        {isOpenOfferBox ? (
          <>
            {!isValidOfferCode ? (
              <div className="">
                <div className="relative">
                  <input type="text" className="w-full h-[60px] pr-3.5 pl-32 text-sm bg-gray-100 dark:bg-dark rounded-xl font-DanaRegular outline-none" placeholder="کد تخفیف را وارد کنید" value={offerInputValue} onChange={changeOfferInputHandler} onKeyUp={keyupOfferInputHandler} />
                  <Button className="bg-secondary hover:bg-secondary-hover text-white transition-colors rounded-lg absolute left-2.5 top-0 bottom-0 my-auto font-DanaRegular" onClick={validateOfferCode}>
                    اعمال
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2 bg-sky-50 dark:bg-sky-500/10 text-sky-500 py-2.5 px-3 sm:px-3.5 rounded-xl mt-2.5">
                <CheckCircleIcon className="size-5" />
                <span className="font-DanaRegular">
                  <span /> اعمال شد،{" "}
                  <span
                    className="underline cursor-pointer text-rose-500"
                    onClick={() => {
                      setOfferPercent(0);
                      setOfferInputValue("");
                      setIsValidOfferCode(false);
                      setCoursesSumPrice((cartCoursesSumPrice * (100 - cartCourses.length * 2)) / 100);
                      showToast("موفق", "کد تخفیف با موفقیت حذف شد", "success");
                    }}
                  >
                    {" "}
                    حذف؟{" "}
                  </span>
                </span>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default PaySection;
