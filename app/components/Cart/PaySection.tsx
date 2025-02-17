import { Button } from "@heroui/button";
import { CreditCardIcon, TomanIcon } from "public/svg/svgs";
import React, { use, useEffect, useState } from "react";
import { Link, useFetcher } from "react-router";
import type { courseType } from "~/types/course.type";
import { Checkbox } from "@heroui/react";
import OfferSection from "./OfferSection";

function PaySection({ cartCourses, userToken, offerCode }: { cartCourses: courseType[]; userToken: string | null; offerCode: any | null }) {
  const [cartCoursesSumPrice, setCartCoursesSumPrice] = useState(cartCourses.reduce((prev, curr) => prev + curr.price, 0));
  const cartCoursesSumPriceWithOff = cartCourses.reduce((prev, curr) => prev + ((100 - ((curr?.discount as number) || Number(offerCode?.percent) || 0)) / 100) * curr.price, 0);

  useEffect(() => {
    setCartCoursesSumPrice(cartCourses.reduce((prev, curr) => prev + curr.price, 0));
  }, [cartCourses]);

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  // calculate

  const notFreeCourses = cartCourses.filter((course) => course.price);

  const percent1 = Math.round(100 - (cartCoursesSumPriceWithOff * 100) / cartCoursesSumPrice);

  const step1Price = (percent1 * cartCoursesSumPrice) / 100;

  const step2Price = step1Price < cartCoursesSumPrice && Math.round((notFreeCourses.length * 2 * (step1Price || cartCoursesSumPrice)) / 100) + step1Price <= cartCoursesSumPrice ? Math.round((notFreeCourses.length * 2 * (step1Price || cartCoursesSumPrice)) / 100) : 0;
  const mainPrice = cartCoursesSumPrice - (step1Price + step2Price);

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
                      <span className="text-sm font-DanaRegular">({percent1}%) </span>
                      <span className="font-DanaDemiBold">{step1Price.toLocaleString()}</span>
                    </div>
                    <TomanIcon className="size-6" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-red-500">
                  <span className="font-DanaMedium">تخفیف پلکانی</span>
                  <div className="flex items-center gap-x-1">
                    <div>
                      <span className="text-sm font-DanaRegular">({notFreeCourses.length * 2}%) </span>
                      <span className="font-DanaDemiBold">{step2Price.toLocaleString()}</span>
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
              <span className="font-DanaDemiBold text-xl xl:text-2xl flex items-center gap-1">{mainPrice.toLocaleString()}</span>
              <TomanIcon className="size-6" />
            </div>
          </div>
          <div>
            {userToken ? (
              <>
                <div className="flex items-center gap-x-1 mb-5">
                  <Checkbox color="secondary" onValueChange={setAcceptedTerms} isSelected={acceptedTerms} />
                  <span className="text-sm xl:text-base text-slate-500 dark:text-gray-400 select-none font-DanaRegular">قوانین را مطالعه نموده ام.</span>
                  <Link to="/terms-conditions" className="text-xs xl:text-sm text-sky-500 font-DanaRegular">
                    (مشاهده)
                  </Link>
                </div>
                <Button
                  onPress={() => {
                    if (acceptedTerms) {
                      fetcher.submit({ cartCourses }, { method: "POST" });
                    }
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

      <OfferSection offerCode={offerCode} userToken={userToken} cartCourses={cartCourses} mainPrice={mainPrice} cartCoursesSumPrice={cartCoursesSumPrice} />
    </>
  );
}

export default PaySection;
