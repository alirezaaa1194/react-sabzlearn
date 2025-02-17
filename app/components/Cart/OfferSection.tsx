import { CheckCircleIcon, ChevronDownIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { showToast } from "../Notification/Notification";
import type { courseType } from "~/types/course.type";
import { useFetcher } from "react-router";
import { Button } from "@heroui/button";
import { apiRequest } from "~/Services/Axios/config";

function OfferSection({ cartCourses, userToken, offerCode, mainPrice, cartCoursesSumPrice }: { cartCourses: courseType[]; userToken: string | null; offerCode: any | null; mainPrice: number; cartCoursesSumPrice: number }) {
  const [isOpenOfferBox, setIsOpenOfferBox] = useState<boolean>(offerCode && userToken ? true : false);

  const [isValidOfferCode, setIsValidOfferCode] = useState<boolean>(offerCode && userToken ? true : false);
  const [offerInputValue, setOfferInputValue] = useState<string>(offerCode || "");

  const changeOfferInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferInputValue(e.target.value);
  };

  const keyupOfferInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      validateOfferCode();
    }
  };

  const validateOfferCode = async () => {
    if (offerInputValue) {
      if (mainPrice) {
        try {
          const responses = await Promise.allSettled(
            cartCourses.map((cartCourse) =>
              apiRequest.post(
                `/offs/${offerInputValue}`,
                { course: cartCourse._id },
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
              )
            )
          );

          const successOffs = responses.find((res) => res.status === "fulfilled");

          if (successOffs) {
            fetcher.submit(
              {
                offerCode: JSON.stringify({
                  course: successOffs.value.data.course,
                  percent: successOffs.value.data.percent,
                }),
              },
              {
                method: "POST",
                action: "/saveOfferCode",
              }
            );
            showToast("موفق", "کد تخفیف با موفقیت اعمال شد", "success");
            setIsValidOfferCode(true);
          } else {
            showToast("خطا", "کد تخفیف معتبر نیست", "error");
            setIsValidOfferCode(false);
          }
        } catch (res) {}
      } else {
        showToast("خطا", "جمع مبالغ سبد خرید نباید 0 باشد", "error");
      }
    } else {
      showToast("خطا", "لطفا کد تخفیف را وارد کنید", "error");
    }
  };
  const fetcher = useFetcher();

  useEffect(() => {
    if (!cartCoursesSumPrice) {
      setIsValidOfferCode(false);
      setOfferInputValue("");

      fetcher.submit(null, { method: "POST", action: "/removOfferCode" });
    }
  }, [cartCoursesSumPrice]);

  return (
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
              {userToken ? (
                <div className="relative">
                  <input type="text" className="w-full h-[60px] pr-3.5 pl-32 text-sm bg-gray-100 dark:bg-dark rounded-xl font-DanaRegular outline-none" placeholder="کد تخفیف را وارد کنید" value={offerInputValue} onChange={changeOfferInputHandler} onKeyUp={keyupOfferInputHandler} />
                  <Button className="bg-secondary hover:bg-secondary-hover text-white transition-colors rounded-lg absolute left-2.5 top-0 bottom-0 my-auto font-DanaRegular" onPress={validateOfferCode}>
                    اعمال
                  </Button>
                </div>
              ) : (
                <span className="font-DanaRegular">برای وارد کردن کد تخفیف اول وارد شدید</span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-x-2 bg-sky-50 dark:bg-sky-500/10 text-sky-500 py-2.5 px-3 sm:px-3.5 rounded-xl mt-2.5">
              <CheckCircleIcon className="size-5" />
              <span className="font-DanaRegular">
                <span /> اعمال شد،{" "}
                <span
                  className="underline cursor-pointer text-rose-500"
                  onClick={() => {
                    setOfferInputValue("");
                    setIsValidOfferCode(false);
                    showToast("موفق", "کد تخفیف با موفقیت حذف شد", "success");

                    fetcher.submit(null, { method: "POST", action: "/removOfferCode" });
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
  );
}

export default OfferSection;
