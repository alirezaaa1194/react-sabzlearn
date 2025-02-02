import React from 'react'

function CoursePercent() {
  return (
    <div className="bg-white dark:bg-darker p-[18px] sm:p-5 rounded-lg !mt-6 lg:!mt-8">
            <p className="text-sm mb-4 font-DanaRegular">وقتی 70 درصد یک ویدیو را بصورت آنلاین تماشا میکنید، میزان پیشرفت شما بصورت خودکار بروزرسانی میشود.</p>
            <div className="flex items-center justify-between mb-[18px] font-DanaDemiBold text-green-500">
              <span>میزان پیشرفت شما</span>
              <span>57%</span>
            </div>
            <div className="w-full h-3 rounded-full overflow-hidden bg-primary/20" dir="ltr">
              <div className="w-[57%] h-full rounded-full bg-primary"></div>
            </div>
          </div>
  )
}

export default CoursePercent