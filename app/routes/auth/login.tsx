import React, { cache, useReducer, useState } from "react";
import { apiRequest } from "~/Services/Axios/config";
import { getCookie, loginHandler, registerHandler, type loginFuncPropsType } from "~/utils/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, redirect, useFetcher, useNavigation } from "react-router";
import type { Route } from "./+types/signup";
import { EnvelopeIcon, LockIcon, SecondLogoIcon } from "public/svg/svgs";
import * as Spinners from "react-spinners";
import { Button } from "@heroui/button";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

const PulseLoader = Spinners.PulseLoader;

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  const token = getCookie(cookieHeader, "token");
  if (token) {
    return redirect("/");
  }

  return null;
};

const schema = yup
  .object()
  .shape({
    identifier: yup.string().email("لطفاً یک ایمیل معتبر وارد کنید").required("ایمیل الزامی است"),
    password: yup.string().min(8, "رمز عبور باید حداقل ۸ رقم باشد").required("رمز عبور الزامی است"),
  })
  .required();

function loign() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFuncPropsType>({
    resolver: yupResolver(schema),
  });

  const fetcher = useFetcher();

  const onSubmit: SubmitHandler<loginFuncPropsType> = async (data: loginFuncPropsType) => {
    try {
      const res = await loginHandler({ ...data });

      const token = res.data.accessToken;

      fetcher.submit({ token }, { method: "POST", action: "/auth" });
    } catch (err) {
      console.log(err);
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

        const res2 = await loginHandler({
          identifier: res.data.email,
          password: "11111111",
        });
        const token = res2.data.accessToken;
        fetcher.submit({ token }, { method: "POST", action: "/auth" });
      } catch (error) {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
            Accept: "application/json",
          },
        });

        const res2 = await registerHandler({
          name: res.data.name,
          username: res.data.name,
          email: res.data.email,
          phone: "09111111111",
          password: "11111111",
          confirmPassword: "11111111",
        });
        const token = res2.data.accessToken;

        fetcher.submit({ token }, { method: "POST", action: "/auth" });

        console.log("User Info:", res.data.name);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className="flex flex-col items-center gap-y-8 px-4 py-6 relative">
      <Link to="/">
        <SecondLogoIcon className="w-[250px] h-[60px]" />
      </Link>
      <div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white dark:bg-darker rounded-xl flex flex-col mt-2">
        <span className="font-DanaDemiBold text-xl mb-4 sm:mb-4.5">ورود</span>
        <span className="font-DanaRegular mb-5">
          حساب کاربری ندارید؟{" "}
          <Link to="/signup" className="font-DanaDemiBold text-green-500">
            ثبت نام کنید
          </Link>
        </span>
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full text-start">
            <EnvelopeIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="text" placeholder="آدرس ایمیل" {...register("identifier")} autoFocus className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.identifier ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.identifier && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.identifier.message}</span>}
          </div>

          <div className="relative w-full text-start">
            <LockIcon className="absolute left-4 top-3.5 size-5 text-slate-500" />
            <input type="password" placeholder="رمز عبور" {...register("password")} className={`w-full px-4 pe-[52px] placeholder:text-slate-500 bg-gray-100 text-slate-500 dark:bg-dark dark:text-white rounded-xl h-12 font-DanaRegular text-sm outline-none border transition-colors ${errors.password ? "border-red-500 focus:border-red-500" : "border-gray-100 dark:border-dark focus:border-neutral-200 dark:focus:border-slate-500"}`} />
            {errors.password && <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.password.message}</span>}
          </div>

          <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary-hover hover:transition-colors font-DanaMedium text-base">
            {fetcher.state === "loading" ? <PulseLoader color="#fff" className="mx-auto" size={12} /> : <>ورود</>}
          </Button>
          <Button onClick={login}>google</Button>
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

export default loign;