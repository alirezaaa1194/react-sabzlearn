import { StarMiniIcon, UserGroupMiniIcon } from 'public/svg/svgs'
import React from 'react'
import type { singleCourseType } from '~/types/course.type'

function RateBox({course}:{course:singleCourseType}) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5">
    <div className="flex gap-x-4">
      <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-dark rounded-lg">
        <UserGroupMiniIcon className="w-10 h-10 md:w-11 md:h-11 text-green-500" />
        <div>
          <span className="block font-DanaDemiBold text-sm md:text-base">{course.courseStudentsCount}</span>
          <span className="block font-DanaRegular text-sm text-gray-700 dark:text-gray-400">دانشجو</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-dark rounded-lg">
        <StarMiniIcon className="w-10 h-10 md:w-11 md:h-11 text-amber-500" />
        <div>
          <span className="block font-DanaDemiBold text-sm md:text-base">5.0</span>
          <span className="block font-DanaRegular text-sm text-gray-700 dark:text-gray-400">رضایت</span>
        </div>
      </div>
    </div>
    <div className="mt-3.5 sm:mt-5">
      <div className="flex items-center justify-between font-DanaDemiBold text-sm sm:text-base mb-3">
        <span>درصد تکمیل دوره</span>
        <span>100%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-primary"></div>
    </div>
  </div>
  )
}

export default RateBox