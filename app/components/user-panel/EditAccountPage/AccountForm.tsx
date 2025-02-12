import React, { use, useEffect } from "react";
import { Button } from "@heroui/button";
import { DeviceTabletIcon, EnvelopeIcon, LockIcon, UserCircleIcon } from "public/svg/svgs";
import * as Spinners from "react-spinners";
import { AuthContext } from "~/contexts/AuthContext";
import { useFetcher } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { showToast } from "~/components/Notification/Notification";

const PulseLoader = Spinners.PulseLoader;

function AccountForm() {
  const authContext = use(AuthContext);
  const userInfo = authContext?.userInfo;

  const fetcher = useFetcher();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const schema = yup
    .object({
      name: yup.string().min(3, "نام باید حداقل ۳ کاراکتر باشد").max(20, "نام نباید بیشتر از 20 کاراکتر باشد").required("لطفاً نام را وارد کنید"),
      username: yup.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد").max(20, "نام کاربری نباید بیشتر از 20 کاراکتر باشد").required("لطفاً نام کاربری را وارد کنید"),
      email: yup.string().email('لطفا ایمل را صحیح وارد کنید').required("لطفاً نام را وارد کنید"),
      phone: yup.string().matches(phoneRegExp, 'لطفا شماره تلفن را صحیح وارد کنید'),
      password: yup.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد").required("رمز عبور الزامی است"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data?.username!);
    formData.append("email", data?.email!);
    formData.append("phone", data?.phone!);
    formData.append("password", data.password);

    fetcher.submit(formData, { method: "POST", action: "/my-account/edit-account" });
  };

  useEffect(() => {
    if (fetcher?.data?.success) {
      showToast("موفق", "جزئیات حساب با موفقیت ویرایش شد", "success");
    } else if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    }
  }, [fetcher.data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 md:pr-5">
        <div>
          <label className="inline-block font-DanaMedium text-sm mb-3 cursor-text">نام و نام خانوادگی</label>
          <div className="relative">
            <input {...register("name")} defaultValue={userInfo?.name} type="text" className={`outline-none font-DanaRegular border border-transparent w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded ${errors.name && "!border-red-500"}`} />
            <UserCircleIcon className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400" />
          </div>
          {errors.name && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.name?.message}</span>}
        </div>
        <div>
          <label className="inline-block font-DanaMedium text-sm mb-3 cursor-text">نام کاربری</label>
          <div className="relative">
            <input {...register("username")} type="text" defaultValue={userInfo?.username} className={`outline-none font-DanaRegular border border-transparent w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded ${errors.username && "!border-red-500"}`} />
            <UserCircleIcon className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400" />
          </div>
          {errors.username && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.username?.message}</span>}
        </div>
        <div>
          <label className="inline-block font-DanaMedium text-sm mb-3 cursor-text">ایمیل</label>
          <div className="relative">
            <input {...register("email")} type="email" defaultValue={userInfo?.email} className={`outline-none font-DanaRegular border border-transparent w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded ${errors.email && "!border-red-500"}`} />
            <EnvelopeIcon className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400" />
          </div>
          {errors.email && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.email?.message}</span>}
        </div>
        <div>
          <label className="inline-block font-DanaMedium text-sm mb-3 cursor-text">شماره تلفن</label>
          <div className="relative">
            <input {...register("phone")} type="text" defaultValue={userInfo?.phone} className={`outline-none font-DanaRegular border border-transparent w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded ${errors.phone && "!border-red-500"}`} />
            <DeviceTabletIcon className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400" />
          </div>
          {errors.phone && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.phone?.message}</span>}
        </div>
        <div>
          <label className="inline-block font-DanaMedium text-sm mb-3 cursor-text">رمز عبور جدید</label>
          <div className="relative">
            <input {...register("password")} type="text" className={`outline-none font-DanaRegular border border-transparent w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded ${errors.password && "!border-red-500"}`} />
            <LockIcon className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400" />
          </div>
          {errors.password && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.password?.message}</span>}
        </div>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-between mt-8 md:pr-5 w-full">
        <Button type="submit" className="w-full sm:w-60 h-[50px] rounded-lg mr-auto bg-primary hover:bg-primary-hover transition-colors text-white font-DanaMedium text-medium">
          {fetcher.state === "loading" ? <PulseLoader color="#fff" className="mx-auto" size={12} /> : <>ویرایش حساب کاربری</>}
        </Button>
      </div>
    </form>
  );
}

export default AccountForm;
