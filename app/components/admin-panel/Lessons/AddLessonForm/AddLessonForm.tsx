import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner } from "@heroui/react";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import type { courseType } from "~/types/course.type";
import CustomInput from "../../Courses/AddCourseForm/CustomInput";
import FileInput from "../../Courses/AddCourseForm/FileInput";

function AddLessonForm({ courses }: { courses: courseType[] }) {
  const fetcher = useFetcher();

  const schema = yup
    .object({
      title: yup.string().min(3, "عنوان جلسه باید حداقل ۳ کاراکتر باشد").max(25, "عنوان جلسه نباید بیشتر از 25 کاراکتر باشد").required("لطفاً عنوان جلسه را وارد کنید"),
      time: yup.string().min(3, "مدت زمان جلسه باید حداقل 4 کاراکتر باشد").max(25, "مدت زمان جلسه نباید بیشتر از 4 کاراکتر باشد").required("لطفاً مدت زمان جلسه را وارد کنید"),
      course: yup.string().required("لطفاً دوره مربوطه را انتخاب کنید"),
      video: yup
        .mixed()
        .test("fileSize", "حجم فایل نباید بیشتر از 2 مگابایت باشد", (value: any) => {
          if (!value || !value[0]) return true;
          return value[0].size <= 2000000;
        })
        .test("fileType", "فقط فایل‌های تصویری مجاز هستند", (value: any) => {
          if (!value || !value[0]) return true;
          return ["image/jpeg", "image/png", "image/gif"].includes(value[0].type);
        })
        .required("لطفا ویدیوی جلسه را انتخاب کنید"),
      price: yup.string().required("لطفاً قیمت جلسه را انتخاب کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      title: "",
      time: "",
      course: "",
      video: {},
      price: "",
    });
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("time", data.time!);
    formData.append("video", data.video!);
    formData.append("free", data.price);
    formData.append("course", data.course);

    fetcher.submit(formData, { method: "POST", encType: "multipart/form-data", action: "/AddLesson" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "جلسه با موفقیت افزوده شد", "success");
      handleReset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="title" label="عنوان جلسه" placeholder="لطفا عنوان جلسه را وارد کنید" />
        </div>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="time" label="مدت زمان جلسه" placeholder="لطفا مدت زمان جلسه را وارد کنید" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 col-span-1 md:col-span-2">
          <Controller
            name="course"
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

          <FileInput name="video" label="ویدیوی جلسه" />

          <Controller
            name="price"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <RadioGroup {...field} color="secondary" label="قیمت جلسه" className="w-full md:w-1/3" classNames={{ label: "text-white font-lalezar text-lg after:hidden" }} isInvalid={!!error} errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}>
                <div className="flex gap-7">
                  <Radio className="font-DanaMedium text-sm" value="1">
                    رایگان
                  </Radio>
                  <Radio className="font-DanaMedium text-sm" value="0">
                    نقدی
                  </Radio>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "افزودن جلسه"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddLessonForm;
