import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { getUserTickets } from "~/utils/utils";
import SectionHeader from "../SectionHeader";

function UserActivityDetails({ userTickets }: any) {
  const userInfos = use(AuthContext);
  return (
    <div>
      <section className="flex items-center justify-between gap-y-6 flex-wrap font-DanaDemiBold bg-white dark:bg-darker py-5 px-5 sm:px-8 rounded">
        <div className="flex items-center gap-x-4 w-64 col-span-3">
          <svg className="size-10 sm:size-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.0349 8.91504H40.184C40.0567 8.91504 39.9346 8.96561 39.8446 9.05563C39.7546 9.14564 39.704 9.26774 39.704 9.39504C39.704 9.52234 39.7546 9.64443 39.8446 9.73445C39.9346 9.82447 40.0567 9.87504 40.184 9.87504H42.0343C42.9111 9.87504 43.6234 10.531 43.6234 11.3381V34.5925C43.6234 35.3989 42.9104 36.0555 42.0343 36.0555H5.96514C5.08834 36.0555 4.37602 35.3995 4.37602 34.5925V11.3381C4.37602 10.5317 5.08898 9.87504 5.96514 9.87504H8.3229C8.4502 9.87504 8.57229 9.82447 8.66231 9.73445C8.75232 9.64443 8.8029 9.52234 8.8029 9.39504C8.8029 9.26774 8.75232 9.14564 8.66231 9.05563C8.57229 8.96561 8.4502 8.91504 8.3229 8.91504H5.96514C4.5597 8.91504 3.41602 10.0018 3.41602 11.3381V34.5925C3.41602 35.9288 4.5597 37.0155 5.96514 37.0155H42.0343C43.4397 37.0155 44.5834 35.9288 44.5834 34.5925V11.3381C44.5834 10.0018 43.4403 8.91504 42.0349 8.91504ZM33.2618 41.4501H29.7904V39.42C29.7904 39.2927 29.7398 39.1706 29.6498 39.0806C29.5598 38.9906 29.4377 38.94 29.3104 38.94C29.1831 38.94 29.061 38.9906 28.971 39.0806C28.881 39.1706 28.8304 39.2927 28.8304 39.42V41.9301C28.8304 42.195 29.0455 42.4101 29.3104 42.4101H33.2618C33.5306 42.4101 33.7495 42.629 33.7495 42.8978V43.5102C33.7495 43.779 33.5306 43.9966 33.2618 43.9966H14.6506C14.5866 43.9967 14.5233 43.9842 14.4641 43.9598C14.405 43.9354 14.3513 43.8996 14.306 43.8544C14.2607 43.8093 14.2248 43.7556 14.2002 43.6966C14.1757 43.6375 14.163 43.5742 14.1629 43.5102V42.8978C14.1629 42.629 14.3811 42.4101 14.6499 42.4101H18.6019C18.7292 42.4101 18.8513 42.3595 18.9413 42.2695C19.0314 42.1795 19.0819 42.0574 19.0819 41.9301V39.42C19.0819 39.2927 19.0314 39.1706 18.9413 39.0806C18.8513 38.9906 18.7292 38.94 18.6019 38.94C18.4746 38.94 18.3525 38.9906 18.2625 39.0806C18.1725 39.1706 18.1219 39.2927 18.1219 39.42V41.4501H14.6493C14.2657 41.4508 13.898 41.6035 13.6268 41.8749C13.3557 42.1463 13.2032 42.5141 13.2029 42.8978V43.5102C13.2036 43.8936 13.3562 44.2611 13.6273 44.5323C13.8984 44.8034 14.2659 44.956 14.6493 44.9566H33.2605C33.6442 44.9565 34.0122 44.8041 34.2837 44.5329C34.5553 44.2618 34.7081 43.894 34.7088 43.5102V42.8978C34.7085 42.5139 34.5558 42.1459 34.2844 41.8745C34.013 41.6031 33.6456 41.4504 33.2618 41.4501Z" fill="#22C55E" />
            <path d="M13.8974 3.78868C13.5838 3.91348 13.3726 4.22516 13.3726 4.56372V21.0917C13.3722 21.2151 13.3995 21.3369 13.4524 21.4483C13.5053 21.5598 13.5825 21.6579 13.6784 21.7356C13.7742 21.8132 13.8862 21.8684 14.0062 21.8971C14.1261 21.9258 14.251 21.9272 14.3716 21.9013C15.5428 21.6479 19.7028 20.9951 24.0036 23.1416C24.2276 23.2549 24.5022 23.26 24.7364 23.1423C29.0462 20.9919 33.2439 21.6511 34.4298 21.9026C34.5503 21.9282 34.675 21.9265 34.7948 21.8976C34.9145 21.8688 35.0262 21.8134 35.1218 21.7357C35.2174 21.658 35.2943 21.5599 35.347 21.4486C35.3997 21.3372 35.4268 21.2155 35.4263 21.0924V4.56372C35.4263 4.22452 35.2151 3.91284 34.9009 3.78804C29.8353 1.77588 25.402 4.40116 24.3729 5.09044C23.3514 4.40052 18.9585 1.77716 13.8974 3.78868ZM34.4663 4.64884V20.9304C33.0244 20.645 28.7575 20.0882 24.3703 22.2527C21.1914 20.684 17.4673 20.309 14.3326 20.9285V4.64884C19.0506 2.82228 23.1306 5.39508 23.9038 5.93396C24.1854 6.12852 24.5514 6.13108 24.8362 5.93652C25.619 5.39764 29.7425 2.821 34.4663 4.64884Z" fill="#22C55E" />
            <path d="M37.604 5.76904H36.7099C36.5826 5.76904 36.4605 5.81961 36.3705 5.90963C36.2804 5.99965 36.2299 6.12174 36.2299 6.24904C36.2299 6.37635 36.2804 6.49844 36.3705 6.58845C36.4605 6.67847 36.5826 6.72904 36.7099 6.72904H37.1233V23.89C37.1233 23.9521 37.0986 24.0117 37.0547 24.0556C37.0108 24.0996 36.9512 24.1242 36.8891 24.1242H11.908C11.8459 24.1241 11.7865 24.0993 11.7427 24.0554C11.6989 24.0115 11.6744 23.952 11.6744 23.89V6.96328C11.6744 6.83464 11.7793 6.72968 11.908 6.72968H12.2862C12.4135 6.72968 12.5356 6.67911 12.6256 6.58909C12.7156 6.49908 12.7662 6.37699 12.7662 6.24968C12.7662 6.12238 12.7156 6.00029 12.6256 5.91027C12.5356 5.82025 12.4135 5.76968 12.2862 5.76968H11.9086C11.5921 5.77002 11.2886 5.89586 11.0647 6.11962C10.8409 6.34337 10.7149 6.64677 10.7144 6.96328V23.8913C10.7144 24.5492 11.25 25.0849 11.908 25.0849H36.8897C37.2063 25.0845 37.5099 24.9586 37.7338 24.7347C37.9577 24.5108 38.0836 24.2073 38.084 23.8906V6.24904C38.084 6.12174 38.0334 5.99965 37.9434 5.90963C37.8534 5.81961 37.7313 5.76904 37.604 5.76904Z" fill="#22C55E" />
            <path d="M23.6011 7.38039V20.3167C23.6011 20.444 23.6517 20.5661 23.7417 20.6561C23.8317 20.7461 23.9538 20.7967 24.0811 20.7967C24.2084 20.7967 24.3305 20.7461 24.4205 20.6561C24.5105 20.5661 24.5611 20.444 24.5611 20.3167V7.38039C24.5611 7.25309 24.5105 7.131 24.4205 7.04098C24.3305 6.95096 24.2084 6.90039 24.0811 6.90039C23.9538 6.90039 23.8317 6.95096 23.7417 7.04098C23.6517 7.131 23.6011 7.25309 23.6011 7.38039ZM27.8667 9.37975C28.41 9.14999 30.0273 8.61879 30.9835 8.91575C31.1052 8.95326 31.2368 8.94089 31.3494 8.88136C31.462 8.82183 31.5463 8.72001 31.5838 8.59831C31.6213 8.47661 31.6089 8.34499 31.5494 8.23241C31.4899 8.11982 31.3881 8.0355 31.2664 7.99799C29.7867 7.53975 27.5864 8.45559 27.4936 8.49527C26.9163 8.73847 27.2734 9.62935 27.8667 9.37975ZM31.2664 11.1238C29.7848 10.6649 27.5864 11.5807 27.4936 11.6198C26.9144 11.8649 27.2766 12.7538 27.866 12.5049C28.41 12.2764 30.0292 11.7471 30.9828 12.0415C31.1045 12.079 31.2362 12.0667 31.3487 12.0071C31.4613 11.9476 31.5456 11.8458 31.5832 11.7241C31.6207 11.6024 31.6083 11.4707 31.5488 11.3582C31.4892 11.2456 31.3881 11.1613 31.2664 11.1238ZM26.851 16.8927C26.8753 16.8799 29.363 15.6601 32.4728 15.9052C32.7268 15.9148 32.9668 15.7273 32.988 15.4636C33.0091 15.1999 32.8107 14.9682 32.5464 14.9478C29.1672 14.6892 26.5336 15.9782 26.4228 16.0332C26.3089 16.0901 26.2221 16.1899 26.1818 16.3107C26.1414 16.4315 26.1506 16.5634 26.2075 16.6774C26.2643 16.7913 26.3642 16.8781 26.485 16.9184C26.6058 16.9588 26.737 16.9496 26.851 16.8927ZM18.2596 10.4774C19.2126 10.1836 20.8331 10.7122 21.3771 10.9414C21.9691 11.1903 22.3281 10.3007 21.7502 10.0562C21.6574 10.0172 19.4584 9.10263 17.9768 9.56023C17.8578 9.5999 17.759 9.68456 17.7017 9.79611C17.6443 9.90765 17.6329 10.0372 17.6699 10.1571C17.7069 10.2769 17.7893 10.3776 17.8995 10.4374C18.0097 10.4973 18.139 10.5116 18.2596 10.4774ZM22.2993 14.4697C22.1886 14.4146 19.5544 13.1244 16.1758 13.3836C15.9115 13.4047 15.7137 13.6351 15.7342 13.8994C15.7547 14.1638 15.9934 14.3564 16.2494 14.341C19.3534 14.0978 21.8462 15.3164 21.8712 15.3286C21.9846 15.3815 22.1142 15.3881 22.2324 15.3468C22.3506 15.3056 22.448 15.2198 22.5038 15.1078C22.5597 14.9958 22.5695 14.8663 22.5313 14.7471C22.4931 14.6279 22.4099 14.5284 22.2993 14.4697ZM41.0065 30.8082C41.0065 30.6809 40.9559 30.5588 40.8659 30.4688C40.7759 30.3788 40.6538 30.3282 40.5265 30.3282H7.34572C7.21842 30.3282 7.09633 30.3788 7.00631 30.4688C6.91629 30.5588 6.86572 30.6809 6.86572 30.8082C6.86572 30.9355 6.91629 31.0576 7.00631 31.1476C7.09633 31.2377 7.21842 31.2882 7.34572 31.2882H40.5265C40.6538 31.2882 40.7759 31.2377 40.8659 31.1476C40.9559 31.0576 41.0065 30.9355 41.0065 30.8082ZM21.4795 33.061C21.3522 33.061 21.2301 33.1116 21.1401 33.2016C21.0501 33.2916 20.9995 33.4137 20.9995 33.541C20.9995 33.6683 21.0501 33.7904 21.1401 33.8804C21.2301 33.9705 21.3522 34.021 21.4795 34.021H26.4331C26.5604 34.021 26.6825 33.9705 26.7725 33.8804C26.8625 33.7904 26.9131 33.6683 26.9131 33.541C26.9131 33.4137 26.8625 33.2916 26.7725 33.2016C26.6825 33.1116 26.5604 33.061 26.4331 33.061H21.4795Z" fill="#22C55E" />
          </svg>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">دوره های در حال یادگیری</span>
            <span className="text-sm sm:text-base">{userInfos?.userInfo.courses.length} دوره</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-64 col-span-3">
          <svg className="size-10 sm:size-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5149_5552)">
              <mask id="mask0_5149_5552" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
                <path d="M0 0.000137329H47.9999V48H0V0.000137329Z" fill="white" />
              </mask>
              <g mask="url(#mask0_5149_5552)">
                <path d="M17.2778 37.0498V33.4941C17.2778 32.2451 18.782 31.1476 20.6025 30.5258M27.193 30.4593C29.1009 31.0677 30.7221 32.1973 30.7221 33.4941V37.0498" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.2329 46.5317H37.7644V41.0466H10.2329V46.5317Z" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.703125 38.6072V33.8662C0.703125 32.5614 1.67578 31.4692 2.93277 31.2832M10.2328 39.4655V46.5317H0.703125V41.7908" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M47.2966 38.6072V33.8662C47.2966 32.5774 46.3478 31.4985 45.1148 31.2912M37.7642 39.4655V46.5317H47.2966V41.7908" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.05922 31.2563C8.65706 31.2616 9.24703 31.5354 9.63506 32.0482L13.4112 37.0496H18.2532C19.3561 37.0496 20.2516 37.9451 20.2516 39.0479C20.2516 40.1535 19.3561 41.0464 18.2532 41.0464H12.4201C12.1113 41.0463 11.8068 40.9745 11.5305 40.8366C11.2543 40.6987 11.0138 40.4985 10.8281 40.2519L7.71094 36.1247" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.047 31.2563C39.4118 31.2298 38.774 31.5035 38.3622 32.0482L34.5859 37.0496H29.7466C28.6412 37.0496 27.7456 37.9451 27.7456 39.0479C27.7456 40.1535 28.6412 41.0464 29.7466 41.0464H35.5772C35.8863 41.0463 36.1912 40.9745 36.4679 40.8367C36.7446 40.6988 36.9855 40.4986 37.1717 40.2519L40.2861 36.1247" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.04078 16.465H20.0845C22.043 16.465 23.6455 14.8627 23.6455 12.904V5.02738C23.6455 3.07148 22.043 1.46892 20.0845 1.46892H4.64986C2.69114 1.46892 1.08887 3.07148 1.08887 5.02738V12.904C1.08887 14.8627 2.69114 16.465 4.64986 16.465V19.856L8.04078 16.465Z" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.7662 19.1701H32.8985L36.2894 22.561V19.1701C37.7643 19.1701 38.9709 17.9609 38.9709 16.486V9.71479C38.9709 8.23983 37.7643 7.03336 36.2894 7.03336H23.6453M18.7661 16.4648C18.7661 17.953 19.9566 19.1701 21.4501 19.1701H25.5826" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.8584 8.96547H18.8748M5.8584 12.6646H12.3667M5.8584 5.2662H18.8748" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.6659 28.3838C27.6659 30.4699 25.9571 32.1787 23.871 32.1787C21.7849 32.1787 20.0762 30.4699 20.0762 28.3838V24.3178C20.0762 23.1486 21.0329 22.1945 22.2022 22.1945H27.6659V28.3838Z" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.67334 28.3838C1.67334 30.4699 3.38212 32.1787 5.46823 32.1787C7.55426 32.1787 9.26304 30.4699 9.26304 28.3838V24.3178C9.26304 23.1486 8.30632 22.1945 7.13979 22.1945H3.79658C2.63006 22.1945 1.67334 23.1486 1.67334 24.3178V28.3838Z" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46.324 28.3838C46.324 30.4699 44.6178 32.1787 42.5317 32.1787C40.4431 32.1787 38.7368 30.4699 38.7368 28.3838V24.3178C38.7368 23.1486 39.6908 22.1945 40.8602 22.1945H44.2007C45.3698 22.1945 46.324 23.1486 46.324 24.3178V28.3838Z" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.67334 28.5168C5.31402 29.6356 6.21767 27.3394 6.32379 25.2401C6.32379 25.2401 7.5836 26.4172 9.26304 25.7955" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46.324 28.5168C42.6831 29.6356 41.7797 27.3394 41.6761 25.2401C41.6761 25.2401 40.4137 26.4172 38.7368 25.7955" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.0762 25.543H27.6659" stroke="#FBBF24" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_5149_5552">
                <rect width={48} height={48} rx={4} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">مجموع تیکت های من</span>
            <span className="text-sm sm:text-base">{userTickets?.length} تیکت</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-64 col-span-3">
          <svg className="size-10 sm:size-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3095 29.8364H12.2186C11.4186 29.8364 10.6913 30.1273 10.1822 30.7091L8.36406 32.5273C7.49134 33.4 6.03679 32.8182 6.03679 31.5818C6.03679 30.6364 5.30952 29.9091 4.36406 29.9091C2.54588 29.9091 1.16406 28.4546 1.16406 26.6364V14.3455C1.16406 12.5273 2.61861 11.0728 4.36406 11.0728H23.4913C25.3095 11.0728 26.6913 12.5273 26.6913 14.3455V23.8728" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.6368 23.8726H24.5823C22.7641 23.8726 21.3096 25.3271 21.3096 27.1453V39.3635C21.3096 41.1816 22.7641 42.6362 24.5823 42.6362H35.855C36.655 42.6362 37.3823 42.9271 37.8914 43.5089L39.7096 45.3271C40.5823 46.1998 42.0368 45.5453 42.0368 44.3816C42.0368 43.4362 42.7641 42.7089 43.7096 42.7089C45.5278 42.7089 46.9823 41.2544 46.9823 39.4362V27.1453C46.9096 25.3271 45.455 23.8726 43.6368 23.8726Z" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36.2187 12.8911C36.9819 12.8911 37.6005 12.2724 37.6005 11.5093C37.6005 10.7461 36.9819 10.1274 36.2187 10.1274C35.4556 10.1274 34.8369 10.7461 34.8369 11.5093C34.8369 12.2724 35.4556 12.8911 36.2187 12.8911Z" stroke="#EF4444" strokeMiterlimit={10} />
            <path d="M38.9097 12.8911C39.6728 12.8911 40.2915 12.2724 40.2915 11.5093C40.2915 10.7461 39.6728 10.1274 38.9097 10.1274C38.1465 10.1274 37.5278 10.7461 37.5278 11.5093C37.5278 12.2724 38.1465 12.8911 38.9097 12.8911Z" stroke="#EF4444" strokeMiterlimit={10} />
            <path d="M37.5278 11.5093V19.2911M38.9824 19.582V19.9456C38.9824 20.7456 38.3278 21.3275 37.6006 21.3275C36.8006 21.3275 36.2188 20.6729 36.2188 19.9456V19.582" stroke="#EF4444" strokeMiterlimit={10} />
            <path d="M45.455 11.291H45.8187H45.455ZM29.3096 11.291H29.6732H29.3096ZM45.455 11.291H45.8187H45.455ZM29.3096 11.291H29.6732H29.3096Z" fill="#EF4444" />
            <path d="M45.455 11.291H45.8187M29.3096 11.291H29.6732" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.5278 3V3.36364" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.1277 16.8181L43.4186 17.109L43.1277 16.8181ZM31.7095 5.3999L32.0004 5.69081L31.7095 5.3999ZM43.1277 16.8181L43.4186 17.109L43.1277 16.8181ZM31.7095 5.3999L32.0004 5.69081L31.7095 5.3999ZM32.0004 16.8181L31.7095 17.109L32.0004 16.8181ZM43.4186 5.3999L43.1277 5.69081L43.4186 5.3999ZM32.0004 16.8181L31.7095 17.109L32.0004 16.8181ZM43.4186 5.3999L43.1277 5.69081L43.4186 5.3999Z" fill="#EF4444" />
            <path d="M43.1277 16.8181L43.4186 17.109M31.7095 5.3999L32.0004 5.69081M32.0004 16.8181L31.7095 17.109M43.4186 5.3999L43.1277 5.69081" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42.837 9.90906C43.2733 11.9454 42.5461 13.8363 41.1642 15.0727C40.437 15.7272 40.0006 16.6727 40.0006 17.6182V18.7818C40.0006 19.2182 39.637 19.5818 39.2006 19.5818H36.0733C35.637 19.5818 35.2733 19.2182 35.2733 18.7818V17.9091C35.2733 16.7454 34.7642 15.7272 33.9642 14.9272C33.4358 14.434 33.0145 13.8372 32.7267 13.1741C32.4389 12.5109 32.2908 11.7956 32.2915 11.0727C32.2915 7.65452 35.4188 4.96361 38.9824 5.83634C40.8733 6.19997 42.4006 7.8727 42.837 9.90906Z" stroke="#EF4444" strokeMiterlimit={10} />
            <path d="M42.837 9.90906C43.2733 11.9454 42.5461 13.8363 41.1642 15.0727C40.437 15.7272 40.0006 16.6727 40.0006 17.6182V18.7818C40.0006 19.2182 39.637 19.5818 39.2006 19.5818H36.0733C35.637 19.5818 35.2733 19.2182 35.2733 18.7818V17.9091C35.2733 16.7454 34.7642 15.7272 33.9642 14.9272C33.4358 14.434 33.0145 13.8372 32.7267 13.1741C32.4389 12.5109 32.2908 11.7956 32.2915 11.0727C32.2915 7.65452 35.4188 4.96361 38.9824 5.83634C40.8733 6.19997 42.4006 7.8727 42.837 9.90906Z" stroke="#EF4444" strokeMiterlimit={10} />
            <path d="M15.6366 24.8907L14.473 23.5089C14.3275 23.5089 14.1093 23.5816 13.8184 23.5816C13.0911 23.5816 12.3639 23.4361 11.782 23.0725C11.2002 22.7089 10.7639 22.2725 10.473 21.6907C10.182 21.1089 9.96387 20.4543 9.96387 19.6543C9.96387 18.9271 10.1093 18.1998 10.473 17.618C10.7639 17.0361 11.2002 16.5998 11.782 16.2361C12.3639 15.8725 13.0184 15.7271 13.8184 15.7271C14.6184 15.7271 15.273 15.8725 15.782 16.2361C16.3639 16.5998 16.8002 17.0361 17.0911 17.618C17.382 18.1998 17.6002 18.8543 17.6002 19.6543C17.6002 20.5271 17.382 21.2543 17.0184 21.9089C16.6548 22.5634 16.073 22.9998 15.3457 23.2907L16.2911 24.3816C16.3639 24.4543 16.4366 24.5998 16.4366 24.6725C16.4366 24.818 16.3639 24.8907 16.2911 24.9634C16.2911 25.0361 16.1457 25.0361 16.0002 25.0361C15.8548 25.0361 15.782 24.9634 15.6366 24.8907ZM15.3457 22.1998C15.782 21.9089 16.073 21.618 16.2911 21.1089C16.5093 20.5998 16.6548 20.1634 16.6548 19.5816C16.6548 18.9998 16.5093 18.4907 16.2911 18.0543C16.073 17.618 15.7093 17.2543 15.3457 16.9634C14.9093 16.6725 14.4002 16.5998 13.8184 16.5998C13.2366 16.5998 12.7275 16.7452 12.2911 16.9634C11.8548 17.2543 11.5639 17.5452 11.3457 18.0543C11.1275 18.5634 10.982 18.9998 10.982 19.5816C10.982 20.1634 11.1275 20.6725 11.3457 21.1089C11.5639 21.5452 11.9275 21.9089 12.2911 22.1998C12.7275 22.4907 13.2366 22.5634 13.8184 22.5634C14.4002 22.5634 14.9093 22.418 15.3457 22.1998ZM30.9093 36.818C30.8366 36.7452 30.7639 36.5998 30.7639 36.4543C30.7639 36.3816 30.7639 36.3089 30.8366 36.2361L33.6002 29.6907C33.673 29.5452 33.7457 29.4725 33.8184 29.3998C33.8911 29.3271 34.0366 29.2543 34.182 29.2543H34.3275C34.473 29.2543 34.6184 29.3271 34.6911 29.3998C34.7639 29.4725 34.9093 29.618 34.9093 29.6907L37.673 36.2361C37.673 36.3089 37.7457 36.3816 37.7457 36.4543C37.7457 36.5998 37.673 36.6725 37.6002 36.818C37.5275 36.8907 37.382 36.9634 37.2366 36.9634C37.1639 36.9634 37.0184 36.9634 36.9457 36.8907L36.7275 36.6725L36.0002 34.9998H32.2911L31.5639 36.6725C31.4911 36.7452 31.4911 36.818 31.3457 36.8907C31.273 36.9634 31.2002 36.9634 31.0548 36.9634C31.1275 36.9634 30.982 36.9634 30.9093 36.818ZM32.8002 34.0543H35.7093L34.2548 30.4907L32.8002 34.0543Z" fill="#EF4444" />
            <path d="M17.8188 39.5818L18.5461 37.4L17.8188 39.5818ZM13.5279 38.4909L15.8552 36.2363L13.5279 38.4909ZM12.437 34.2727L14.6916 33.5454L12.437 34.2727Z" fill="#EF4444" />
            <path d="M17.8188 39.5818L18.5461 37.4M13.5279 38.4909L15.8552 36.2363M12.437 34.2727L14.6916 33.5454" stroke="#EF4444" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">پرسش پاسخ های من</span>
            <span className="text-sm sm:text-base">{userTickets?.length} پرسش </span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-64 col-span-3">
          <svg className="size-10 sm:size-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5149_5579)">
              <path d="M45.7118 28.115H44.9935V21.6449C44.9935 20.6206 44.4837 19.7136 43.7051 19.1626V18.2816C43.7051 17.0037 42.6655 15.9641 41.3876 15.9641H40.8512L42.9033 12.9529C43.5912 11.9435 43.3296 10.5627 42.3203 9.87476L28.3955 0.385382C27.9066 0.0521011 27.3173 -0.0708989 26.7357 0.0394449C26.4496 0.0928348 26.1769 0.202439 25.9335 0.361913C25.69 0.521387 25.4806 0.727563 25.3174 0.968507L13.2986 18.605H9.95404L10.7609 10.4366C10.77 10.3445 10.8299 10.2648 10.9133 10.2334C11.9529 9.84138 12.8538 9.10938 13.4501 8.17226C13.497 8.09848 13.5856 8.05629 13.6773 8.06557L18.9231 8.58382C19.0125 8.59265 19.1027 8.58378 19.1887 8.55774C19.2746 8.53169 19.3546 8.48896 19.4241 8.432C19.4935 8.37504 19.5511 8.30496 19.5934 8.22576C19.6358 8.14656 19.6621 8.0598 19.6709 7.97041C19.6798 7.88103 19.6709 7.79079 19.6449 7.70483C19.6188 7.61888 19.5761 7.5389 19.5191 7.46945C19.4622 7.40001 19.3921 7.34246 19.3129 7.3001C19.2337 7.25774 19.1469 7.2314 19.0575 7.22257L13.8118 6.70432C13.2029 6.6447 12.6222 6.92529 12.2959 7.43791C11.8575 8.12698 11.1951 8.6651 10.4308 8.95329C9.85541 9.17023 9.46035 9.68698 9.3996 10.3021L8.57948 18.6049H7.70732L8.98345 5.68582C9.02938 5.22082 9.44442 4.8792 9.90998 4.92579L20.5107 5.97298C20.6912 5.9908 20.8714 5.93619 21.0116 5.82116C21.1519 5.70612 21.2407 5.54008 21.2585 5.35957C21.2763 5.17906 21.2217 4.99886 21.1067 4.85861C20.9917 4.71836 20.8256 4.62955 20.6451 4.61173L10.0444 3.56454C8.82904 3.44463 7.7422 4.33573 7.6221 5.55129L6.59348 15.9641H4.84176C3.56395 15.9641 2.52426 17.0037 2.52426 18.2816V18.8825C1.47885 19.3639 0.750977 20.4206 0.750977 21.6449V44.96C0.750977 46.6363 2.11466 48 3.79101 48H41.9535C43.6298 48 44.9935 46.6363 44.9935 44.96V38.49H45.7118C46.5597 38.49 47.2494 37.8003 47.2494 36.9525V29.6526C47.2495 28.8048 46.5597 28.115 45.7118 28.115ZM41.3876 17.3321C41.9113 17.332 42.3372 17.758 42.3372 18.2817V18.6302C42.2099 18.6138 42.0818 18.6054 41.9535 18.6051H39.0515L39.919 17.3321H41.3876ZM26.4478 1.73876C26.5102 1.6466 26.5903 1.56774 26.6834 1.50674C26.7766 1.44573 26.8809 1.4038 26.9903 1.38335C27.0996 1.36233 27.212 1.3632 27.321 1.38591C27.43 1.40861 27.5333 1.45271 27.6252 1.51563L41.5499 11.005C41.936 11.2682 42.0361 11.7964 41.7731 12.1824L37.3963 18.6049H36.3459L38.4917 15.4561C38.8397 14.9454 38.8684 14.2955 38.5664 13.7599C38.1649 13.0484 38.0022 12.2105 38.1081 11.4006C38.1869 10.7981 37.9217 10.2099 37.4162 9.86548L30.1977 4.94623C29.6921 4.6017 29.0476 4.5701 28.5157 4.86382C27.8009 5.25851 26.9615 5.41348 26.1524 5.30023C25.5524 5.21604 24.9439 5.48698 24.6011 5.98995L16.0043 18.6049H14.9539L26.4478 1.73876ZM26.749 13.3535C23.7704 13.3535 21.3254 15.676 21.1262 18.6049H17.6594L25.7312 6.76029H25.7313C25.7535 6.72751 25.7832 6.7006 25.8181 6.68187C25.8529 6.66314 25.8917 6.65315 25.9313 6.65276C25.9417 6.65276 25.9521 6.65351 25.9625 6.65491C27.0629 6.80885 28.2044 6.59829 29.1767 6.06138C29.2532 6.01901 29.3515 6.0251 29.4272 6.07666L36.6459 10.996C36.7214 11.0476 36.763 11.1368 36.7517 11.2234C36.6076 12.3249 36.8291 13.4644 37.375 14.432C37.4188 14.5098 37.4134 14.6093 37.3615 14.6857L34.6907 18.6049H32.372C32.1726 15.676 29.7277 13.3535 26.749 13.3535ZM31.0004 18.605H22.4977C22.6936 16.4311 24.5249 14.7215 26.749 14.7215C28.9731 14.7214 30.8045 16.4311 31.0004 18.605ZM3.89216 18.2816C3.89216 17.7579 4.31807 17.3319 4.84176 17.3319H6.45838L6.33266 18.6049H3.89216V18.2816ZM2.11888 21.6449C2.11888 20.7229 2.86898 19.9729 3.79101 19.9729H41.9535C42.8756 19.9729 43.6256 20.7229 43.6256 21.6449V23.5428H2.11888V21.6449ZM43.6256 44.96C43.6256 45.882 42.8756 46.6321 41.9535 46.6321H3.79101C2.86898 46.6321 2.11888 45.882 2.11888 44.96V43.0622H5.8072C5.89701 43.0622 5.98594 43.0445 6.06892 43.0101C6.15189 42.9757 6.22728 42.9254 6.29079 42.8619C6.3543 42.7984 6.40467 42.723 6.43904 42.64C6.47341 42.557 6.4911 42.4681 6.4911 42.3783C6.4911 42.2884 6.47341 42.1995 6.43904 42.1165C6.40467 42.0336 6.3543 41.9582 6.29079 41.8947C6.22728 41.8312 6.15189 41.7808 6.06892 41.7464C5.98594 41.712 5.89701 41.6944 5.8072 41.6944H2.11888V24.9107H43.6256V28.115H37.1224C35.0734 28.115 33.2985 29.3094 32.4562 31.0383C32.4534 31.0441 32.4502 31.0497 32.4473 31.0555C32.4402 31.0702 32.434 31.0855 32.427 31.1003C32.3267 31.3134 32.2395 31.534 32.1686 31.7616L32.168 31.7635C32.0131 32.2618 31.9345 32.7807 31.9349 33.3025C31.9349 36.1629 34.262 38.49 37.1223 38.49H43.6255V41.6944H10.1866C10.0968 41.6944 10.0079 41.712 9.92491 41.7464C9.84194 41.7808 9.76655 41.8312 9.70304 41.8947C9.63953 41.9582 9.58916 42.0336 9.55479 42.1165C9.52042 42.1995 9.50273 42.2884 9.50273 42.3783C9.50273 42.4681 9.52042 42.557 9.55479 42.64C9.58916 42.723 9.63953 42.7984 9.70304 42.8619C9.76655 42.9254 9.84194 42.9757 9.92491 43.0101C10.0079 43.0445 10.0968 43.0622 10.1866 43.0622H43.6256V44.96ZM45.8816 36.9524C45.8816 37.0459 45.8055 37.1221 45.7118 37.1221H37.1226C35.6746 37.1221 34.4122 36.3122 33.7647 35.1216C33.6758 34.9585 33.5991 34.7889 33.5352 34.6144C33.385 34.2051 33.303 33.7632 33.303 33.3025C33.3026 32.7296 33.4315 32.1641 33.6802 31.648C33.7071 31.5924 33.7352 31.5375 33.7647 31.4834C34.4122 30.2929 35.6746 29.4829 37.1226 29.4829H45.7118C45.8054 29.4829 45.8816 29.5591 45.8816 29.6526V36.9524Z" fill="#0EA5E9" />
              <path d="M37.2828 30.5273C35.7526 30.5273 34.5078 31.7722 34.5078 33.3023C34.5078 34.8324 35.7526 36.0772 37.2828 36.0772C38.813 36.0772 40.0578 34.8324 40.0578 33.3023C40.0578 31.7722 38.813 30.5273 37.2828 30.5273ZM37.2828 34.7093C36.5069 34.7093 35.8757 34.0781 35.8757 33.3023C35.8757 32.5266 36.5069 31.8952 37.2828 31.8952C38.0587 31.8952 38.6899 32.5265 38.6899 33.3023C38.6899 34.0782 38.0587 34.7093 37.2828 34.7093Z" fill="#0EA5E9" />
            </g>
            <defs>
              <clipPath id="clip0_5149_5579">
                <rect width={48} height={48} rx={4} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">موجودی کیف پول</span>
            <span className="text-sm sm:text-base">
              0&nbsp;<span className="slms-price_symbol">تومان</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserActivityDetails;
