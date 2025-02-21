import LinkSectionHeader from "./LinkSectionHeader";
import { Link } from "react-router";

function RoadmapSection() {
  return (
    <section className="container pt-[100px] lg:pt-40">
      <LinkSectionHeader headerTitle="نقشــه راه ها" headerDesc="نقشه های راه برای شروع اصولی یادگیری" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
        <div className="py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden rounded-xl">
          <Link to="/course-cat/frontend/" className="flex flex-col justify-center items-center h-full" title="فرانت اند">
            <svg className="sm:w-12 w-10 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 44.8125H15M33.1875 14.7188L36.8641 18.3866C37.962 19.4812 37.962 21.2558 36.8641 22.3504L33.1875 25.9688M15 14.7188L11.3234 18.3866C10.2255 19.4812 10.2255 21.2558 11.3234 22.3504L15 25.9688M21.9375 27.8438L26.25 12.8438M46.125 12.5625V27.9375C46.125 33.1151 41.9276 37.3125 36.75 37.3125H11.248C6.07144 37.3125 1.875 33.1161 1.875 27.9395V12.5625C1.875 7.38487 6.07237 3.1875 11.25 3.1875H36.75C41.9276 3.1875 46.125 7.38487 46.125 12.5625Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="text-center text-white mt-3 sm:mt-4">
              <h3 className="font-DanaDemiBold sm:text-lg mb-0 sm:mb-1">فرانت اند</h3>
              <span className="inline-block font-DanaMedium text-sm sm:text-base">30 دوره</span>
            </div>
          </Link>
        </div>
        <div className="py-5 bg-gradient-to-r from-[#30C5E4] to-[#28E55D] overflow-hidden rounded-xl">
          <Link to="/course-cat/security" className="flex flex-col justify-center items-center h-full" title="امنیت">
            <svg className="sm:w-12 w-10 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_135_44863)">
                <mask id="mask0_135_44863" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
                  <path d="M48 0H0V48H48V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_135_44863)">
                  <mask id="mask1_135_44863" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
                    <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white" />
                  </mask>
                  <g mask="url(#mask1_135_44863)">
                    <path d="M42.9536 13.0656C42.93 12.5461 42.9167 12.0367 42.9092 11.5333C42.8808 9.61376 41.3707 8.04729 39.454 7.94022C33.5919 7.61276 29.0073 5.66285 25.1349 1.88838C24.4869 1.29438 23.515 1.29438 22.867 1.88838C18.9945 5.66285 14.41 7.61276 8.54786 7.94022C6.63114 8.04729 5.12102 9.61376 5.09252 11.5332C5.08511 12.0367 5.0718 12.5461 5.04817 13.0656C4.83274 24.3778 4.50977 39.8814 23.3253 46.4423C23.4152 46.4737 23.5077 46.4988 23.6011 46.5174L23.602 46.5176C23.8654 46.5702 24.1364 46.5702 24.3998 46.5176C24.4937 46.4988 24.5869 46.4735 24.6774 46.4419C43.4383 39.881 43.1691 24.4314 42.9536 13.0656Z" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} />
                    <path d="M34.5384 24C34.5384 29.8202 29.8203 34.5384 24.0002 34.5384C18.1801 34.5384 13.4619 29.8202 13.4619 24C13.4619 18.1798 18.1801 13.4617 24.0002 13.4617C29.8203 13.4617 34.5384 18.1798 34.5384 24Z" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} />
                    <path d="M28.4274 21.2858L21.885 27.8282" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" />
                    <path d="M19.385 25.328L21.8851 27.8282" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_135_44863">
                  <rect width={48} height={48} fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <div className="text-center text-white mt-3 sm:mt-4">
              <h3 className="font-DanaDemiBold sm:text-lg mb-0 sm:mb-1">امنیت</h3>
              <span className="inline-block font-DanaMedium text-sm sm:text-base">9 دوره</span>
            </div>
          </Link>
        </div>
        <div className="py-5 bg-gradient-to-r from-[#2E9EFF] to-[#9C33F7] overflow-hidden rounded-xl">
          <Link to="/course-cat/python/" className="flex flex-col justify-center items-center h-full" title="پایتون">
            <svg className="sm:w-12 w-10 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_135_44843" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
                <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white" />
              </mask>
              <g mask="url(#mask0_135_44843)">
                <path d="M24 32.9062H40.9687C44.0753 32.9062 46.5937 30.3878 46.5937 27.2813V20.7188C46.5937 17.6122 44.0753 15.0938 40.9687 15.0938H32.9062" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 15.0938H7.03125C3.92466 15.0938 1.40625 17.6122 1.40625 20.7188V27.2813C1.40625 30.3878 3.92466 32.9062 7.03125 32.9062H15.0937" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.0938 15.0938V7.03125C15.0938 3.92466 17.6122 1.40625 20.7187 1.40625H27.2812C30.3878 1.40625 32.9062 3.92466 32.9062 7.03125V24H15.0938V40.9688C15.0938 44.0753 17.6122 46.5938 20.7187 46.5938H27.2812C30.3878 46.5938 32.9062 44.0753 32.9062 40.9688V32.9063" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.7188 7.03125C21.4954 7.03125 22.125 7.66087 22.125 8.4375C22.125 9.21413 21.4954 9.84375 20.7188 9.84375C19.9421 9.84375 19.3125 9.21413 19.3125 8.4375C19.3125 7.66087 19.9421 7.03125 20.7188 7.03125Z" fill="white" />
                <path d="M27.2812 40.9688C26.5046 40.9688 25.875 40.3391 25.875 39.5625C25.875 38.7859 26.5046 38.1562 27.2812 38.1562C28.0579 38.1562 28.6875 38.7859 28.6875 39.5625C28.6875 40.3391 28.0579 40.9688 27.2812 40.9688Z" fill="white" />
              </g>
            </svg>
            <div className="text-center text-white mt-3 sm:mt-4">
              <h3 className="font-DanaDemiBold sm:text-lg mb-0 sm:mb-1">پایتون</h3>
              <span className="inline-block font-DanaMedium text-sm sm:text-base">6 دوره</span>
            </div>
          </Link>
        </div>
        <div className="py-5 bg-gradient-to-r from-[#FF3571] to-[#880175] overflow-hidden rounded-xl">
          <Link to="/course-cat/soft-skills/" className="flex flex-col justify-center items-center h-full" title="مهارت های نرم">
            <svg className="sm:w-12 w-10 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_135_44883)">
                <mask id="mask0_135_44883" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
                  <path d="M0 7.62939e-06H48V48H0V7.62939e-06Z" fill="white" />
                </mask>
                <g mask="url(#mask0_135_44883)">
                  <path d="M46.1146 22.8356L39.389 16.1084C38.7483 15.4685 38.948 14.7845 39.831 14.5856C39.831 14.5856 40.5602 14.4212 41.4586 13.5229C43.3871 11.5953 43.3853 8.46578 41.4586 6.5409C39.5291 4.61237 36.404 4.61237 34.4746 6.5409C33.5763 7.43912 33.4127 8.16756 33.4127 8.16756C33.2139 9.05228 32.5278 9.25018 31.889 8.60856L25.1634 1.88678C24.5236 1.24609 23.4753 1.24609 22.8354 1.88678L16.1108 8.61034C15.4719 9.25196 15.6698 9.93793 16.5528 10.1358C16.5528 10.1358 17.283 10.3003 18.1803 11.1968C20.1062 13.1244 20.1089 16.2521 18.1803 18.1815C16.2528 20.1091 13.1231 20.1073 11.1973 18.1815C10.2999 17.2823 10.1354 16.553 10.1354 16.553C9.93738 15.6692 9.25057 15.4712 8.61082 16.1111L1.88613 22.8365C1.24629 23.4763 1.24629 24.5237 1.88613 25.1627L8.61082 31.888C9.25057 32.5278 9.05182 33.2137 8.16888 33.4126C8.16888 33.4126 7.4396 33.5779 6.54129 34.4753C4.61266 36.4047 4.61266 39.5306 6.54129 41.4583C8.46888 43.3859 11.5958 43.3876 13.5243 41.4583C14.4236 40.56 14.5862 39.8316 14.5862 39.8316C14.785 38.9468 15.471 38.7489 16.1099 39.3915L22.8354 46.1131C23.4753 46.7539 24.5236 46.7539 25.1634 46.1131L31.8899 39.3897C32.5297 38.7498 32.33 38.0621 31.448 37.8651C31.448 37.8651 30.7169 37.7007 29.8195 36.8041C27.8899 34.8747 27.8909 31.7489 29.8195 29.8194C31.7471 27.8918 34.874 27.8891 36.8026 29.8194C37.7009 30.7177 37.8635 31.4479 37.8635 31.4479C38.0632 32.3326 38.7483 32.5314 39.389 31.8916L46.1146 25.1644C46.7535 24.5228 46.7535 23.4754 46.1146 22.8356Z" stroke="white" strokeWidth="2.5" strokeMiterlimit={10} />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_135_44883">
                  <rect width={48} height={48} fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <div className="text-center text-white mt-3 sm:mt-4">
              <h3 className="font-DanaDemiBold sm:text-lg mb-0 sm:mb-1">مهارت های نرم</h3>
              <span className="inline-block font-DanaMedium text-sm sm:text-base">7 دوره</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
