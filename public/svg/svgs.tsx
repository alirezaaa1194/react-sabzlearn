import React, { type SVGProps } from "react";

type svgType = {
  className: {};
};

export const LogoIcon = ({ className }: SVGProps<svgType>) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`mx-auto h-11 md:h-12 lg:h-14 shrink-0 ${className}`} viewBox="0 0 1020 769">
    <polygon fill="#006537" points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603" />
    <polygon fill="#006869" points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379" />
    <line fill="#1a3d3d" x1="929.7475" y1="307.461" x2="929.6513" y2="307.6423" />
    <polygon fill="#006869" points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281" />
    <polygon fill="#00524c" points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789" />
    <polygon fill="#004b26" points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504" />
    <polygon fill="#00524c" points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693" />
    <polygon fill="#00322d" points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394" />
    <polygon fill="#1eb35b" points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124" />
  </svg>
);

export const PhoneIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
export const InboxIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
  </svg>
);
export const Squares2x2Icon = ({ className }: SVGProps<svgType>) => (
  <svg id="squares-2x2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
  </svg>
);
export const ChevronDownIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chevron-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
export const ChevronLeftIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chevron-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
export const ChevronRightIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chevron-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
export const MagnifyingGlassIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="magnifying-glass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
export const SunIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);
export const TrophyIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="trophy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
  </svg>
);
export const MoonIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);
export const ShoppingCartIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);
export const TrashIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="trash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);
export const ShoppingBagIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="shopping-bag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);
export const FolderOpenIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="folder-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
  </svg>
);
export const HeartIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);
export const UserIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="user" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
export const PaperAirplaneIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="paper-airplane" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);
export const LoginIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="login-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);
export const LogoutIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="logout-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);
export const BarsIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="bars" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
export const CloseIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
export const AttentionIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="attention" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);
export const MinusMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="minus-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
  </svg>
);
export const PlayIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);
export const ArrowSmallLeftIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-small-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
  </svg>
);
export const HashtagIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="hashtag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
  </svg>
);
export const CalendarIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);
export const ArrowLeftCircleSolidIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left-circle-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
  </svg>
);
export const AppLogoIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="app-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785 430" fill="#2ed573" className={className}>
    <path className="cls-2" d="M591.82 256.81c51.96-18.93 105.61-40.35 153.39-9.19 47.47 30.96-2.85 88.34-40.61 99.44-48.07 14.13-114.83 7.87-161.77-7.78-53.57-17.86-133.33-25-172.62 9.43-11.48 8.02-22.96 16.04-34.44 24.05-21.23 14.83-42.45 36.73-69.85 40.17-21.4 2.69-66.25-9.04-40.95-36.75l86.9-95.19s34.52-38.14 94.05-19.1C443 273.76 484.08 280.15 523 275.86c22.13-2.44 45.3-10.5 68.82-19.07ZM253.26 201.21c-1.2-20.05-7.15-40.87-10.6-59.83-5.99-32.93-36.05-124.97 27.54-119.95 31.18 2.46 42.91 39.69 51.19 64.38 11.32 33.75 19.45 68.68 24.74 103.87 2.14 14.26 4.3 23.54-5.34 34.91-8.35 9.85-28.72 13.04-34.88 21.83 0 0-83.33 119.05-127.38 128.57s-60.71-41.67-19.05-69.05c0 0 51.19-22.62 77.38-51.19 14.26-15.56 17.54-34.2 16.39-53.55Z" />
    <path className="cls-2" d="M91.99 176.42c1.64-11.54 5.24-23.35 7.53-33.38 5.42-23.66 7.18-58.61-23.89-63.56-42.08-6.7-63.94 32.32-71.44 67.81-8.83 41.79-5.43 92.3 27.03 123.62 19.16 18.48 45.63 24.87 71.66 24.04 112.05-3.57 123.16-84.52 123.16-84.52s12.7-88.1-32.54-110.71c-20.42-10.21-29.16 5.06-30.62 23.74-2.73 35.02 13.44 122.43-49.39 98.16-21.68-8.37-24.17-26.42-21.5-45.2Z" />
    <circle className="cls-2" cx="134.51" cy="43.5" r="43.5" />
    <circle className="cls-2" cx="455.51" cy="383.5" r="43.5" />
    <circle className="cls-2" cx="394.78" cy="162.5" r="43.5" />
    <path className="cls-1" d="M419.54 275s70 24 106-68 123-92 123-92" fill="none" stroke="#2ed573" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18px" />
    <path className="cls-1" d="M518.18 222.37c-2.78-.18-6.7-22.65-7.07-24.75-3.37-18.97-2.56-38.96 4.79-56.94 14.43-35.28 52.64-51 86.21-62.47 17.52-5.98 34.11-12.22 49.7-22.54 15.05-9.97 33.4-20.94 39.29-39.1 6.7 22.78 3.28 52.26 1.23 75.45-3.18 35.96-14.86 75.17-45.75 97.62-35.53 25.82-85.31 35.38-128.4 32.72Z" fill="none" stroke="#2ed573" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18px" />
  </svg>
);
export const SortIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="sort" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25.811 17.879" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} className={className}>
    <path d="M.556,16.379V0" transform="translate(4.349)" />
    <path d="M9.809,0,4.9,4.927,0,0" transform="translate(0 11.452)" />
    <path d="M5.5.5H0" transform="translate(15.316 10.415)" />
    <path d="M7.322.5H0" transform="translate(15.316 4.883)" />
    <path d="M3.314.5H0" transform="translate(15.316 15.708)" />
    <path d="M8.684.5H0" transform="translate(15.316 0.072)" />
  </svg>
);
export const ClockIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const StarIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);
export const UsersIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
export const TomanIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="toman" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={4} stroke="currentColor" viewBox="0 0 57.988 55.588" className={className}>
    <g transform="translate(-4013.907 176.406)">
      <path d="M4068.117-146.108s3,8.61,1.066,11.035-4.839,1.921-11.736,1.921-10.552.731-12.355-1.6-2.288-7.952,2.547-9.55,7.877,3.5,7.877,9.231.668,5.874-.732,8.36c-1.858,2.6-10.917,3.915-10.917,3.915" />
      <path d="M4069.56-152.461v3.969" transform="translate(0 -1.945)" />
      <path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)" />
      <path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)" />
      <path d="M4027.592-128.435s5.376,4.632,8.167,3.124a5.918,5.918,0,0,0,3.034-6.158c-.446-4.24-4.144-5.625-6.783-4.418s-4.016,5.866-4.016,5.866-1.857,4.934-6.114,4.934-4.928-2.6-5-4.934-.98-19.76-.98-19.76" />
      <path d="M4069.56-152.461v3.969" transform="translate(-44 -23.945)" />
      <path d="M4017.55-171.009s-3.525,12.094,2.454,15.619c5.623,3.035,12.585-.714,12.585-.714s3.473-2.1,3.436-4.864c-.089-3.883-1.651-12.986-1.651-12.986" />
    </g>
  </svg>
);
export const InstagramIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="instagram" fill="currentColor" viewBox="0 0 1024 1024.008" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M273.92 43.776c-35.243 4.395-64.043 13.056-92.843 27.947A257.28 257.28 0 0 0 46.72 253.44c-3.03 16.17-3.2 29.91-3.2 258.56s.17 242.39 3.2 258.56a257.152 257.152 0 0 0 134.23 181.59c22.23 11.562 42.07 18.645 68.223 24.405l17.92 3.925h489.814l17.92-3.925c79.19-17.45 141.482-64.342 177.322-133.504 11.562-22.23 18.645-42.07 24.405-68.223l3.925-17.92V267.093l-3.925-17.92c-23.04-104.576-97.28-178.944-201.558-201.856-16.213-3.584-18.986-3.626-256.17-3.882-131.883-.17-242.09 0-244.907.34m494.165 89.6A172.8 172.8 0 0 1 891.99 261.974c2.986 12.97 3.157 25.6 3.157 250.027s-.17 237.056-3.158 250.027c-14.85 63.83-61.825 111.83-126.55 129.322-13.653 3.71-13.91 3.71-246.485 4.223-203.18.427-234.752.17-247.98-2.09a165.888 165.888 0 0 1-92.67-47.83 169.173 169.173 0 0 1-44.93-77.568l-4.522-16.298V272.213l4.523-16.298a169.173 169.173 0 0 1 44.928-77.568 165.675 165.675 0 0 1 91.733-47.83c9.984-1.792 58.24-2.176 247.083-1.962l234.667.298 16.298 4.523M727.21 240c-15.53 7.765-23.253 22.016-22.058 40.747a39.552 39.552 0 0 0 19.2 32.34c11.477 7.126 28.885 8.193 40.79 2.604 10.24-4.82 19.285-15.317 22.527-26.24 3.157-10.58 3.157-13.653 0-24.234C780.16 240 751.36 227.968 727.21 240m-243.327 58.752c-27.18 4.267-55.296 14.38-79.275 28.5-55.552 32.684-94.507 92.588-102.443 157.4-2.474 20.095-2.218 34.985.896 56.105 13.996 94.25 86.743 166.528 181.633 180.438 43.18 6.314 86.016-1.11 127.062-22.016 57.3-29.185 99.157-85.377 112.085-150.487 3.5-17.706 3.03-62.89-.81-80.725a211.285 211.285 0 0 0-61.782-111.147 205.78 205.78 0 0 0-101.46-54.953c-16.812-3.883-59.777-5.632-75.905-3.115m63.104 87.723a130.133 130.133 0 0 1 81.024 66.645c8.662 17.536 11.947 30.165 13.185 50.39 3.456 57.642-31.872 108.927-88.235 128.17-14.848 5.077-18.005 5.547-37.547 5.59-25.685.042-36.778-2.518-59.733-13.782-13.653-6.7-18.645-10.368-31.7-23.467-13.1-13.055-16.77-18.047-23.468-31.7-11.392-23.21-13.952-34.133-13.824-59.733.085-19.456.597-22.784 5.632-37.547 15.275-44.715 49.75-75.99 94.933-86.016 14.72-3.285 44.843-2.56 59.734 1.45" />
  </svg>
);
export const GithubIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="github" fill="currentColor" viewBox="0 0 1024 1024.008" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M204.928 2.005c-11.86 3.414-20.14 10.923-26.41 24.064-6.87 14.463-13.313 35.242-17.537 56.703-4.52 22.87-4.137 70.998.727 93.483l3.584 16.683-11.135 16.596a282.027 282.027 0 0 0-43.307 107.605c-2.517 14.764-3.328 27.52-3.328 53.292 0 104.96 27.99 183.467 86.06 241.536 36.948 36.907 79.7 60.5 140.8 77.653 9.77 2.732 18.09 5.335 18.516 5.72.384.425-.94 5.8-2.987 11.988a177.152 177.152 0 0 0-8.534 54.1l-.043 16.47-14.677 2.09c-20.48 2.903-51.37 1.367-65.664-3.2-13.013-4.223-28.928-14.036-41.088-25.385-4.693-4.438-19.285-21.29-32.427-37.462-26.666-32.937-42.752-48.767-59.733-58.836C114.22 647.04 94.464 640 85.46 640c-17.023 0-34.6 12.373-39.977 28.16-8.064 23.68 3.328 46.38 27.818 55.296 13.612 4.992 23.212 13.78 46.636 42.795 41.173 51.03 63.915 70.657 99.285 85.803 22.657 9.686 41.73 13.526 71.767 14.422 15.018.47 32.512.128 38.826-.726l11.52-1.58v40.363c0 46.72 1.152 52.438 12.758 64.043a41.984 41.984 0 0 0 59.82 0c12.97-12.97 12.757-10.965 12.757-121.173 0-107.82-.043-107.222 11.05-129.75 3.243-6.57 9.814-16.47 14.55-21.973 10.88-12.587 13.653-19.243 13.61-32.427a39.68 39.68 0 0 0-11.818-29.738c-8.663-8.662-13.91-10.54-41.644-14.89C343.51 607.828 303.53 592.682 266.07 563.2c-35.073-27.648-57.473-69.333-68.438-127.53-3.243-17.238-3.797-26.07-3.84-61.91-.085-38.528.213-42.965 3.883-56.277a192.128 192.128 0 0 1 39.338-75.99c19.584-22.57 22.4-33.237 14.89-56.917a203.477 203.477 0 0 1-9.556-55.893c0-13.696 2.944-36.395 5.162-40.022 3.583-5.8 55.466 16.94 96.81 42.455 32.256 19.925 32.98 20.053 65.536 12.373 83.2-19.627 164.693-19.712 246.357-.213 11.947 2.858 24.192 5.205 27.264 5.205 8.918 0 17.664-3.883 39.552-17.62 31.53-19.756 72.063-39 90.495-42.88 6.187-1.324 6.272-1.153 9.003 16.127 3.84 24.234 1.152 52.266-7.765 80.47-3.414 10.708-4.267 16.34-3.584 22.954 1.023 9.77 5.716 20.267 11.39 25.387 6.955 6.272 22.4 28.16 29.91 42.326 15.872 29.952 21.333 54.144 21.333 94.89 0 96.427-29.226 164.95-86.87 203.52-32.042 21.462-71.764 34.816-129.15 43.392-30.252 4.523-37.334 7.04-46.294 16.384-7.51 7.85-10.753 16.554-10.753 28.757 0 13.184 2.602 19.2 14.464 33.578 5.29 6.4 11.862 16.256 14.593 21.888C639.957 738.475 640 739.03 640 846.55c0 111.146-.213 109.055 12.757 122.026a41.984 41.984 0 0 0 59.82 0c13.012-13.013 12.756-10.58 12.714-124.5-.085-107.01-.554-114.476-8.533-138.455-2.048-6.185-3.456-11.39-3.114-11.604.34-.213 6.357-1.792 13.397-3.5 37.42-9.172 78.208-26.708 108.373-46.676 23.083-15.232 54.315-46.55 69.632-69.675A321.62 321.62 0 0 0 950.4 462.507c6.997-35.926 7.893-46.208 7.85-92.16 0-40.406-.426-47.02-3.754-61.867a288.768 288.768 0 0 0-41.984-98.944l-11.136-16.597 3.584-16.684c4.864-22.485 5.248-70.613.725-93.483-4.224-21.46-10.666-42.24-17.536-56.704-6.443-13.483-14.507-20.65-27.18-24.15-9.898-2.773-41.557-2.347-56.79.768-30.76 6.272-76.585 25.472-112.767 47.317l-16 9.686-20.693-4.18a618.368 618.368 0 0 0-242.304 0l-21.035 4.266-16.04-9.728C339.583 28.5 292.735 8.788 262.484 2.645 247.85-.3 214.272-.683 204.928 2.005" />
  </svg>
);
export const WhatsappIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="whatsapp" fill="currentColor" viewBox="0 0 1024 1024.0893" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M745.472 613.69c-12.672-6.358-75.008-36.993-86.613-41.26-11.65-4.223-20.097-6.314-28.588 6.4-8.405 12.673-32.725 41.217-40.107 49.665-7.38 8.49-14.805 9.514-27.477 3.2-12.672-6.4-53.547-19.755-101.973-62.934-37.675-33.62-63.147-75.135-70.528-87.85-7.382-12.67-.768-19.54 5.546-25.855 5.718-5.675 12.715-14.806 19.03-22.187 6.357-7.424 8.448-12.715 12.714-21.205 4.224-8.448 2.134-15.83-1.066-22.187-3.2-6.357-28.543-68.78-39.082-94.165-10.325-24.703-20.78-21.333-28.544-21.76-7.38-.34-15.83-.426-24.32-.426-8.448 0-22.187 3.157-33.792 15.872-11.605 12.672-44.373 43.35-44.373 105.77 0 62.38 45.44 122.667 51.753 131.158 6.358 8.448 89.43 136.533 216.62 191.445 30.25 13.055 53.844 20.863 72.276 26.666 30.378 9.685 58.026 8.32 79.83 5.035 24.36-3.626 75.007-30.677 85.588-60.287 10.58-29.61 10.58-54.998 7.38-60.288-3.156-5.29-11.604-8.448-24.32-14.806M514.134 929.55h-.17a421.12 421.12 0 0 1-214.656-58.794l-15.403-9.13-159.616 41.898 42.58-155.648-10.025-15.957A420.693 420.693 0 0 1 92.416 507.49C92.46 274.96 281.686 85.775 514.304 85.775c112.64 0 218.54 43.946 298.155 123.648a419.2 419.2 0 0 1 123.433 298.41c-.128 232.534-189.312 421.718-421.76 421.718m358.955-780.67A504.107 504.107 0 0 0 514.133.056C234.453.057 6.827 227.684 6.7 507.45c0 89.43 23.337 176.725 67.753 253.653l-72.02 262.954 269.012-70.57a506.965 506.965 0 0 0 242.475 61.78h.213c279.638 0 507.307-227.626 507.435-507.434a504.363 504.363 0 0 0-148.48-358.954z" />
  </svg>
);
export const TelegramIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="telegram" fill="currentColor" viewBox="0 0 1024 1027" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M834.25 127.875c-10.75.5-20.875 3.625-29.875 7.125h-.125c-9.125 3.625-52.5 21.875-118.375 49.5C620 212.25 534.5 248.25 449.625 284 280.125 355.375 113.5 425.625 113.5 425.625l2-.75s-11.5 3.75-23.5 12c-6.125 4-12.875 9.5-18.75 18.125s-10.625 21.875-8.875 35.5c2.875 23.125 17.875 37 28.625 44.625 10.875 7.75 21.25 11.375 21.25 11.375h.25l156.25 52.625c7 22.5 47.625 156 57.375 186.75 5.75 18.375 11.375 29.875 18.375 38.625 3.375 4.5 7.375 8.25 12.125 11.25 1.875 1.125 3.875 2 5.875 2.75.625.375 1.25.5 2 .625l-1.625-.375c.5.125.875.5 1.25.625 1.25.375 2.125.5 3.75.75 24.75 7.5 44.625-7.875 44.625-7.875l1.125-.875 92.25-84L662.5 866l3.5 1.5c32.25 14.125 64.875 6.25 82.125-7.625C765.5 845.875 772.25 828 772.25 828l1.125-2.875L892.875 213c3.375-15.125 4.25-29.25.5-43s-13.375-26.625-25-33.5c-11.75-7-23.375-9.125-34.125-8.625zM831 193.5c-.125 2 .25 1.75-.625 5.625v.375L712 805.25c-.5.875-1.375 2.75-3.75 4.625-2.5 2-4.5 3.25-14.875-.875L504.25 664 390 768.125l24-153.25s296.25-276.125 309-288 8.5-14.375 8.5-14.375c.875-14.5-19.25-4.25-19.25-4.25L322.625 549.625 322.5 549l-186.75-62.875V486c-.125 0-.375-.125-.5-.125.125 0 1-.375 1-.375l1-.5 1-.375S305 414.375 474.5 343c84.875-35.75 170.375-71.75 236.125-99.5 65.75-27.625 114.375-47.875 117.125-49 2.625-1 1.375-1 3.25-1z" />
  </svg>
);
export const WarningIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" className={className}>
    <path d="M9.345,33C3.756,33,0,29.078,0,23.239V9.761C0,3.922,3.756,0,9.345,0H23.652C29.243,0,33,3.922,33,9.761V23.239C33,29.078,29.241,33,23.647,33ZM2.476,9.761V23.239c0,4.427,2.7,7.287,6.87,7.287h14.3c4.179,0,6.879-2.86,6.879-7.287V9.761c0-4.425-2.7-7.285-6.874-7.285H9.345C5.172,2.476,2.476,5.336,2.476,9.761ZM15.253,23.1V16.5a1.238,1.238,0,0,1,2.476,0v6.6a1.238,1.238,0,0,1-2.476,0ZM14.84,10.236a1.643,1.643,0,0,1,1.642-1.65H16.5a1.651,1.651,0,1,1-1.659,1.65Z" />
  </svg>
);
export const DangerIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" className={className}>
    <path id="Combined_Shape" d="M9.347,33C3.756,33,0,29.078,0,23.239V9.761C0,3.922,3.756,0,9.347,0H23.652C29.243,0,33,3.922,33,9.761V23.239C33,29.078,29.243,33,23.65,33ZM2.476,9.761V23.239c0,4.427,2.7,7.287,6.871,7.287h14.3c4.177,0,6.876-2.86,6.876-7.287V9.761c0-4.425-2.7-7.285-6.874-7.285H9.347C5.172,2.476,2.476,5.336,2.476,9.761Zm17.1,11.556L16.5,18.234l-3.079,3.079a1.237,1.237,0,1,1-1.749-1.749l3.079-3.079L11.666,13.4a1.237,1.237,0,0,1,1.749-1.749L16.5,14.736l3.079-3.078a1.236,1.236,0,0,1,1.749,1.748l-3.08,3.08,3.083,3.083a1.237,1.237,0,1,1-1.749,1.749Z" />
  </svg>
);
export const SuccessIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" className={className}>
    <path id="Combined_Shape" d="M9.347,33C3.756,33,0,29.078,0,23.239V9.761C0,3.922,3.756,0,9.347,0h14.3C29.243,0,33,3.922,33,9.761V23.239C33,29.078,29.243,33,23.65,33ZM2.475,9.761V23.239c0,4.427,2.7,7.287,6.871,7.287h14.3c4.177,0,6.876-2.86,6.876-7.287V9.761c0-4.425-2.7-7.285-6.874-7.285H9.347C5.172,2.475,2.475,5.336,2.475,9.761ZM13.668,21.29,9.75,17.374A1.237,1.237,0,1,1,11.5,15.625l3.043,3.04L21.5,11.711a1.236,1.236,0,0,1,1.749,1.748l-7.83,7.832a1.237,1.237,0,0,1-1.749,0Z" />
  </svg>
);
export const TriangleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="11.111" height={12} viewBox="0 0 11.111 12" className={className}>
    <path d="M4.24,3.259a2,2,0,0,1,3.52,0l2.647,4.9a2,2,0,0,1-1.76,2.95H3.353a2,2,0,0,1-1.76-2.95Z" transform="translate(0 12) rotate(-90)" />
  </svg>
);
export const AdjustmentsIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="adjustments" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);
export const CheckIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
export const HomeIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);
export const CheckBadgeIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-badge" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);
export const UsersFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="users-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);
export const StarFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="star-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);
export const ClipboardDocumentIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="clipboard-document" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
  </svg>
);
export const ReplyIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="reply" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={24} height={20} viewBox="0 0 24 20" className={className}>
    <path d="M10,7V2.75a.75.75,0,0,0-1.272-.538l-8.5,8.25a.749.749,0,0,0,0,1.076l8.5,8.25A.75.75,0,0,0,10,19.25V15h1.418a12.753,12.753,0,0,1,11.153,6.572l.021.038a.751.751,0,0,0,.658.39.74.74,0,0,0,.186-.023A.75.75,0,0,0,24,21.25,14.267,14.267,0,0,0,10,7Z" transform="translate(0 -2)" />
  </svg>
);
export const LogoTypeIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="logo-type" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 739 344.219" className={className}>
    <g transform="translate(-168 -159)">
      <path d="M4277,469l-35,10-.038,46.04s-.644,12.671-15.155,12.671c-15.7,0-14.92-12.671-14.92-12.671V479.118h-35.858V525.04s1.019,12.876-14.45,12.876-14.7-12.876-14.7-12.876V479.118H4111.02V525.04s.318,13.109-24.273,13.109c-25.855,0-25.813-13.109-25.813-13.109V469.17h-37.015v55.87s-.108,6.226-3.954,9.523-11.431,3.664-11.431,3.664h-84.325l-20.014,20.015V469.17h-36.2V587.985l-19.33,19.33,25.895,25.895,29.638-29.638V572.779h104.34s10.642-.012,19.315-3.575,15.378-10.68,15.378-10.68a34.648,34.648,0,0,0,16.578,11.905c10.88,3.564,14.468,2.334,26.941,2.571,12.614-.157,12.813.615,23.288-2.571a56.489,56.489,0,0,0,18.612-10.392,42.57,42.57,0,0,0,14.609,9.982c8.453,3.186,19.2,2.761,19.2,2.761s9.581.2,17.634-2.761a49.155,49.155,0,0,0,14.577-9.092,42.813,42.813,0,0,0,14.28,9.092c8.253,2.963,9.02,2.828,18.731,2.761s18.2,1.883,34.005-13.452a49.579,49.579,0,0,0,15.2-34.287Z" transform="translate(-3370 -250)" />
      <rect width={36} height={36} transform="translate(498 159)" />
      <rect width={36} height={36} transform="translate(618 347)" />
      <path d="M3841,409.025h-35.98l-.031,114.023s1.207,7.253-7,11.716c-5.884,3.316-16.336,3.525-16.336,3.525l-34.175-.07-20.047,20.031.016-89.078H3691.26L3691.229,588l-19.344,19.313,25.922,25.906,29.625-29.625.016-30.812h65.361s17.6-.51,33.153-15.884c15.486-16,14.91-33.867,14.91-33.867Z" transform="translate(-3367.004 -250.009)" />
      <path d="M3657.909,469.262l-36.659-.106-.031,115.991s-.755,6.012-4.126,9.292-8.788,3.771-8.788,3.771H3579.61s-6.907-.491-10.559-3.771-3.821-9.3-3.821-9.3L3565.5,529H3529l.022,52.672a54.781,54.781,0,0,0,15.336,36.476,49.256,49.256,0,0,0,35.255,14.816h27.845s18.5,1.476,34.513-14.57a53.928,53.928,0,0,0,15.943-35.173Z" transform="translate(-3357.698 -250)" />
      <rect width={36} height={36} transform="translate(208 219)" />
      <g className="fill-[#5f5f5f] dark:fill-white" transform="translate(20.991 638.909)">
        <path d="M483.775-189.183c-.663.751-.707,2.827-.618,24.692l.133,23.941,1.1,1.06c1.988,1.988,8.084,3.4,15.46,3.666,9.674.353,14.489-1.1,18.6-5.477,3.048-3.269,4.02-6.184,4.285-13.031.4-11.4-2.871-17.978-10.16-20.54a25.178,25.178,0,0,0-11.971-.4c-3.49.8-8,3.313-9.365,5.257-.618.839-.663,0-.663-8.79,0-8.879-.088-9.806-.8-10.469C488.59-190.331,484.791-190.287,483.775-189.183Zm26.238,21.291c3.578,1.944,5.3,5.919,5.3,12.1,0,5.168-.928,7.907-3.49,10.425a10.721,10.721,0,0,1-4.285,2.65c-2.871.839-8.834.707-13.3-.265l-3.666-.8v-17.713l1.193-1.679a17.3,17.3,0,0,1,7.333-5.477C502.063-169.614,507.629-169.217,510.014-167.892Z" transform="translate(-187.644 0)" />
        <path d="M1660.079-188.9a4.454,4.454,0,0,0-.221,5.654c1.678,2.12,6.626,1.944,8.172-.265a4.58,4.58,0,0,0-.442-5.389c-.883-.928-1.5-1.1-3.755-1.1S1660.962-189.823,1660.079-188.9Z" transform="translate(-844.083 -0.022)" />
        <path d="M159.55-180.517c-4.2.618-6.847,1.767-9.011,3.931-2.3,2.341-3.092,4.417-3.092,8.26,0,4.771,1.634,8,5.257,10.292,2.915,1.9,4.771,2.474,14.4,4.461,4.682.972,9.188,2.032,9.983,2.385,3.49,1.458,5.257,3.8,5.257,6.891a5.652,5.652,0,0,1-3.534,5.433c-1.9.928-2.518.972-16.432,1.1-16.255.133-15.681,0-15.2,3.4.53,3.445.309,3.4,16.7,3.225,13.208-.177,14.489-.265,17.227-1.148,3.71-1.237,7.023-4.064,8.172-7.068a19.882,19.882,0,0,0,.177-10.425,11.966,11.966,0,0,0-2.164-3.445c-3-3.357-6.8-4.859-17.051-6.758-8.26-1.59-11.4-2.606-13.252-4.329a5.426,5.426,0,0,1,1.06-8.923c1.458-.839,2.429-.883,13.914-1.016,6.8-.044,12.81-.221,13.384-.309.839-.221.972-.53.972-2.429,0-1.634-.221-2.429-.883-3.092-.839-.839-1.414-.883-12.236-.839C166.927-180.87,160.787-180.694,159.55-180.517Z" transform="translate(0 -5.088)" />
        <path d="M801.6-180.372l-1.1.574v18.95c0,14.93.132,19.436.618,21.114a12.488,12.488,0,0,0,7.023,7.421c2.341.928,3.357,1.016,14.8,1.193,14.135.177,14.179.177,14.709-3.225.486-3.357.663-3.313-11.529-3.313-11.485,0-13.914-.353-15.946-2.253-2.164-2.032-2.385-4.02-2.385-22.528v-17.139l-.972-.663A5.964,5.964,0,0,0,801.6-180.372Z" transform="translate(-364.828 -5.1)" />
        <path d="M327.357-157.351c-3.666.883-5.522,1.811-7.863,4.02-4.064,3.8-5.61,8.7-5.257,16.83.353,9.32,2.739,14.091,8.437,17.006,3,1.546,3.092,1.546,8.614,1.546,6.758-.044,9.365-.883,13.031-4.241,2.562-2.341,2.915-2.253,2.915.751,0,2.827,3.18,4.285,5.654,2.562l.972-.663v-33.394l-1.06-.972C349.8-156.732,333.851-158.9,327.357-157.351Zm14.886,6.67c5.036,1.06,4.55.088,4.55,9.63,0,9.365-.044,9.585-3.18,12.545-3.092,3-5.212,3.843-10.071,4.064-3.931.177-4.329.088-6.626-1.1a6.971,6.971,0,0,1-3.755-3.843c-1.148-2.3-1.325-3.136-1.458-7.112-.309-7.6,1.5-11.529,6.317-13.738,1.855-.883,2.915-1.06,6.714-1.06A45.15,45.15,0,0,1,342.244-150.681Z" transform="translate(-93.333 -17.962)" />
        <path d="M960.92-157.131c-9.144,2.385-13.208,9.1-12.678,20.849.4,9.276,3.931,14.356,11.794,16.83,2.385.8,4.329.972,11.794,1.193,10.2.221,10.866.088,11.308-2.827.53-3.18.265-3.269-7.554-3.269-10.734,0-14.356-.883-17.183-4.152-1.325-1.5-2.65-4.506-2.209-4.991.133-.133,6.493-1.016,14.091-1.944,7.6-.972,14.268-1.9,14.8-2.164,1.369-.574,1.678-2.253,1.1-6.449-1.016-7.73-4.594-11.662-11.971-13.252A34.434,34.434,0,0,0,960.92-157.131Zm11.043,5.875a8.952,8.952,0,0,1,6.228,4.506c1.148,2.606,1.1,4.2-.133,4.461-1.281.265-21.2,2.915-22,2.915-.839,0-.265-4.02,1.016-6.8a8.738,8.738,0,0,1,5.742-4.947A21.871,21.871,0,0,1,971.963-151.257Z" transform="translate(-447.283 -17.96)" />
        <path d="M1117.357-157.351c-3.666.883-5.522,1.811-7.863,4.02-4.064,3.8-5.61,8.7-5.256,16.83.353,9.32,2.739,14.091,8.437,17.006,3,1.546,3.092,1.546,8.614,1.546,6.758-.044,9.365-.883,13.031-4.241,2.562-2.341,2.915-2.253,2.915.751,0,2.827,3.18,4.285,5.654,2.562l.972-.663v-33.394l-1.06-.972C1139.8-156.732,1123.851-158.9,1117.357-157.351Zm14.886,6.67c5.036,1.06,4.55.088,4.55,9.63,0,9.365-.044,9.585-3.18,12.545-3.092,3-5.213,3.843-10.071,4.064-3.931.177-4.329.088-6.626-1.1a6.971,6.971,0,0,1-3.755-3.843c-1.148-2.3-1.325-3.136-1.458-7.112-.309-7.6,1.5-11.529,6.317-13.738,1.855-.883,2.915-1.06,6.714-1.06A45.152,45.152,0,0,1,1132.244-150.681Z" transform="translate(-534.371 -17.962)" />
        <path d="M1292.507-157.344a14.828,14.828,0,0,0-9.144,4.2c-2.385,2.164-2.739,2.076-2.739-.839a4.2,4.2,0,0,0-.574-2.164c-.707-.972-3.269-1.413-4.815-.8l-1.237.486V-138c0,21.026-.177,19.966,3.622,19.966,3.49,0,3.445.088,3.445-13.3v-11.662l1.679-2.209c3.269-4.329,7.024-5.963,13.693-5.963,3.931,0,4.505-.353,4.505-2.695C1300.943-157.256,1298.779-158.139,1292.507-157.344Z" transform="translate(-629.17 -18.101)" />
        <path d="M1421.563-157.3a16.329,16.329,0,0,0-7.465,3.843c-2.076,1.855-2.474,1.723-2.474-.883a2.98,2.98,0,0,0-.8-1.944c-.972-.883-4.505-1.016-5.3-.221-.4.4-.53,5.168-.53,18.685,0,20.673-.177,19.657,3.622,19.657,3.49,0,3.446.133,3.446-13.782V-144.1l2.164-2.253c3.269-3.4,6.052-4.638,10.866-4.859,3.49-.133,4.2-.044,5.963.883,3.666,1.9,3.711,2.164,3.975,17.492.221,12.633.265,13.428,1.06,14.047,1.325.928,4.506.8,5.566-.265.839-.839.883-1.458.883-12.943,0-6.582-.221-13.3-.486-14.886-.884-5.61-3.887-9.055-9.011-10.38A28.728,28.728,0,0,0,1421.563-157.3Z" transform="translate(-702.304 -17.963)" />
        <path d="M1777.507-157.344a14.828,14.828,0,0,0-9.144,4.2c-2.385,2.164-2.739,2.076-2.739-.839a4.2,4.2,0,0,0-.574-2.164c-.707-.972-3.269-1.413-4.815-.8l-1.237.486V-138c0,21.026-.177,19.966,3.622,19.966,3.49,0,3.445.088,3.445-13.3v-11.662l1.679-2.209c3.269-4.329,7.024-5.963,13.693-5.963,3.931,0,4.505-.353,4.505-2.695C1785.943-157.256,1783.779-158.139,1777.507-157.344Z" transform="translate(-899.934 -18.101)" />
        <path d="M644.706-155.382a5.028,5.028,0,0,0-.4,2.783l.132,2.12,12.28.221c11.529.221,12.368.265,12.943,1.06,1.767,2.429.265,3.578-12.236,9.674-14.224,6.891-15.681,8.26-15.372,14.533.221,3.71.928,4.991,3.711,6.626,1.723,1.016,2.076,1.016,15.637,1.148,7.642.088,14.356.044,14.886-.088,1.369-.353,2.3-3.313,1.59-4.9l-.53-1.1H664.186c-11.176,0-13.3-.088-14.135-.707a2.8,2.8,0,0,1-.044-4.2c.53-.53,5.831-3.313,11.75-6.184,11.617-5.654,14.312-7.553,15.151-10.513,1.193-4.329-.221-8.437-3.534-10.115-1.9-.928-2.341-.972-15.063-.972C647.533-156,645.1-155.867,644.706-155.382Z" transform="translate(-276.353 -19.003)" />
        <path d="M1662.528-155.47c-.4.4-.53,5.168-.53,18.685,0,20.673-.177,19.657,3.622,19.657,3.578,0,3.446.883,3.446-19.7,0-13.517-.132-18.243-.53-18.641a6.072,6.072,0,0,0-3-.53A6.073,6.073,0,0,0,1662.528-155.47Z" transform="translate(-845.781 -19.003)" />
        <path d="M1566.943-85.315c-1.59.707-1.944,1.414-1.944,4.02s1.414,3.755,4.638,3.755c3.269,0,4.638-1.148,4.638-3.8,0-2.562-.53-3.49-2.253-4.108A6.722,6.722,0,0,0,1566.943-85.315Z" transform="translate(-791.63 -58.15)" />
      </g>
    </g>
  </svg>
);
export const EnvelopeIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="envelope" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
export const LinkIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="link" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);
export const VideoCameraIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="video-camera" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
export const ExclamationCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="exclamation-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);
export const PencilSquareIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="pencil-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);
export const QuestionMarkCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="question-mark-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);
export const ShareIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="share" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
);
export const PlayVideoIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="play-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.428 28.539" className={className}>
    <path id="Path" d="M5.712.039,5.325,0A4.361,4.361,0,0,0,1.213,2.665,18.688,18.688,0,0,0,.589,5.193,52.088,52.088,0,0,0,.005,13.2L0,14.276a59.593,59.593,0,0,0,.53,8.751L.72,24a11.578,11.578,0,0,0,.641,2.186,4.351,4.351,0,0,0,3.988,2.346,12.116,12.116,0,0,0,3.228-.944,55.693,55.693,0,0,0,13.307-8.914l1.006-1.047a9.118,9.118,0,0,0,.705-.8A4.341,4.341,0,0,0,23.5,11.59l-.3-.344-.834-.89A53.43,53.43,0,0,0,8.2.8,12.834,12.834,0,0,0,5.712.039Z" transform="translate(0)" fill="#fff" />
  </svg>
);
export const PaperClipIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="paper-clip" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
  </svg>
);
export const LockIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="lock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
export const PlayCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="play-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);
export const ShieldDoneIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="shield-done" xmlns="http://www.w3.org/2000/svg" width={25} height={30} viewBox="0 0 25 30" className={className}>
    <path d="M12.18,29.952C11.687,29.8.091,26.195.091,16.033c0-2.772-.036-4.8-.061-6.283l0-.086c-.068-3.75-.081-4.53.886-5.5C2.07,3.007,10.829,0,12.5,0S22.928,3.007,24.088,4.167c.967.967.952,1.746.886,5.486l0,.092c-.027,1.483-.062,3.512-.062,6.288,0,10.161-11.595,13.77-12.089,13.919A1.047,1.047,0,0,1,12.5,30,1.059,1.059,0,0,1,12.18,29.952ZM2.459,5.746c-.268.272-.278.74-.221,3.876l0,.1c.025,1.49.061,3.529.061,6.316,0,7.689,8.495,11.09,10.2,11.693,1.7-.606,10.2-4.02,10.2-11.693,0-2.888.04-5.011.065-6.416.056-3.134.045-3.6-.239-3.886-.906-.756-8.776-3.52-10.025-3.52S3.369,4.986,2.459,5.746Zm8.217,12.38L7.889,15.336a1.106,1.106,0,0,1,1.565-1.564l2,2.008,4.963-4.963a1.1,1.1,0,0,1,1.561,1.564L12.24,18.126a1.1,1.1,0,0,1-1.563,0Z" fill="#fff" />
  </svg>
);
export const ArrowDownTrayIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-down-tray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
export const CheckCircleSolidIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-circle-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);
export const CalendarDaysIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="calendar-days" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);
export const TagIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="tag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);
export const EyeIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="eye" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
export const ChatBubbleLeftRightIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chat-bubble-left-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);
export const PowerIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="power" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
  </svg>
);
export const ArrowRightOnRectangleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-right-on-rectangle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);
export const ChevronLeftMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chevron-left-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
  </svg>
);
export const PlayOutlineIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="play-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);
export const ArrowLeftIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);
export const StarMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="star-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
  </svg>
);
export const ArrowLeftCircleMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left-circle-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <g clipPath="url(#clip0_9_2121)">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0_9_2121">
        <path d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const AcademicCapIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="academic-cap" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);
export const InformationCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="information-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);
export const BriefcaseIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="briefcase" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);
export const ChatBubbleBottomCenterTextIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chat-bubble-bottom-center-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);
export const LockClosedIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="lock-closed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
export const UserGroupMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="user-group-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
  </svg>
);
export const UserMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="user-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
  </svg>
);
export const DocumentTextFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="document-text-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
  </svg>
);
export const AcademicCapFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="academic-cap-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
  </svg>
);
export const ChatBubbleLeftRightFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chat-bubble-left-right-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
  </svg>
);
export const ArrowUturnLeftIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-uturn-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
  </svg>
);
export const CheckCircleMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-circle-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);
export const CheckMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);
export const AcademicCapMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="academic-cap-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
  </svg>
);
export const ArrowsUpDownIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrows-up-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  </svg>
);
export const FunnelIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="funnel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
  </svg>
);
export const XCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="x-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const CheckCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const BookmarkIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="bookmark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
);
export const BanknotesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="banknotes" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
);
export const WalletIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="wallet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
);
export const ReceiptPercentIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="receipt-percent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);
export const GiftIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="gift" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);
export const DocumentTextIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="document-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);
export const ArrowDownTrayMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-down-tray-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon" className={className}>
    <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
    <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
  </svg>
);
export const ArrowLeftCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
export const ChatBubbleOvalLeftEllipsisFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chat-bubble-oval-left-ellipsis-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
  </svg>
);
export const ArrowUpTrayIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-up-tray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);
export const RefreshIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="refresh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.2" stroke="currentColor" className={className}>
    <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12C2 17.52 6.48 22 12 22" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
  </svg>
);
export const LinkedinIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="linkedin-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_1882_13331)">
      <path d="M19.9951 20L20.0001 19.9991V12.6641C20.0001 9.07581 19.2276 6.31165 15.0326 6.31165C13.0159 6.31165 11.6626 7.41831 11.1101 8.46748H11.0517V6.64665H7.07422V19.9991H11.2159V13.3875C11.2159 11.6466 11.5459 9.96331 13.7017 9.96331C15.8259 9.96331 15.8576 11.95 15.8576 13.4991V20H19.9951Z" fill="currentColor" />
      <path d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z" fill="currentColor" />
      <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1882_13331">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const TelegramIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="telegram-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_1882_13325)">
      <path d="M7.84765 12.6509L7.51682 17.3042C7.99015 17.3042 8.19515 17.1009 8.44098 16.8567L10.6601 14.7359L15.2585 18.1034C16.1018 18.5734 16.696 18.3259 16.9235 17.3276L19.9418 3.18422L19.9426 3.18339C20.2101 1.93672 19.4918 1.44922 18.6701 1.75505L0.928482 8.54755C-0.282352 9.01755 -0.264018 9.69255 0.722648 9.99839L5.25848 11.4092L15.7943 4.81672C16.2901 4.48839 16.741 4.67005 16.3701 4.99839L7.84765 12.6509Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1882_13325">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const GithubIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="github-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_1882_13354)">
      <path d="M9.99875 0.20813C4.4775 0.20813 0 4.70313 0 10.2481C0 14.6831 2.865 18.4456 6.84 19.7744C7.34 19.8669 7.5225 19.5569 7.5225 19.2906C7.5225 19.0519 7.51375 18.4206 7.50875 17.5831C4.7275 18.1894 4.14 16.2369 4.14 16.2369C3.68625 15.0769 3.03 14.7681 3.03 14.7681C2.12125 14.1456 3.0975 14.1581 3.0975 14.1581C4.10125 14.2294 4.62875 15.1931 4.62875 15.1931C5.52125 16.7269 6.97 16.2844 7.54 16.0269C7.63 15.3781 7.88875 14.9356 8.175 14.6844C5.955 14.4306 3.62 13.5694 3.62 9.72313C3.62 8.62688 4.01 7.73063 4.65 7.02813C4.54625 6.77438 4.20375 5.75313 4.7475 4.37188C4.7475 4.37188 5.5875 4.10188 7.4975 5.40063C8.295 5.17813 9.15 5.06688 10.0013 5.06313C10.85 5.06813 11.7062 5.17813 12.505 5.40188C14.4137 4.10313 15.2525 4.37313 15.2525 4.37313C15.7975 5.75563 15.455 6.77563 15.3525 7.02938C15.9937 7.73188 16.38 8.62813 16.38 9.72438C16.38 13.5806 14.0425 14.4294 11.815 14.6781C12.1737 14.9881 12.4937 15.6006 12.4937 16.5369C12.4937 17.8794 12.4812 18.9619 12.4812 19.2906C12.4812 19.5594 12.6613 19.8719 13.1687 19.7731C17.1375 18.4431 20 14.6819 20 10.2481C20 4.70313 15.5225 0.20813 9.99875 0.20813Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1882_13354">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const InstagramIconIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="instagram-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_1882_13362)">
      <path d="M3.95833 20H16.0417C18.2242 20 20 18.2242 20 16.0417V3.95833C20 1.77583 18.2242 0 16.0417 0H3.95833C1.77583 0 0 1.77583 0 3.95833V16.0417C0 18.2242 1.77583 20 3.95833 20ZM1.25 3.95833C1.25 2.465 2.465 1.25 3.95833 1.25H16.0417C17.535 1.25 18.75 2.465 18.75 3.95833V16.0417C18.75 17.535 17.535 18.75 16.0417 18.75H3.95833C2.465 18.75 1.25 17.535 1.25 16.0417V3.95833Z" fill="currentColor" />
      <path d="M9.99994 15.1084C12.8166 15.1084 15.1083 12.8167 15.1083 10.0001C15.1083 7.18339 12.8166 4.89172 9.99994 4.89172C7.18327 4.89172 4.8916 7.18339 4.8916 10.0001C4.8916 12.8167 7.18327 15.1084 9.99994 15.1084ZM9.99994 6.14172C12.1274 6.14172 13.8583 7.87256 13.8583 10.0001C13.8583 12.1276 12.1274 13.8584 9.99994 13.8584C7.87244 13.8584 6.1416 12.1276 6.1416 10.0001C6.1416 7.87256 7.87244 6.14172 9.99994 6.14172Z" fill="currentColor" />
      <path d="M15.2984 6.13506C16.1201 6.13506 16.7392 5.51839 16.7392 4.70089C16.7392 3.84839 16.0876 3.26672 15.2992 3.26672C14.4776 3.26672 13.8584 3.88339 13.8584 4.70089C13.8584 5.55172 14.5067 6.13506 15.2984 6.13506ZM15.4459 4.56339C15.7092 4.79589 15.1084 5.07839 15.1084 4.70172C15.1084 4.47672 15.4142 4.53506 15.4459 4.56339Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1882_13362">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const BookOpenIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="book-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);
export const BookOpenFillIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="book-open-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
  </svg>
);
export const ArrowPathRoundedSquareMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-path-rounded-square-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z" clipRule="evenodd" />
  </svg>
);
export const CreditCardIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="credit-card" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);
export const TicketIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="ticket" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
  </svg>
);
export const RocketLaunchIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="rocket-launch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
export const CurrencyDollarIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="currency-dollar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const BellIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);
export const EnvelopeOpenIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="envelope-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
  </svg>
);
export const PlusCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="plus-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const SparklesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="sparkles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
  </svg>
);
export const BellAlertIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="bell-alert" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
  </svg>
);
export const ArrowLeftMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
  </svg>
);
export const LockClosedMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="lock-closed-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
  </svg>
);
export const Bars3BottomRightIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="bars-3-bottom-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
  </svg>
);
export const XCircleSolidIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="x-circle-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
  </svg>
);
export const InformationCircleSolidIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="information-circle-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
  </svg>
);
export const BookOpenServicesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="book-open-services" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);
export const ChatBubbleLeftRightServicesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chat-bubble-left-right-services" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);
export const ClipboardDocumentCheckServicesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="clipboard-document-check-services" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
  </svg>
);
export const ChartBarServicesIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chart-bar-services" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
export const InformationCircleNotificationIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="information-circle-notification" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);
export const XCircleNotificationIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="x-circle-notification" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
export const CheckCircleNotificationIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="check-circle-notification" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
export const Bars4Icon = ({ className }: SVGProps<svgType>) => (
  <svg id="bars-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>
);
export const ExclamationTriangleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="exclamation-triangle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);
export const XCircleMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="x-circle-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
  </svg>
);
export const ArrowLeftOnRectangleMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-left-on-rectangle-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clipRule="evenodd" />
  </svg>
);
export const UserCircleIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
export const DeviceTabletIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="device-tablet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);
export const PlayCircleSolidIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="play-circle-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
  </svg>
);
export const ChevronDownMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="chevron-down-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);
export const ArrowUpLeftMiniIcon = ({ className }: SVGProps<svgType>) => (
  <svg id="arrow-up-left-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
  </svg>
);
export const ComputerIcon = ({ className }: SVGProps<svgType>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
  </svg>
);
