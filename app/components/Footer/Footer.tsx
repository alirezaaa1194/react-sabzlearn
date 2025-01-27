import { EnvelopeIcon, InstagramFooterIcon, LinkedinIcon, PhoneIcon, SecondLogoIcon, TelegramFooterIcon, TelegramIcon } from "public/svg/svgs";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-25 sm:mt-40 bg-white dark:bg-darker py-8 md:pt-16 md:pb-10">
      <div className="container flex flex-col">
        {/* footer top section */}
        <div className="flex flex-col pb-5 border-b border-b-neutral-200 dark:border-b-dark">
          <div className="flex items-center justify-between">
            <Link to="/">
              <SecondLogoIcon className="h-10 w-54 sm:h-12 lg:h-13" />
            </Link>

            <div className="flex items-center gap-x-2 sm:gap-x-3">
              <a href="" className="">
                <LinkedinIcon className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500 dark:hover:text-sky-500" />
              </a>
              <a href="" className="">
                <InstagramFooterIcon className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500 dark:hover:text-sky-500" />
              </a>
              <a href="" className="">
                <TelegramFooterIcon className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500 dark:hover:text-sky-500" />
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4  gap-x-12 mt-10 sm:mt-8">
            <a href="tel:02191030926" className="font-DanaMedium flex items-center gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
              <PhoneIcon className="size-5 sm:size-6" />
              02191030926
            </a>
            <a href="mailto:info@sabzlearn.ir" className="font-DanaMedium flex items-center gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
              <EnvelopeIcon className="size-5 sm:size-6" />
              info@sabzlearn.ir
            </a>
            <a href="https://t.me/sabzlearn_support" className="font-DanaMedium flex items-center gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
              <TelegramIcon className="size-5 sm:size-6" />
              sabzlearn_support@
            </a>
          </div>
        </div>
        {/* footer middle section */}
        <div className="flex items-center justify-between flex-wrap gap-5 pt-5">
          <div className="flex flex-col md:max-w-[400px]">
            <h3 className="inline-block sm:text-2xl font-DanaDemiBold mb-3 sm:mb-4">درباره سبزلرن</h3>
            <p className="max-w-100 text-gray-700 dark:text-gray-400 font-DanaMedium">شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
          </div>
          <div className="flex gap-x-6 sm:gap-x-7">
            <div className="flex flex-col">
              <span className="inline-block sm:text-2xl font-DanaDemiBold mb-3 sm:mb-4">دوره های پرطرفدار</span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 font-DanaRegular">
                <Link to="/">آموزش پایتون</Link>
                <Link to="/">آموزش Html</Link>
                <Link to="/">آموزش Css</Link>
                <Link to="/">پروژه های خلاقانه با Html و Css</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="inline-block sm:text-2xl font-DanaDemiBold mb-3 sm:mb-4">دسترسی سریع</span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 font-DanaRegular">
                <Link to="/">قوانین و مقررات</Link>
                <Link to="/">ارسال تیکت</Link>
                <Link to="/">همه دوره ها</Link>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div>
            <img src="public/images/enamad.png" alt="" />
          </div>
        </div>
        {/* footer bottom section */}
        <div className="flex items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10 dark:text-neutral-300 font-DanaRegular">
          <span>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</span>
          <span>ساخته شده با ❤️ در سبزلرن</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
