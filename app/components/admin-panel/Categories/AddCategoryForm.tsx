import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner } from "@heroui/react";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomInput from "../Courses/AddCourseForm/CustomInput";
import type { categoryType } from "~/types/category.type";

function AddCategoryForm({ categories }: { categories: categoryType[] }) {
  const fetcher = useFetcher();

  const schema = yup
    .object({
      name: yup.string().min(3, "نام دسته بندی باید حداقل ۳ کاراکتر باشد").max(25, "نام دسته بندی نباید بیشتر از 20 کاراکتر باشد").required("لطفاً نام دسته بندی را وارد کنید"),
      title: yup.string().min(3, "عنوان دسته بندی باید حداقل ۳ کاراکتر باشد").max(20, "عنوان دسته بندی نباید بیشتر از 30 کاراکتر باشد").required("لطفاً عنوان دسته بندی را وارد کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      name: "",
      title: "",
    });
  };

  const onSubmit = (data: any) => {
    const newCategoryInfo = {
      name: data.name,
      title: data.title,
    };

    fetcher.submit({ newCategoryInfo: JSON.stringify(newCategoryInfo) }, { method: "POST", action: "/AddCategory" });

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
          <CustomInput name="name" label="نام دسته بندی" placeholder="لطفا نام دسته بندی را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="title" label="عنوان دسته بندی" placeholder="لطفا عنوان دسته بندی را وارد کنید" />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "افزودن دسته بندی"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddCategoryForm;
