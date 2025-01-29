import React, { cache, useReducer, useState } from "react";
import { apiRequest } from "~/Services/Axios/config";
import { getCookie, loginHandler, registerHandler, type loginFuncPropsType } from "~/utils/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { redirect, useFetcher, useNavigation } from "react-router";
import type { Route } from "./+types/signup";

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
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFuncPropsType>({
    resolver: yupResolver(schema),
  });

  const fetcher = useFetcher();

  const onSubmit: SubmitHandler<loginFuncPropsType> = async (data: loginFuncPropsType) => {
    console.log(data);

    try {
      const res = await loginHandler({ ...data });

      const token = res.data.accessToken;

      fetcher.submit({ token }, { method: "POST", action: "/auth" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isNavigating && "loading..."}
      <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" {...register("identifier")} />
        {errors.identifier && <p>{errors.identifier.message}</p>}

        <input type="password" placeholder="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button className="bg-primary px-2 py-1">register</button>
      </form>
    </>
  );
}

export default loign;
