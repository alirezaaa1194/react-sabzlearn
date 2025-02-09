import { ChatBubbleOvalLeftEllipsisFillIcon, ExclamationTriangleIcon, UserMiniIcon } from "public/svg/svgs";
import React, { use } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Editor from "./Editor/Editor";
import { Button } from "@heroui/button";
import QuestionList from "./QuestionList/QuestionList";
import type { courseSessionType } from "~/types/course.type";

function Question({questions, session}:{questions:any, session:courseSessionType}) {
  const userInfoContext = use(AuthContext);
  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-0 lg:mt-8" id="question-section">
      <div className="flex items-center justify-between mb-6 sm:mb-7">
        <div className="flex items-center gap-x-3 relative">
          <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-red-500 rounded-r-sm "></span>
          <ChatBubbleOvalLeftEllipsisFillIcon className="hidden md:inline-block text-red-500 w-10 h-10" />
          <h3 className="font-MorabaBold text-xl md:text-2xl">پرسش و پاسخ</h3>
        </div>
      </div>
      <div className="mb-8 pb-8 border-b border-b-neutral-200 dark:border-b-white/10">
        <h5 className="font-DanaDemiBold mb-3">چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟</h5>
        <div className="dark:text-gray-400 font-DanaRegular">
          برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید، قبل از اینکه سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو خودتون حل کنید. اگه به جواب نرسیدید، می‌تونید از گوگل کمک بگیرید. اگه با خطایی مواجه شدید یا نیاز به نمونه‌ای داشتید، با استفاده از کلمات کلیدی مختلف توی گوگل سرچ کنید و از سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب 99٪ سوالات با این روش زیر 5 دقیقه پیدا میشه)
          <br />
          از پرسیدن سوالات کلی مثل «من مثل شما انجام دادم ولی کار نکرد» یا «کد من مشکل داره و اجرا نمیشه» که جزئیات ندارن، خودداری کنید. وقتی سوال می‌پرسید، لطفاً اون رو با مستندات و به صورت شفاف و واضح بیان کنید تا قابل تحلیل و بررسی باشه. سعی کنید سوالاتتون مفهومی و دقیق باشه تا مکالمه‌ای که دارید خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال کنید، یه بار خودتون اون رو بخونید و مطمئن بشید که سوالتون خوانا و واضحه.
        </div>
        <h5 className="font-DanaDemiBold mb-3 mt-6">چه انتظاراتی از پشتیبانان باید داشته باشم؟</h5>
        <div className="dark:text-gray-400 font-DanaRegular">از مدرسین و پشتیبانان انتظارات منطقی و مرتبط با خدمات دریافتی خود داشته باشید. حل مشکلات خارج از مباحث و پروژه های دوره در حیطه وظایف پشتیبانان/مدرسین نیست. اگر نیاز به مشاوره دارید میتوانید از طریق تیکت ها به واحد مشاوره پیام دهید</div>
      </div>

      <div className="">
        <div className="flex gap-x-3.5 mb-3">
          <div className="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
            <div className="flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-dark rounded-full">
              <UserMiniIcon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-DanaMedium">{userInfoContext?.userInfo?.name}</span>
            <span className="font-DanaRegular text-sm text-gray-700 dark:text-gray-400" id="qa-to" data-newtxt="پرسش جدید">
              پرسش جدید
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-red-500 mb-4">
          <ExclamationTriangleIcon className="size-6 shrink-0 hidden sm:inline-block" />
          <p className="text-sm md:font-DanaMedium">لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید.</p>
        </div>

        <Editor session={session} />
        <QuestionList questions={questions} session={session} />
      </div>
    </div>
  );
}

export default Question;
