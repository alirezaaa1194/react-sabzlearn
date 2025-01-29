import React, { cache, useReducer, useState } from "react";
import { apiRequest } from "~/Services/Axios/config";
import { getCookie, registerHandler, type registerFuncPropsType } from "~/utils/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/signup";
import { yupResolver } from "@hookform/resolvers/yup";

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

    username: yup.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد").max(10, "نام کاربری نباید بیشتر از ۱۰ کاراکتر باشد").required("لطفاً نام کاربری را وارد کنید"),

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isSubmitting && "loading..."}
      <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register("name")} autoFocus />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="text" placeholder="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}

        <input type="text" placeholder="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="text" placeholder="phone" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}

        <input type="password" placeholder="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <input type="password" placeholder="confirmPassword" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button className="bg-primary px-2 py-1">register</button>
      </form>
    </>
  );
}

export default signup;
