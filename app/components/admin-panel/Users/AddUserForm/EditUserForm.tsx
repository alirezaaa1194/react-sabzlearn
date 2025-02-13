import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner, Textarea } from "@heroui/react";
import { MagnifyingGlassIcon } from "public/svg/svgs";
import React, { useEffect, useRef } from "react";
import Editor from "~/components/admin-panel/Courses/AddCourseForm/Editor/Editor";
import * as yup from "yup";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomInput from "../../Courses/AddCourseForm/CustomInput";
import type { userType } from "~/types/user.type";

function EditUserForm({ user }: { user: userType }) {
  const fetcher = useFetcher();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup
    .object()
    .shape({
      name: yup.string().min(3, "نام باید حداقل ۳ کاراکتر باشد").max(20, "نام نباید بیشتر از 20 کاراکتر باشد").required("لطفاً نام را وارد کنید"),

      username: yup.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد").max(20, "نام کاربری نباید بیشتر از 2۰ کاراکتر باشد").required("لطفاً نام کاربری را وارد کنید"),

      email: yup.string().email("لطفاً یک ایمیل معتبر وارد کنید").required("ایمیل الزامی است"),

      phone: yup.string().matches(phoneRegExp, "لطفاً شماره تلفن معتبر وارد کنید").required("شماره تماس الزامی است"),

      password: yup.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد").required("رمز عبور الزامی است"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      name: "",
      email: "",
      username: "",
      password: "",
      phone: "",
    });
  };

  const onSubmit = (data: any) => {
    const userNewInfo = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.password,
    };

    fetcher.submit({ userNewInfo: JSON.stringify(userNewInfo), userId: user._id }, { method: "POST", action: "/EditUser" });
    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "کاربر با موفقیت ویرایش شد", "success");
      // handleReset();
    }
  };

  // set default value
  methods.setValue("name", user.name!);
  methods.setValue("username", user.username!);
  methods.setValue("email", user.email!);
  methods.setValue("phone", user.phone!);

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="name" label="نام کاربر" placeholder="لطفا نام کاربر را وارد کنید" />
        </div>

        <div className="col-span-1 flex flex-col">
          <CustomInput name="username" label="نام کاربری کاربر" placeholder="لطفا نام کاربری کاربر را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="email" label="ایمیل کاربر" placeholder="لطفا ایمیل کاربر را وارد کنید" />
        </div>

        <div className="col-span-1 flex flex-col">
          <CustomInput name="phone" label="شماره تماس کاربر" placeholder="لطفا شماره تماس کاربر را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="password" label="رمز عبور" placeholder="لطفا رمز عبور را وارد کنید" />
        </div>
        <div
          className="flex gap-3 w-full md:w-fit md:col-span-2 ms-auto mt-5
"
        >
          <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base md:px-10 flex-grow md:grow-0">
            {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "ویرایش کاربر"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default EditUserForm;
