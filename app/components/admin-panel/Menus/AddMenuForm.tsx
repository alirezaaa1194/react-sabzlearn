import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner } from "@heroui/react";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomInput from "../Courses/AddCourseForm/CustomInput";
import type { subMenuType } from "~/types/menus.type";

function AddMenuForm({ menus }: { menus: subMenuType[] }) {
  const fetcher = useFetcher();

  const schema = yup
    .object({
      title: yup.string().min(3, "عنوان منو باید حداقل ۳ کاراکتر باشد").max(25, "عنوام منو نباید بیشتر از 20 کاراکتر باشد").required("لطفاً عنوان منو را وارد کنید"),
      path: yup.string().min(3, "مسیر منو باید حداقل ۳ کاراکتر باشد").max(20, "مسیر منو نباید بیشتر از 30 کاراکتر باشد").required("لطفاً مسیر منو را وارد کنید"),

      parentId: yup.string(),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      title: "",
      path: "",
      parentId: "",
    });
  };

  const onSubmit = (data: any) => {
    const newMenuInfo = {
      title: data.title,
      href: data.path,
      parent: data.parentId,
    };

    fetcher.submit({ newMenuInfo: JSON.stringify(newMenuInfo) }, { method: "POST", action: "/AddMenu" });

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
          <CustomInput name="title" label="عنوان منو" placeholder="لطفا عنوان منو را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="path" label="مسیر منو" placeholder="لطفا مسر منو را وارد کنید" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 col-span-1 md:col-span-2">
          <Controller
            name="parentId"
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
                label="منوی پرنت"
                placeholder="منوی پرنت را انتخاب کنید"
                isInvalid={!!error}
                errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
              >
                {menus.map((menu) => (
                  <SelectItem key={menu._id}>{menu.title}</SelectItem>
                ))}
              </Select>
            )}
          />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : `${methods.watch("parentId") ? "افزودن زیر منو" : "افزودن منو"}`}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddMenuForm;
