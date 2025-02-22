import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner } from "@heroui/react";
import { MagnifyingGlassIcon } from "public/svg/svgs";
import React, { useEffect, useRef } from "react";
import Editor from "~/components/admin-panel/Courses/AddCourseForm/Editor/Editor";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./CustomInput";
import FileInput from "./FileInput";
import type { categoryType } from "~/types/category.type";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";

function AddCourseForm({ categories }: { categories: categoryType[] }) {
  const editorRef = useRef<any>(null);

  const fetcher = useFetcher();

  const schema = yup
    .object({
      name: yup.string().min(3, "نام دوره باید حداقل ۳ کاراکتر باشد").max(70, "نام دوره نباید بیشتر از 70 کاراکتر باشد").required("لطفاً نام دوره را وارد کنید"),
      price: yup.string().min(3, "قیمت دوره باید حداقل ۳ کاراکتر باشد").max(18, "قیمت دوره نباید بیشتر از 18 کاراکتر باشد").required("لطفاً قیمت دوره را وارد کنید"),
      shortName: yup.string().min(3, "نام کوتاه دوره باید حداقل ۳ کاراکتر باشد").max(50, "نام کوتاه دوره نباید بیشتر از 50 کاراکتر باشد").required("لطفاً نام کوتاه را وارد کنید"),
      support: yup.string().min(3, "روش پشتیبانی دوره باید حداقل ۳ کاراکتر باشد").max(20, "روش پشتیبانی دوره نباید بیشتر از 20 کاراکتر باشد").required("لطفاً روش پشتیبانی دوره را وارد کنید"),

      category: yup.string().required("لطفاً دسته‌بندی دوره را انتخاب کنید"),

      image: yup
        .mixed()
        .test("fileSize", "حجم فایل نباید بیشتر از 2 مگابایت باشد", (value: any) => {
          if (!value || !value[0]) return true;
          return value[0].size <= 2000000;
        })
        .test("fileType", "فقط فایل‌های تصویری مجاز هستند", (value: any) => {
          if (!value || !value[0]) return true;
          return ["image/jpeg", "image/png", "image/gif"].includes(value[0].type);
        })
        .required("لطفا تصویر دوره را وارد کنید"),
      status: yup.string().required("لطفاً وضعیت دوره را انتخاب کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      name: "",
      price: "",
      shortName: "",
      support: "",
      category: "",
      image: {},
      status: "",
    });
    editorRef.current.setData("");
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", editorRef?.current.getData()!);
    formData.append("shortName", data.shortName!);
    formData.append("categoryID", data.category!);
    formData.append("price", data.price);
    formData.append("support", data.support);
    formData.append("status", data.status);
    formData.append("cover", data.image);

    fetcher.submit(formData, { method: "POST", encType: "multipart/form-data", action:'/AddCourse' });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "دوره با موفقیت افزوده شد", "success");
      handleReset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="name" label="نام دوره" placeholder="لطفا نام دوره را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="price" label="قیمت دوره" placeholder="لطفا قیمت دوره را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="shortName" label="نام کوتاه دوره" placeholder="لطفا نام کوتاه دوره را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="support" label="پشتیبانی دوره" placeholder="لطفا پشتیبانی دوره را وارد کنید" />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <Editor editorRef={editorRef} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 col-span-1 md:col-span-2">
          <Controller
            name="category"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <Select
                {...field}
                className="w-full md:w-1/3"
                classNames={{
                  trigger: "bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md",
                  label: "text-white font-lalezar text-lg",
                }}
                labelPlacement="outside"
                label="دسته بندی دوره"
                placeholder="دسته بندی مورد نظر را انتخاب کنید"
                isInvalid={!!error}
                errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
              >
                {categories.map((category) => (
                  <SelectItem key={category._id}>{category.title}</SelectItem>
                ))}
              </Select>
            )}
          />

          <FileInput name="image" label="تصویر دوره" />

          <Controller
            name="status"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <RadioGroup {...field} color="secondary" label="وضعیت دوره" className="w-full md:w-1/3" classNames={{ label: "text-white font-lalezar text-lg after:hidden" }} isInvalid={!!error} errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}>
                <div className="flex gap-7">
                  <Radio className="font-DanaMedium text-sm" value="presell">
                    درحال ضبط
                  </Radio>
                  <Radio className="font-DanaMedium text-sm" value="start">
                    تکمیل شده
                  </Radio>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "افزودن دوره"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddCourseForm;
