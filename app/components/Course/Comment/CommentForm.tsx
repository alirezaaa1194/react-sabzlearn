import React, { use, useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightFillIcon, ExclamationTriangleIcon, UserMiniIcon } from "public/svg/svgs";
import { useFetcher } from "react-router";
import { AuthContext } from "~/contexts/AuthContext";
import * as Spinners from "react-spinners";
import { showToast } from "~/components/Notification/Notification";
function CommentForm() {
  const fetcher = useFetcher();

  const [isOpenCommentForm, setIsOpenCommentForm] = useState<boolean>(false);
  const [commentFormInputValue, setCommentFormInputValue] = useState<string>("");
  const commentFormInputRef = useRef<HTMLTextAreaElement | null>(null);
  const userContext = use(AuthContext);

  const PulseLoader = Spinners.PulseLoader;

  useEffect(() => {
    if (commentFormInputRef.current) {
      if (isOpenCommentForm) {
        setTimeout(() => {
          commentFormInputRef?.current?.focus();
        }, 200);
      }
    }
  }, [isOpenCommentForm]);

  useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.res.status === 201) {
        setIsOpenCommentForm(false);
        setCommentFormInputValue("");
        showToast("موفق", "دیدگاه با موفقیت ثبت شد", "success");
      }
    }
  }, [fetcher.data]);

  return (
    <>
      <div className="flex items-center justify-between mb-6 sm:mb-7">
        <div className="flex items-center gap-x-3 relative">
          <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-red-500 rounded-r-sm"></span>

          <ChatBubbleLeftRightFillIcon className="hidden md:inline-block text-red-500 w-10 h-10" />
          <div className="font-MorabaBold text-xl md:text-2xl">نظرات</div>
        </div>
        {/* <!-- New Comment Button --> */}
        <Button className="bg-primary hover:bg-primary-hover font-DanaMedium text-sm text-white rounded-lg" type="button" onClick={() => setIsOpenCommentForm(true)}>
          ایجاد نظر جدید
          <ChatBubbleBottomCenterTextIcon className="size-5" />
        </Button>
      </div>
      {/* <!-- Comment Alert --> */}
      <div className={`bg-green-50 text-green-500 dark:bg-green-500/10 p-[18px] md:p-5 rounded-xl text-sm md:font-DanaDemiBold mb-6 transition-all ${isOpenCommentForm ? "hidden" : "block"}`}>دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.</div>
      {/* <!-- Comment Form --> */}
      <div className={`transition-all ${isOpenCommentForm ? `scale-y-100 max-h-full opacity-100 visible` : "invisible opacity-0 max-h-0 overflow-hidden scale-y-0"}`}>
        <div className="flex gap-x-3.5 mb-[18px] sm:mb-5">
          <div className="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
            <div className="flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-dark rounded-full">
              <UserMiniIcon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-DanaMedium">{userContext?.userInfo?.name}</span>
            <span className="font-DanaLight text-sm text-gray-700 dark:text-gray-400">ثبت نظر جدید</span>
          </div>
        </div>

        <div className="flex items-center gap-x-1.5 md:gap-x-1 bg-red-500 text-white px-4 py-3 rounded-xl mb-3">
          <ExclamationTriangleIcon className="size-6 shrink-0" />
          <p className="text-sm md:font-DanaMedium">لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح کنید.</p>
        </div>
        <textarea onChange={(e) => setCommentFormInputValue(e.target.value)} value={commentFormInputValue} ref={commentFormInputRef} className="w-full h-44 block p-[18px] md:p-4 bg-gray-100 dark:bg-dark text-gray-900 dark:text-white placeholder:text-slate-500/70 font-DanaMedium text-sm rounded-lg outline-none" placeholder="نظر خود را بنویسید ..."></textarea>
        <div className="flex gap-x-4 justify-end mt-[18px] sm:mt-6 mb-10">
          <Button
            className="flex-grow sm:grow-0 sm:w-36 h-[46px] rounded-lg font-DanaMedium text-base text-primary bg-transparent btn-primary--outline"
            onPress={() => {
              setIsOpenCommentForm(false);
              setCommentFormInputValue("");
            }}
          >
            لغو
          </Button>
          <Button
            type="submit"
            onPress={() => {
              if (!commentFormInputValue.trim()) {
                showToast("خطا", "لطفا متن دیدگاه را وارد کنید!", "error");
              } else {
                if (userContext?.isUserRegister) {
                  fetcher.submit({ commentText: commentFormInputValue }, { method: "post" });
                } else {
                  showToast("خطا", "لطفا وارد سایت شوید", "error");
                }
              }
            }}
            className="flex-grow sm:grow-0 sm:w-36 h-[46px] rounded-lg font-DanaMedium text-base bg-primary btn-primary text-white"
          >
            {fetcher.state === "loading" ? <PulseLoader color="#fff" className="mx-auto" size={12} /> : "ارسال"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default CommentForm;
