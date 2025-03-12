import { useEffect, useReducer, useState, type MouseEventHandler } from "react";
import { getCookie, loginHandler, registerHandler, type registerFuncPropsType } from "~/utils/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Link, redirect, useFetcher, type MetaFunction } from "react-router";
import type { Route } from "./+types/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnvelopeIcon, LockIcon, PhoneIcon, SecondLogoIcon, UserIcon } from "public/svg/svgs";
import { Button } from "@heroui/button";
import * as Spinners from "react-spinners";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { showToast } from "~/components/Notification/Notification";
import { Toaster } from "react-hot-toast";

const PulseLoader = Spinners.PulseLoader;

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  const token = getCookie(cookieHeader, "token");
  if (token) {
    return redirect("/");
  }

  return null;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object()
  .shape({
    name: yup.string().min(3, "نام باید حداقل ۳ کاراکتر باشد").max(20, "نام نباید بیشتر از 20 کاراکتر باشد").required("لطفاً نام را وارد کنید"),

    username: yup.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد").max(20, "نام کاربری نباید بیشتر از 2۰ کاراکتر باشد").required("لطفاً نام کاربری را وارد کنید"),

    email: yup.string().email("لطفاً یک ایمیل معتبر وارد کنید").required("ایمیل الزامی است"),

    phone: yup.string().matches(phoneRegExp, "لطفاً شماره تلفن معتبر وارد کنید").required("شماره تماس الزامی است"),

    password: yup.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد").required("رمز عبور الزامی است"),

    confirmPassword: yup
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .required("رمز عبور الزامی است")
      .oneOf([yup.ref("password")], "رمز عبور و تکرار آن مغایرت دارند"),
  })
  .required();


  export const meta: MetaFunction = () => {
    return [{ title: "ثبت نام - سبزلرن" }];
  };

function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerFuncPropsType>({
    resolver: yupResolver(schema),
  });

  const fetcher = useFetcher();

  const onSubmit: SubmitHandler<registerFuncPropsType> = async (data: registerFuncPropsType) => {
    try {
      const res = await registerHandler({ ...data });
      const token = res.data.accessToken;

      fetcher.submit({ token }, { method: "POST", action: "/auth" });
      showToast("موفق", "ثبت نام موفقیت آمیز بود", "success");
    } catch (err) {
      showToast("خطا", "ایمیل از قبل وجود دارد، لطفا وارد شوید", "error");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
            Accept: "application/json",
          },
        });

        const res2 = await registerHandler({
          name: res.data?.name,
          username: res.data?.name,
          email: res.data.email,
          phone: "09111111111",
          password: "11111111",
          confirmPassword: "11111111",
        });
        const token = res2.data.accessToken;

        fetcher.submit({ token }, { method: "POST", action: "/auth" });
        showToast("موفق", "ثبت نام موفقیت آمیز بود", "success");
      } catch (error) {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
            Accept: "application/json",
          },
        });

        const res2 = await loginHandler({
          identifier: res.data.email,
          password: "11111111",
        });
        const token = res2.data.accessToken;
        fetcher.submit({ token }, { method: "POST", action: "/auth" });
        showToast("موفق", "ثبت نام موفقیت آمیز بود", "success");
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-8 px-4 py-6 relative">
      {mounted && <Toaster />}
      <Toaster />
      <Link to="/">
        <SecondLogoIcon className="w-[250px] h-[60px]" />
      </Link>
      <div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white dark:bg-darker rounded-xl flex flex-col mt-2">
        <span className="font-DanaDemiBold text-xl mb-4 sm:mb-4.5">عضویت</span>
        <span className="font-DanaRegular mb-5">
          قبلا ثبت نام کرده اید؟{" "}
          <Link to="/login" className="font-DanaDemiBold text-green-500">
            وارد شوید
          </Link>
        </span>
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full text-start">
            <UserIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="text" placeholder="نام" {...register("name")} autoFocus className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors?.name ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors?.name && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors?.name.message}</span>}
          </div>
          <div className="relative w-full text-start">
            <UserIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="text" placeholder="نام کاربری" {...register("username")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.username ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.username && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.username.message}</span>}
          </div>
          <div className="relative w-full text-start">
            <EnvelopeIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="text" placeholder="آدرس ایمیل" {...register("email")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.email && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.email.message}</span>}
          </div>
          <div className="relative w-full text-start">
            <PhoneIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="text" placeholder="شماره تماس" {...register("phone")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.phone && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.phone.message}</span>}
          </div>
          <div className="relative w-full text-start">
            <LockIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="password" placeholder="رمز عبور" {...register("password")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.password ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.password && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.password.message}</span>}
          </div>
          <div className="relative w-full text-start">
            <LockIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="password" placeholder="تکرار رمز عبور" {...register("confirmPassword")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.confirmPassword && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.confirmPassword.message}</span>}
          </div>

          <div className="flex gap-4 w-full">
            <Button type="submit" className="w-full h-12 text-white bg-primary hover:bg-primary-hover hover:transition-colors font-DanaMedium text-base">
              {fetcher.state === "loading" ? <PulseLoader color="#fff" className="mx-auto" size={12} /> : <>ثبت نام</>}
            </Button>

            <Button className="w-2/12 h-12 bg-slate-200 hover:bg-slate-300 hover:transition-colors" onClick={login as unknown as MouseEventHandler<HTMLButtonElement>}>
              <img src="/images/Google_Icon2.webp" alt="google-logo" />
            </Button>
          </div>
        </form>
      </div>
      <p className="max-w-[330px] w-full text-center font-DanaMedium">
        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
        <Link to="/" className="text-green-500">
          سبزلرن
        </Link>{" "}
        را پذیرفته اید.
      </p>

      <div className="w-[300px] h-[300px] absolute top-0 left-0 rounded-full bg-sky-500 blur-[120px] opacity-20 hidden lg:block"></div>
      <div className="w-[300px] h-[300px] absolute bottom-0 right-0 rounded-full bg-amber-400 blur-[120px] opacity-20 hidden lg:block"></div>
    </div>
  );
}

export default signup;
