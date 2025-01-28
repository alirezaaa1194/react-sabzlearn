import React from "react";
import LinkSectionHeader from "./LinkSectionHeader";
import { BookOpenServicesIcon, ChartBarServicesIcon, ChatBubbleLeftRightServicesIcon, ClipboardDocumentCheckServicesIcon } from "public/svg/svgs";

function HelpSection() {
  return (
    <section className="container pt-[100px] lg:pt-40">
      <LinkSectionHeader headerTitle="مــا چه کمکی میتونیم بهت بکنیم" headerDesc="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره" />
      <div className="grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7">
        <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker rounded-xl">
          <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-sky-50 dark:bg-sky-600/20 rounded-full">
            <BookOpenServicesIcon className="size-[52px] text-sky-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2" />
          </div>
          <div className="text-center lg:text-right">
            <h4 className="lg:text-lg font-DanaDemiBold">تضمین کاملترین محتوا</h4>
            <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400 font-DanaRegular">بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker rounded-xl">
          <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-amber-50 dark:bg-amber-400/20  rounded-full">
            <ChatBubbleLeftRightServicesIcon className="size-[52px] text-amber-400 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2" />
          </div>
          <div className="text-center lg:text-right">
            <h4 className="lg:text-lg font-DanaDemiBold">پشتیبانی دائمی</h4>
            <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400 font-DanaRegular">هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker rounded-xl">
          <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-green-50 dark:bg-green-500/20 rounded-full">
            <ChartBarServicesIcon className="size-[52px] text-green-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2" />
          </div>
          <div className="text-center lg:text-right">
            <h4 className="lg:text-lg font-DanaDemiBold">پروژه محور در راستای بازار کار</h4>
            <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400 font-DanaRegular">کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker rounded-xl">
          <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-red-50 dark:bg-red-500/20 rounded-full">
            <ClipboardDocumentCheckServicesIcon className="size-[52px] text-red-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2" />
          </div>
          <div className="text-center lg:text-right">
            <h4 className="lg:text-lg font-DanaDemiBold">سراغ حرفه ای ها رفتیم</h4>
            <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400 font-DanaRegular">به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
