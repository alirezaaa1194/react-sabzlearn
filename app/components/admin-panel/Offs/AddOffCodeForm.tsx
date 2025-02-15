import { Button, Select, SelectItem, Spinner } from "@heroui/react";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomInput from "../Courses/AddCourseForm/CustomInput";
import type { courseType } from "~/types/course.type";

function AddOffCodeForm({ courses }: { courses: courseType[] }) {
  const fetcher = useFetcher();

  const schema = yup
    .object({
      code: yup.string().min(3, "عنوان کد تخفیف باید حداقل ۳ کاراکتر باشد").max(15, "عنوان کد تخفیف نباید بیشتر از 15 کاراکتر باشد").required("لطفاً عنوان کد تخفیف را وارد کنید"),
      percent: yup
        .number()
        .transform((value, originalValue) => (originalValue === "" ? null : value))
        .typeError("درصد تخفیف باید یک عدد باشد")
        .min(0, "درصد تخفیف باید بیشتر از 0 باشد")
        .max(100, "درصد تخفیف باید کمتر از 100 باشه")
        .required("لطفاً درصد تخفیف را وارد کنید"),
      max: yup.string().required("لطفاً حداکثر استفاده را وارد کنید"),
      course: yup.string().required("لطفاً دوره مورد نظر را انتخاب کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      code: "",
      percent: undefined,
      max: "",
      course: "",
    });
  };

  const onSubmit = (data: any) => {
    const newCodeInfo = {
      code: data.code,
      percent: data.percent,
      course: data.course,
      max: data.max,
    };

    fetcher.submit({ newCodeInfo: JSON.stringify(newCodeInfo) }, { method: "POST", action: "/AddOff" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "کد تخفیف با موفقیت افزوده شد", "success");
      handleReset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="code" label="عنوان کد تخفیف" placeholder="لطفا عنوان کد تخفیف را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="percent" label="درصد تخفیف" placeholder="لطفا درصد تخفیف را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="max" label="حداکثر استفاده تخفیف" placeholder="لطفا حداکثر استفاده تخفیف را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <Controller
            name="course"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <Select
                {...field}
                className="w-full"
                classNames={{
                  trigger: "bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md",
                  label: "text-white font-lalezar text-lg",
                }}
                labelPlacement="outside"
                label="دوره"
                placeholder="دوره مورد نظر را انتخاب کنید"
                isInvalid={!!error}
                errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
              >
                {courses.map((course) => (
                  <SelectItem key={course._id}>{course.name}</SelectItem>
                ))}
              </Select>
            )}
          />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "افزودن کد تخفیف"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddOffCodeForm;
