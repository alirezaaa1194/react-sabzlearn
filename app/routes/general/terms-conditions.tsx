import React from "react";
import "../../styles/terms_conditions.css";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "شرایط و قوانین سبزلرن - سبز لرن" }];
};

function termsConditions() {
  return (
    <main className="container">
      <section className="flex flex-wrap lg:flex-nowrap items-start gap-3.5 sm:gap-5 mt-7">
        {/* Content */}
        <section className="w-full space-y-5">
          <div className="p-5 dark:border border-gray-700 shadow-light dark:shadow-none bg-white dark:bg-dark rounded-xl">
            <div className="pb-6 mb-5 border-b border-b-gray-200">
              <h2 className="text-zinc-700 dark:text-white font-MorabaMedium text-2xl lg:text-3xl">شرایط و قوانین سبزلرن</h2>
            </div>
            <div>
              {/* Course Full Description */}
              <div className="relative overflow-hidden">
                <div className="px-2 pb-5 pt-2 course-content text-zinc-700 dark:text-white font-DanaLight text-lg lg:text-xl leading-7 lg:leading-9 [&>h1]:font-DanaDemiBold terms-content">
                  <h3 className="font-DanaMedium text-4xl">شرایط و قوانین استفاده از سرویس‌ها و خدمات سبز لرن</h3>
                  <p>&nbsp;</p>
                  <p>کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و برنامه‌‏های کاربردی آکادمی سبز لرن با دقت ملاحظه فرمایید.ورود کاربران به وب‏‌سایت آکادمی سبز لرن هنگام استفاده از پروفایل شخصی، طرح‏‌های تشویقی، ویدئوهای رسانه تصویری آکادمی سبز لرن و سایر خدمات ارائه شده توسط آکادمی سبز لرن به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از سرویس‌‏ها و خدمات آکادمی سبز لرن است. توجه داشته باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین آکادمی سبز لرن از سوی کاربر است.&nbsp;لازم به ذکر است شرایط و قوانین مندرج، جایگزین کلیه توافق‏‌های قبلی محسوب می‏‌شود.</p>
                  <h4 className="wp-block-heading">&nbsp;</h4>
                  <h1 className="wp-block-heading">شرایط محروم کردن کاربر از سرویس</h1>
                  <p>سبزلرن در برخی شرایطی که خارج از عرف و شرع و منطق نیست. کاربر خود را از دادن سرویس محروم میکند و این مورد شامل دوره های نقدی نیز میباشد و درصورتی که موارد ذکر شده توسط کاربر انجام و تخطی از تعهد صورت گیرد. سبزلرن بلافاصله سرویس او را تعلیق و هزینه آن کاربر را نیز بلوکه میکند</p>
                  <p>از آنجایی که دوره های خریداری شده توسط هر اکانت مختص همان شخص است:</p>
                  <ul>
                    <li>&nbsp;کاربر متعهد میشود که دوره خریداری شده توسط خودش را به دیگران به اشتراک نگذارد</li>
                    <li>کاربر متعهد میشود که اکانت خود را در اختیار بقیه قرار ندهد</li>
                    <li>کاربر متعهد میشود که دوره خریداری شده توسط خود را برای اهداف مختلف به فروش نگذارد</li>
                    <li>کاربر تعهد میدهد که دوره را فقط بصورت تکی برای خودش خریداری کند و با دو یا چند نفر اقدام به خرید نکند</li>
                    <li>کاربر تعهد میدهد که اکانت خود را تحت هیچ شرایطی به فروش نرساند و توجیه است که دوره های خریداری شده مختص خودش بوده و نمیتواند بعد از استفاده یا بدون استفاده به افراد دیگری بفروشد و یا رایگان دهد</li>
                  </ul>
                  <p>&nbsp;</p>
                  <h1>شرایط و قوانین مشاهده دوره های نقدی سبزلرن</h1>
                  <p>به علت مشکلات کپی رایت از نظر فرهنگی/قانونی در ایران که باعث پابلیک/پخش شدن دوره های مدرسین میشود. مجموعه سبزلرن قوانین جدیدی را برای مشاهده دوره های جدید نقدی خود وضع کرده که جلوی دانلود ویدیوهارا میگیرد و کاربر را موظف میکند که بصورت آنلاین ویدیو هارا مشاهده کند. چرا که بحث پابلیک/پخش شدن دوره ها تا به الان خسارات بسیار زیادی را به مجموعه وارد کرده و همچنین باعث دلسردی مدرسین اکادمی سبزلرن شده است که این خود معضلیست در راستای تولید محتوای با کیفیت. چرا که وقتی تولید کننده میبیند که محتوای تولید شده اش توسط دیگر افراد سودجو به رایگان دانلود میشود. دلسرد شده و باعث ممناعت وی در راستای ارائه تجربیات ارزشمندش میشود و ارائه این تجربیات ارزشمند دقیقا چیزیست که شما مخاطب عزیز مارا بخاطر آن برگزیده اید. از طرفی دیگر خیلی از مخاطبین اعتراض میکردند که چرا دوره ای که ما بابتش هزینه کرده ایم توسط فلان افراد سودجو دارد رایگان پخش میشود و این پایمال کردن حقوق کاربر است</p>
                  <p>&nbsp;</p>
                  <p>فلذا مجموعه سبزلرن از یک پلیر آنلاین مبتنی بر یادگیری ماشین استفاده میکند تا بتواند جلوی پخش غیرقانونی محتوا را بگیرد و این سیستم درصورتی که متوجه شود کاربر عملکردی در راستای دانلود داشته. او را مسدود میکند و اگر کاربری مسدود شد تا ۳ بار میتواند از مسدودی دربیاید و درصورتی که بصورت مکرر مسدود شود. مجموعه این کاربر را کاربر پر خطر در نظر گرفته و سرویس دهی به او را مورد تعلیق قرار میدهد. در صورتی که شما توسط این سیستم بلاک شده اید میتوانید از طریق اکانت کاربری &gt; تیکت های پشتیبانی. اقدام به ثبت درخواست آزاد سازی دسترسی خود کنید</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>از آنجایی که پروسه مشاهده دوره ها بصورت آنلاین و همچنین بر روی سرور های ایران است پیشنهاد میکنیم که:</strong>
                  </p>
                  <ul>
                    <li>بدون VPN ویدیو هارا مشاهده کنید</li>
                    <li>اگر با اینترنت مخابرات/شاتل/های وب مشکل دارید لطفا از اینترنت سیمکارت استفاده کنید</li>
                    <li>از افزونه های تغییر تم در سبزلرن استفاده نکنید. چون این افزونه ها رنگ واترمارک را تغییر میدهند و همین باعث بلاک شدن شما میشود</li>
                    <li>از افزونه های دانلود منیجر استفاده نکنید. چرا که این افزونه ها تلاش برای دانلود ویدیو میکنند و باعث بلاک شدن شما میشود</li>
                  </ul>
                  <p>تمام ویدیوهای سبزلرن در ماه های آتی بصورت نیم بها محاسبه میشود و همچنین این ویدیوها در چند کیفیت مختلف قابل مشاهده است</p>
                  <h1 className="wp-block-heading has-large-font-size">شرایط عودت وجه به دانشجو</h1>
                  <p>از آنجایی که سبزلرن یک اکادمی خصوصی در زمینه آموزش برنامه نویسی و شبکه و امنیت است. تلاش میکند تا با مدرسین خود. طبق یک قرارداد رسمی و امضا شده بین طرفین. دوره های خود را بر روی این پلتفرم منتشر کند! مدرسینی که در سبزلرن مشغول فعالیت هستند. افرادی با تجربه و باران دیده به حساب می آیند. چرا که سبزلرن با مدرسینی همکاری میکند که حداقل ۲ سال تجربه مفید و تجربه تدریس قبلی را داشته باشند. لذا اگر مدرسی بر خلاف قرارداد طرفین پیش رود و برای دوره خود پشتیبانی ارائه ندهد. سبزلرن موظف است که در اولین فرصت. مدرس دوره را تغییر دهد و اگر قرار باشد پروسه تغییر مدرس دوره کمی طول بکشد. سبزلرن موظف است که کمک پشتیبان هایی که در آن زمینه تخصص دارند را استخدام کند تا دانشجو در پروسه یادگیری. دچار اختلال نشود ! و از سمت و سویی دیگر، سبزلرن حداقل ۱۰ الی&nbsp; ۳۰ درصد محتوای دوره های خود را جهت ارزیابی بهتر رایگان میکند تا دانشجو بتواند با ارزیابی بهتر در دوره مورد نظر ثبت نام کند. اگر چنانچه دانشجو. پس از یک هفته و یا ۲ ماه و…. با دلایلی همچون</p>
                  <ul>
                    <li>من به این پول نیاز دارم و مشکل مالی دارم</li>
                    <li>من در فلانجا قرار شد به عنوان کار اموز پذیرفته شوم و آنها قرار است به من مهارت جدیدی بیاموزند</li>
                    <li>من از این دوره خوشم نمی آید و میخواهم پولم را پس بگیرم</li>
                    <li>من تغییر حوزه داده ام و نیازی به این آموزش ندارم</li>
                    <li>و… از این قبیل</li>
                  </ul>
                  <p>مراجعه کند. مجموعه سبزلرن موظف نیست که مبلغ را به دانشجو عودت دهد. چرا که از قبل از طریق بخش نظرات و رایگان کردن بخش قابل توجهی از دوره. بستری برای برسی بهتر را فراهم کرده است و مسئولیت تغییر شرایط کاربر، طبق عرف به عهده خودش میباشد</p>
                  <h1 className="wp-block-heading">&nbsp;</h1>
                  <h1 className="wp-block-heading has-large-font-size">سبزلرن موظف است در شرایطی هزینه دانشجو را عودت دهد که…</h1>
                  <ul>
                    <li>دوره هیچ پشتیبانی را نداشته باشد و سبزلرن اقدامی برای احیای پشتیبانی نکند!</li>
                    <li>محتوای دوره بروز نباشد و سبزلرن اقدامی برای بروزرسانی و بهبود دوره انجام ندهد</li>
                    <li>مدرس به وعده های داده شده از نظر محتوا و کیفت ویدیو عمل نکند‌.</li>
                    <li>دوره تاخیر بیش از حد داشته باشد و مدرس دائم بهانه های متفاوت برای نرسیدن اپدیت ها بیاورد</li>
                  </ul>
                  <p className="has-text-color" style={{ color: "#f60d0d" }}>
                    <span style={{ color: "#ff6600" }}>&nbsp;و در صورت بودن موارد ذکر شده. سبزلرن موظف است که ۱۰۰ درصد مبلغ را به کیف پول و یا حساب بانکی کاربر با ۵ الی ۱۰ درصد خسارت بیشتر عودت دهد!(یعنی علاوه بر هزینه کل. درصد مذکور به عنوان خسارت به کاربر پرداخت میشود)</span>
                  </p>
                  <p>
                    <strong>نکته: فلسفه پرداخت خسارت از جانب سبزلرن، مبنای دلجویی و خلق ارزش داشته و ربطی به تورم ندارد، ما از کاربر ریال میگیریم و ریال پس میدهیم، کاهش یا افزایش ارزش پول ملی در حیطه اختیارات و مسئولیت های این پلتفرم نیست.</strong>
                  </p>
                  <p>درصورتی که دانشجو شرایط استثنایی تری را نسبت به موارد ذکر شده داراست، میتواند از طریق پنل کاربری &gt; ارسال تیکت پشتیبانی به بخش مالی. مشکل خود را مطرح نماید!</p>
                  <p>توجه داشته باشید که سبزلرن برای برسی بهتر شرایط و ارتقای کیفیت خدمات در پروسه عودت وجه. در شرایط مختلف با مخاطب تماس تلفنی برقرار میکند</p>
                  <h1>&nbsp;</h1>
                  <h1 className="has-large-font-size">
                    <strong>قوانین پاسخ گویی مدرس به دانشجو</strong>
                  </h1>
                  <ul>
                    <li>مدرس موظف است که در بازه ۱ تا ۴۸ ساعت پاسخ مخاطب را در صورتی که عذر موجهی نداشته باشد ارائه دهد!</li>
                    <li>درصورتی که تعداد دانشجو های یک دوره بالاتر رود. مجموعه سبزلرن موظف است که کمک پشتیبان های مختلفی را به دوره اضافه کند تا دانشجو در پروسه یادگیری دچار مشکل نشود</li>
                    <li>مدرس موظف نیست که حتما در لحظه ای که مخاطب انتظار دارد پاسخگو باشد</li>
                    <li>مدرس موظف به پاسخگویی به سوالات نا مرتبط دوره ندارد</li>
                    <li>اگر مدرس بدون داشتن عذری. تا ۴۸ ساعت پاسخ دانشجو را ارائه ندهد. دانشجو میتواند از بخش ارسال تیکت پشتیبانی این مشکل را با مدیریت درمیان بگذارد تا در اسرع وقت به این مورد رسیدگی شود</li>
                    <li>مدرس اجازه پاسخگویی به سوالات دانشجوهارا در بخش هایی مثل اینستاگرام و پیوی تلگرام و واتساپ ندارد و کاربر فقط فقط از طریق وب سایت و بخش های هماهنگ شده مدیریت با مدرس میتواند پشتیبانی ارائه دهد. فلذا مخاطب نمیتواند از این بابت که چرا مدرس به سوالات من در دایرکت اینستاگرام پاسخ نمیدهد گلایه کند. چون سبزلرن به دایرکت و پیوی مدرس نمیتواند نظارتی داشته باشد و این بخش خارج از تعهدات پلتفرم سبزلرن است</li>
                  </ul>
                  <h1>
                    <strong>قوه قهریه</strong>
                  </h1>
                  <p>&nbsp;</p>
                  <p>
                    تمامی شرایط و قوانین مندرج، در شرایط عادی قابل اجرا است و در صورت بروز هرگونه از موارد قوه قهریه، آکادمی سبز لرن هیچ گونه مسئولیتی ندارد.
                    <br />
                    آکادمی سبز لرن خود را ملزم به رعایت حریم شخصی کاربران می‌داند، لطفا در صورت مشاهده هرگونه تخلف، مراتب را از طریق کانال‏‌های ارتباطی ذکر شده با ما در میان بگذارید.
                  </p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط و قوانین عمومی</strong>
                  </h1>
                  <p>توجه داشته باشید کلیه اصول و رویه‏‌های آکادمی سبز لرن منطبق با قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های آکادمی سبز لرن تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط تعریف مشتری یا کاربر</strong>
                  </h1>
                  <p>
                    مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم ثبت‌نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات آکادمی سبز لرن اقدام کند.
                    <br />
                    همچنین از آنجا که آکادمی سبز لرن یک وب‌سایت آموزش آنلاین است، طبق قانون تجارت الکترونیک مشتری یا مصرف کننده هر شخصی است که به منظوری جز تجارت یا شغل حرفه‌ای به خرید کالا یا خدمات اقدام می‌کند.
                  </p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط ارتباطات الکترونیکی</strong>
                  </h1>
                  <p>
                    هنگامی که شما از سرویس‌‏ها و خدمات آکادمی سبز لرن استفاده می‏‌کنید، سفارش اینترنتی خود را ثبت یا خرید می‏‌کنید و یا به آکادمی سبز لرن ایمیل می‏‌زنید، این ارتباطات به صورت الکترونیکی انجام می‏‌شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که آکادمی سبز لرن به صورت الکترونیکی (از طریق پست الکترونیکی، سرویس پیام کوتاه و سایر سرویس‌های الکترونیکی) به درخواست شما پاسخ دهد.
                    <br />
                    همچنین آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات و پاسخ‌های شرکت از طریق آنها صورت می‌گیرد.
                    <br />
                    جهت اطلاع‌رسانی رویدادها، خدمات و سرویس‌های ویژه یا پروموشن‌ها، امکان دارد آکادمی سبز لرن برای اعضای وب سایت ایمیل یا پیامک ارسال نماید. در صورتی که کاربران تمایل به دریافت اینگونه ایمیل و پیامک‌ها نداشته باشند، می‌توانند عضویت دریافت خبرنامه آکادمی سبز لرن را در پروفایل خود لغو کنند.
                  </p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط سیاست‏‌های رعایت حریم شخصی</strong>
                  </h1>
                  <p>آکادمی سبز لرن به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند، احترام گذاشته و از آن محافظت می‏‌کند.</p>
                  <p>آکادمی سبز لرن متعهد می‏‌شود در حد توان از حریم شخصی شما دفاع کند و در این راستا، تکنولوژی مورد نیاز برای هرچه مطمئن‏‌تر و امن‏‌تر شدن استفاده شما از سایت را، توسعه دهد. در واقع با استفاده از سایت آکادمی سبز لرن ، شما رضایت خود را از این سیاست نشان می‏‌دهید. همه مطالب در دسترس از طریق هر یک از خدمات آکادمی سبز لرن ، مانند متن، گرافیک، آرم، آیکون دکمه، تصاویر، ویدئوهای تصویری، موارد قابل دانلود و کپی، داده‌ها و کلیه محتوای تولید شده توسط آکادمی سبز لرن جزئی از اموال آکادمی سبز لرن محسوب می‏‌شود و حق استفاده و نشر تمامی مطالب موجود و در دسترس در انحصار آکادمی سبز لرن است و هرگونه استفاده بدون کسب مجوز کتبی، حق پیگرد قانونی را برای آکادمی سبز لرن محفوظ می‏‌دارد. علاوه بر این، اسکریپت‌ها، و اسامی خدمات قابل ارائه از طریق هر یک از خدمات ایجاد شده توسط آکادمی سبز لرن و علائم تجاری ثبت شده نیز در انحصار آکادمی سبز لرن است و هر گونه استفاده با مقاصد تجاری پیگرد قانونی دارد.</p>
                  <p>کاربران مجاز به بهره‌‏برداری و استفاده از لیست محصولات، مشخصات فنی، قیمت و هر گونه استفاده از مشتقات وب‏‌سایت آکادمی سبز لرن و یا هر یک از خدمات و یا مطالب، دانلود یا کپی کردن اطلاعات با مقاصد تجاری، هر گونه استفاده از داده کاوی، ربات، یا روش‌‏های مشابه مانند جمع آوری داده‌‏ها و ابزارهای استخراج نیستند و کلیه این حقوق به صراحت برای آکادمی سبز لرن محفوظ است.</p>
                  <p>در صورت استفاده از هر یک از خدمات آکادمی سبز لرن ، کاربران مسئول حفظ محرمانه بودن حساب و رمز عبور خود هستند و تمامی مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز ورود انجام می‏‌پذیرد به عهده کاربران است.</p>
                  <p>تنها مرجع رسمی مورد تایید ما برای ارتباط با شما، پایگاه رسمی این سایت یعنی https://sabzlearn.ir/ است. ما با هیچ روش دیگری جز ارسال نامه از طرف آدرس‏‌های رسمی و تایید شده در سایت، با شما تماس نمی‌‏گیریم. وب سایت آکادمی سبز لرن هیچگونه سایت اینترنتی با آدرسی غیر از https://sabzlearn.ir/ و همچنین، هیچ گونه وبلاگ و شناسه در برنامه‏‌های گفتگوی اینترنتی همچون Yahoo Messenger یا MSN Messenger و غیره ندارد و هیچ ‏گاه با این روش‏‌ها با شما تماس نمی‏‌گیرد. کاربران جهت برقراری ارتباط، تنها می‏‌توانند از آدرس‌‏های ذکر شده در بخش ارتباط با ما استفاده کنند.</p>
                  <p>شرایط ثبت، پردازش و ارسال سفارش</p>
                  <p>اگر شما در دوره های دانلودی سبزلرن ثبت نام کرده اید(رایگان/نقدی) به محض به پایان رساندن پروسه پرداخت. دسترسی از محصول برای شما آزاد میشود و میتوانید اقدام به مشاهده نمایید</p>
                  <ul>
                    <li>کاربران باید هنگام سفارش کالای مورد نظر خود، فرم سفارش را با اطلاعات صحیح و به طور کامل تکمیل کنند. بدیهی است درصورت ورود اطلاعات ناقص یا نادرست، سفارش کاربر قابل پیگیری و تحویل نخواهد بود. بنابراین درج آدرس، ایمیل و شماره تماس‌های همراه و ثابت توسط مشتری، به منزله مورد تایید بودن صحت آنها است و در صورتی که این موارد به صورت صحیح یا کامل درج نشده باشد،</li>
                  </ul>
                  <p>آکادمی سبز لرن جهت اطمینان از صحت و قطعیت ثبت سفارش می‌تواند از مشتری، اطلاعات تکمیلی و بیشتری درخواست کند.همچنین، مشتریان می‌توانند نام، آدرس و تلفن شخص دیگری را برای تحویل گرفتن سفارش وارد کنند و اگر مبلغ سفارش از پیش پرداخت شده باشد، تحویل گیرنده سفارش هنگام دریافت کالا باید کارت شناسایی همراه داشته باشد. – اطلاعات کاربری هر مشتری شامل نام و نام خانوادگی باید با اطلاعات مدارک شناسایی مطابقت داشته باشد و در صورت عدم تطابق، فروشگاه‌‌های اینترنتی مجاز به ارائه خدمات به این گروه از مشتریان نخواهد بود. لذا خریداران محترم می بایست با ارائه تصویر کارت ملی خود و خرید از طریق کارت بانکی متعلق به شخص خریدار که با هویت سفارش دهنده در تطابق می باشد، اقدام به ثبت سفارش نمایند. لازم به ذکر است که این امر به منظور جلوگیری از سوء استفاده‌های احتمالی و مواردی نظیر جلوگیری از خرید با کارت‌های سرقت شده و موارد مشابه در نظر گرفته شده است. – با توجه به ثبت سیستمی سفارش، به هیچ عنوان امکان صدور فاکتور مجدد یا تغییر مشخصات آن از جمله تغییر فاکتوری که به نام شخص حقیقی صادر شده، به نام شخص حقوقی وجود ندارد. بنابراین لازم است مشتریان هنگام ثبت سفارش، نسبت به این مساله دقت لازم را داشته باشند و اگر نیاز دارند که فاکتور به نام حقوقی برای آنها صادر شود، هنگام ثبت سفارش خود، با انتخاب گزینه ” تکمیل اطلاعات حقوقی ” و وارد کردن مشخصات سازمان موردنظر، برای خرید سازمانی و دریافت فاکتور رسمی اقدام کنند. همچنین آدرسی که خریدار به عنوان آدرس تحویل‌گیرنده ثبت یا انتخاب می‌کند، در فاکتور درج خواهد شد و لازم است درخواست کنندگان فاکتور به نام شخص حقوقی هنگام ثبت سفارش به این نکته توجه کافی داشته باشند، چرا که تغییر آدرس درج شده روی فاکتور پس از پردازش و تایید سفارش، به هیچ عنوان امکان‌پذیر نخواهد بود. – امکان پرداخت در محل برای سفارش‌هایی که از طریق باربری ارسال می‌شوند یا مبلغ آنها بیشتر از سی میلیون ریال است، وجود ندارد و لازم است پیش از ارسال، مبلغ اینگونه سفارش‌ها از طریق پرداخت کارت به کارت یا پرداخت اینترنتی تسویه شود. – از آنجا که آکادمی سبز لرن یک وب‌سایت آموزش آنلاین است، سفارش یک کالا به تعداد بالا، مغایر با هدف مصرف خریدار است، در صورت ثبت این مورد و یا سفارشاتی که با تعداد اقلام بالایی همراه هستند، لازم است پیش از ارسال، سفارش مشتریان ابتدا توسط آکادمی سبز لرن بررسی و در صورت تایید، پردازش گردد. در این موارد پرداخت وجه و تسویه، قبل از ارسال کالا الزامی است؛ درغیر اینصورت سفارشات با هماهنگی مشتری کنسل شده و در صورت واریز وجه، مبلغ پرداخت شده طی 24 الی 48 ساعت کاری به حساب مشتری&nbsp;عودت داده خواهد شد. – تحویل سفارش در اماکن عمومی همچون کافه، کافی نت، رستوران، هتل و مانند آن امکان‌پذیر نیست و لازم است آدرس تحویل، دقیق و قابل استناد باشد – در صورت خرید اعتباری (استفاده از کد تخفیف یا ووچر) پس از نهایی شدن سبد، از نظر قانونی امکان اعمال تغییر در سبد خرید، و تغییر مبلغ فاکتور به دلایل انصراف از خرید، حذف یا تغییر کالا یا تعداد کالا وجود ندارد و اگر مشتری درخواست هرگونه تغییری را داشته باشد، ووچر یا کد تخفیف باطل خواهد شد و امکان برگرداندن مبلغ آن وجود ندارد. – در رابطه با سرویس تحویل اکسپرس فروشگاه اینترنتی آکادمی سبز لرن ، سفارش درب اصلی ساختمان (منتهی به خیابان) تحویل داده می‌شود. – لازم به ذکر است افزودن کالا به سبد خرید به معنی رزرو کالا نیست و هیچ گونه حقی را برای مشتریان ایجاد نمی‌کند. همچنین تا پیش از ثبت نهایی، هرگونه تغییر از جمله تغییر در موجودی کالا یا قیمت، روی کالای افزوده شده به سبد خرید اعمال خواهد شد.</p>
                  <p>بنابراین به مشتریانی که تمایل و تصمیم به خرید قطعی دارند، به‌ویژه درباره کالاهای ارائه شده تحت عنوان شگفت‌انگیز که دارای محدودیت تعداد هستند، توصیه می‌شود در اسرع وقت سفارش خود را نهایی کنند تا با اتمام موجودی یا تغییر قیمتی کالاها روبرو نشوند. شایان ذکر است سفارش تنها زمانی نهایی می‌شود که کاربران کد سبد خرید (dkc) &nbsp;سفارش خود را دریافت کنند و بدیهی است که آکادمی سبز لرن هیچ‌گونه مسوولیتی نسبت به کالاهایی که در سبد خرید رها شده است، ندارد.</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>نظرات کاربران</strong>
                  </h1>
                  <p>هدف از ایجاد بخش نظرات در آکادمی سبز لرن ، اشتراک‌گذاری تجربه‌ی خرید و کاربری محصولاتی است که به فروش می‌رسد. بدیهی است بخش نظرات آکادمی سبز لرن با دیگر سایت‌ها و شبکه‌های اجتماعی متفاوت است. در این بخش، هر کاربر مجاز است در چهارچوب شرایط و قوانین سایت، نظرات خود را به اشتراک بگذارد و پس از بررسی کارشناسان تایید، نظرش را روی سایت مشاهده کند. بدیهی است که اگر قوانین سایت در نظرات کاربری رعایت نشود، تایید نمی‌شوند و در نتیجه در سایت به نمایش درنمی‌آیند. آکادمی سبز لرن در قبال درستی یا نادرستی نظرات منتشرشده در این قسمت، هیچ‌گونه مسئولیتی ندارد. نمایش نظرات کاربران در سایت به‌هیچ‌وجه به معنی تایید فنی آکادمی سبز لرن درباره‌ی محتویات نظر نیست؛ لذا از کاربران محترم تقاضا می‌شود، نظرات را اصل و پایه‌ی انتخاب و تصمیم‌گیری خود قرار ندهند.</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط و قوانین درج نظر در بخش نظرات کاربران</strong>
                  </h1>
                  <p>۱. فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای خالی (Space) بیش از حد معمول، کشیدن حروف یا کلمات، استفاده‌ی مکرر از یک حرف یا کلمه، شکلک و اموجی در متن خودداری کنید.</p>
                  <p>۲. برای نظر یا نقد و بررسی خود عنوانی متناسب با متن انتخاب کنید. یک عنوان خوب کاربران را برای خواندن نظر شما ترغیب خواهد کرد.</p>
                  <p>۳. نقد کاربران باید شامل قوت‌ها و ضعف‌های محصول در استفاده‌ی عملی و تجربه‌ی شخصی باشد و مزایا و معایب به‌صورت خلاصه و تیتروار در محل تعیین‌شده درج شود. لازم است تا حد ممکن از مبالغه و بزرگ‌نمایی مزایا یا معایب محصول خودداری کنید.</p>
                  <p>۴. نقد مناسب، نقدی است که فقط معایب یا فقط مزایا را در نظر نگیرد؛ بلکه به‌طور واقع‌بینانه معایب و مزایای هر محصول را در کنار هم بررسی کند.</p>
                  <p>۵. با توجه به تفاوت در سطح محصولات مختلف و تفاوت عمده در قیمت‌های آن‌ها، لازم است نقد و بررسی هر محصول با توجه به قیمت آن صورت گیرد؛ نه به‌صورت مطلق.</p>
                  <p>۶. جهت احترام‌گذاشتن به وقت بازدیدکنندگان سایت، لازم است هنگام نوشتن نقد، مطالب غیرضروری را حذف کرده و فقط مطالب ضروری و مفید را در نقدتان لحاظ کنید.</p>
                  <p>۷. با توجه به ساختار بخش نظرات، از سوال‌کردن یا درخواست راهنمایی در این بخش خودداری کرده و سوال یا درخواست راهنمایی خود را در بخش پرسش و پاسخ مطرح کنید.</p>
                  <p>۸. کاربران ارسال‌کننده‌ی نظر موظف‌اند از ادبیات محترمانه استفاده کرده و از توهین به دیگر کاربران یا سایر افراد پرهیز کنند. بدیهی است هرگونه توهین به فرد یا افراد و استفاده از کلمات نامناسب، باعث تاییدنشدن نظر کاربر می‌شود.</p>
                  <p>۹. قسمت نظرات سایت، با تالارهای گفت‌وگو (فروم) متفاوت است؛ لذا برای حفظ ساختار، مباحث خارج از چهارچوبی که حالت بحث و گفت‌وگو دارد، تایید نخواهد شد.</p>
                  <p>۱۰. تمام کاربران حق دارند نظرات خود را به شرط رعایت قوانین، در سایت منتشر کنند؛ لذا حتی اگر نظری را به دور از واقعیت، جانب‌دارانه یا اشتباه یافتید، نباید نظر دهنده را مخاطب قرار دهید یا از وی انتقاد کنید. هر کاربر تنها می‌تواند نظر خود را عنوان کرده و قضاوت را به خوانندگان نظرات واگذار کند.</p>
                  <p>۱۱. در نظرات خود، از بزرگ‌نمایی یا اغراق درباره‌ی قوت‌ها یا ضعف‌های محصول خودداری کنید. بدیهی است تا حد ممکن هرگونه نظر مبالغه‌آمیز یا به دور از واقعیت تایید نخواهد شد.</p>
                  <p>۱۲. با توجه به مسئولیت سایت در قبال لینک‌های موجود در آن، نباید لینک سایت‌های دیگر را در نظرات خود ثبت کنید. دقت داشته باشید تا جای ممکن از هرگونه لینک‌دادن (فرستادن) دیگر کاربران به سایت‌های دیگر و درج ایمیل یا نام کاربری شبکه‌های اجتماعی خودداری کنید.</p>
                  <p>۱۳. تنها نظراتی تایید خواهند شد که مرتبط با محصول موردنظر باشند؛ لذا بحث‌های متفرقه و غیرمرتبط با محصول را مطرح نکنید.</p>
                  <p>۱۴. کاربران می‌توانند نقد خود به هر بخش از آکادمی سبز لرن را در قسمت مربوط اعلام کنند؛ لذا هیچ‌گونه نقدی را درباره‌ی سایت یا خدمات آن در قسمت نظرات ننویسید.</p>
                  <p>۱۵. توجه داشته باشید، مسائلی را که از آن اطمینان ندارید، به‌هیچ ‌وجه در نظرات ثبت نکنید؛ همچنین از باز نشر شایعات یا اطلاعات غیرمطمئن درباره‌ی محصولات جدا خودداری کنید.</p>
                  <p>۱۶. بهتر است مطالبی در این بخش ثبت شود که برای بازدیدکنندگان سایت مفید باشد؛ لذا از بیان هرگونه مطالب شخصی، غیرمرتبط یا غیرضروری در این بخش پرهیز کنید.</p>
                  <p>۱۷. لازم است نظرات خود را به صورت نگارشی ثبت کرده و از کوتاه‌کردن کلمات یا استفاده از ادبیات محاوره تا جای ممکن خودداری کنید. استفاده از ادبیات نوشتاری که قابلیت نمایش در سایت را داشته باشد، لازمه‌ی تایید نظرات کاربران است.</p>
                  <p>شرایط ارسال پرسش یا پاسخ</p>
                  <p>– بهتر است پرسش و پاسخ کوتاه و مختصر باشد؛ زبان و رسم‌الخط فارسی و اسلوب نگارش هم در آن رعایت شده باشد. – از پرسش و پاسخ درباره‌ی آدرس سایر فروشگاه‌های فیزیکی یا اینترنتی و استفاده از لینک خودداری کنید. – پرسش خودتان را فقط یک بار ایجاد کنید و از ایجاد مکرر سوال مورد نظر جهت بدست آوردن پاسخ در اسرع وقت. خودداری کنید – لطفا از استفاده هرگونه کلمات رکیک در بخش پرسش و پاسخ خود داری نمایید</p>
                  <p>توجه داشته باشید که نظر یا پرسش و پاسخ فقط باید در رابطه با کالا باشد، بنابراین برای پیگیری یا سوال درباره سفارش یا استفاده از خدمات پس از فروش با امور مشتریان آکادمی سبز لرن تماس بگیرید یا از طریق داشبورد کاربری &gt; بخش&nbsp;“تیکت های پشتیبانی” با انتخاب موضوع پیگیری سفارش یا خدمات پس از فروش، سوال یا درخواست خود را مطرح کنید. برای ارسال سایر درخواست‌ها یا پیشنهادها، انتقاد یا شکایت های خود نیز از داشبورد کاربری &gt; بخش&nbsp;“تیکت های پشتیبانی” و دپارتمان مربوط به پیشنهادات و انتقادات&nbsp;استفاده کنید.</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>محتوا</strong>
                  </h1>
                  <p>
                    آکادمی سبز لرن نهایت تلاش و دقت را در راستای ارائه تمامی سرویس‌‏های خود می‏‌کند و به منظور تولید محتوا از منابع و مراجع استفاده می‏‌کند.
                    <br />
                    وب ‏‌سایت آکادمی سبز لرن هیچ گونه مسوولیتی را در رابطه با حذف شدن صفحه‏‌های سایت خود و یا لینک‏‌های مرده نمی‌‏پذیرد. سروﻳس‌‏های سایت آن‏گونه که هست ارائه می‏‌شود و سایت آکادمی سبز لرن تحت هیچ شرایطی مسوولیت تاخیر یا عدم کارکرد سایت را که می‌تواند ناشى از عوامل طبیعى، نیروى انسانی، مشکلات اینترنتى، خرابی تجهیزات کامپیوترى، مخابراتى و غیره باشد بر عهده ندارد.
                    <br />© کلیه محتویات سایت آکادمی سبز لرن شامل قانون حق تکثیر شده و به سایت آکادمی سبز لرن تعلق دارد.
                  </p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>سیاست قیمت گذاری</strong>
                  </h1>
                  <p>سیاست قیمت‌‏گذاری در آکادمی سبز لرن مبتنی بر اصول مشتری مداری و احترام به حقوق مصرف کننده است. قیمت‏‌های ارائه شده برای کالاها در آکادمی سبز لرن قیمت‏‌های کارشناسی شده است که غالباً توسط واحد فنی سبزلرن و یا مدرس&nbsp;آن محصول به صورت مصوب تعیین شده است و سایر کالاها بر اساس مدل و مشخصات و همچنین کالاهای مشابه در بازار تعیین قیمت می‌‏شوند.</p>
                  <p>در مواردی بسیار نادر و در صورت وجود نوسان‌‏هایی در بازار و یا اشتباه در قیمت‌‏گذاری، اگر سفارشی قابل تحویل نباشد، آکادمی سبز لرن موظف است در اسرع وقت این موضوع را به فرد سفارش‌ ‏دهنده اطلاع دهد و سفارش را لغو نماید.</p>
                  <p>لازم به ذکر است در صورتی که کالایی پس ثبت سفارش شامل کاهش قیمت شود، سفارش به روز رسانی و قیمت جدید اعمال می‏‌شود. قیمت کلیه محصولات با احتساب مالیات بر ارزش افزوده است و مشتری مبلغ جداگانه‌‏ای بابت مالیات و عوارض ارزش افزوده پرداخت نمی‏‌کند و هزینه‏‌های بسته‌بندی، ارسال و بیمه حمل کالا بسته به شرایط سفارش که در فرم سبد خرید اطلاع‌ ‏رسانی می‌‏شود، ممکن است جداگانه محاسبه شود.</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>طرح تشویقی پیشنهاد شگفت‌انگیز</strong>
                  </h1>
                  <p>طرح تشویقی شگفت‌انگیز به منظور ایجاد تجربه یک خرید خوب برای کاربران در نظر گرفته شده و در این ایام تعدادی از محصولات با تخفیف‏‌هایی بسیار ویژه‏‌تر نسبت به فروش‌‏های ویژه درج می‏‌شود که این کالاها تنها برای ساعت‏‌هایی امکان سفارش گذاری دارند. توجه داشته باشید که اگر شما برای مثال در اول ماه. یک محصولی را خریداری کرده اید و سفارش شما کامل شده باشد و در اواسط همان&nbsp; ماه و یا درتاریخی دیگر. بر روی آن محصول تخفیفی اعمال شود. امکان اینکه هزینه شمارا نیز با آن تخفیف هموار کنیم و بخشی از مبلغ را عودت دهیم وجود ندارد !</p>
                  <h1>&nbsp;</h1>
                  <h1>
                    <strong>شرایط نمایندگی</strong>
                  </h1>
                  <p>
                    آکادمی سبز لرن در هیچ نقطه‏‌ای از کشور نمایندگی فروش و یا خدمات پس از فروش ندارد و کلیه سرویس‌‏ها و تراکنش‏‌های مالی از طریق دفتر مرکزی پردازش می‏‌شود. لطفاً در صورت مشاهده هر گونه تخلفی از این دست، مراتب را جهت پیگرد قانونی به روابط عمومی آکادمی سبز لرن اطلاع دهید.
                    <br />و برای خرید تنها باید به وب سایت آکادمی سبز لرن مراجعه و سفارش خود را ثبت کرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default termsConditions;
