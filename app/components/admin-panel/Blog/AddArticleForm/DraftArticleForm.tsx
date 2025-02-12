import { Badge, Button, input, Input, Radio, RadioGroup, Select, SelectItem, Spinner, spinner, Textarea } from "@heroui/react";
import { MagnifyingGlassIcon } from "public/svg/svgs";
import React, { use, useEffect, useRef } from "react";
import Editor from "~/components/admin-panel/Courses/AddCourseForm/Editor/Editor";
import * as yup from "yup";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect, useFetcher, useNavigate } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import FileInput from "../../Courses/AddCourseForm/FileInput";
import CustomInput from "../../Courses/AddCourseForm/CustomInput";
import type { articleType, singleArticleType } from "~/types/article.type";
import type { categoryType } from "~/types/category.type";
import { removeArticle } from "~/utils/utils";
import { AuthContext } from "~/contexts/AuthContext";

function DraftArticleForm({ article, categories }: { article: singleArticleType; categories: categoryType[] }) {
  const editorRef = useRef<any>(null);
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const authContext = use(AuthContext);

  const schema = yup
    .object({
      title: yup.string().min(3, "عنوان مقاله باید حداقل ۳ کاراکتر باشد").max(40, "عنوان مقاله نباید بیشتر از 40 کاراکتر باشد").required("لطفاً عنوان مقاله را وارد کنید"),
      shortName: yup.string().min(3, "نام کوتاه مقاله باید حداقل ۳ کاراکتر باشد").max(25, "نام کوتاه مقاله نباید بیشتر از 25 کاراکتر باشد").required("لطفاً نام کوتاه را وارد کنید"),
      description: yup.string().min(30, "توضیحات مقاله باید حداقل 30 کاراکتر باشد").max(250, "توضیحات مقاله نباید بیشتر از 250 کاراکتر باشد").required("لطفاً توضیحات مقاله را وارد کنید"),
      category: yup.string().required("لطفاً دسته‌بندی مقاله را انتخاب کنید"),

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
        .required("لطفا تصویر مقاله را وارد کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const handleReset = () => {
    methods.reset({
      title: "",
      description: "",
      shortName: "",
      category: "",
      image: {},
    });
    editorRef.current.setData("");
  };

  const onSubmit = (data: any, actionType: "publish" | "draft") => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description!);
    formData.append("body", editorRef?.current.getData()!);
    formData.append("shortName", data.shortName!);
    formData.append("categoryID", data.category);
    formData.append("cover", data.image!);

    removeArticle(article._id, authContext?.token as string).then(() => {
      if (fetcher.state === "idle") {
        if (actionType === "publish") {
          fetcher.submit(formData, { method: "POST", encType: "multipart/form-data", action: "/AddArticle" });
        } else if (actionType === "draft") {
          fetcher.submit(formData, { method: "POST", encType: "multipart/form-data", action: "/DraftArticle" });
        }

        if (fetcher?.data?.success === false) {
          showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
        } else {
          showToast("موفق", "مقاله با موفقیت افزوده شد", "success");
          handleReset();
          navigate("/admin-panel/blog");
        }
      }
    });
  };

  methods.setValue("title", article.title);
  methods.setValue("shortName", article.shortName);
  methods.setValue("description", article.description);
  methods.setValue("category", article.categoryID._id);
  useEffect(() => {
    setTimeout(() => {
      if (editorRef.current) {
        editorRef?.current?.setData(article.body);
      }
    }, 1000);
  }, [editorRef.current, article]);

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={(e) => e.preventDefault()}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="title" label="عنوان مقاله" placeholder="لطفا عنوان مقاله را وارد کنید" />
        </div>

        <div className="col-span-1 flex flex-col">
          <CustomInput defaultValue={article.shortName} name="shortName" label="نام کوتاه مقاله" placeholder="لطفا نام کوتاه مقاله را وارد کنید" />
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
                label="دسته بندی مقاله"
                placeholder="دسته بندی مورد نظر را انتخاب کنید"
                isInvalid={!!error}
                defaultSelectedKeys={[article.categoryID._id]}
                errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
              >
                {categories.map((category: categoryType) => (
                  <SelectItem key={category._id}>{category.title}</SelectItem>
                ))}
              </Select>
            )}
          />

          <FileInput name="image" label="تصویر مقاله" />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <Controller
            name="description"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <Textarea
                {...field}
                classNames={{
                  inputWrapper: `bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md border border-transparent`,
                  label: "text-white font-lalezar text-lg",
                }}
                defaultValue={article.description}
                className="w-full"
                labelPlacement="outside"
                label="توضیحات مقاله"
                placeholder="لطفا توضیحات مقاله را وارد کنید"
                isInvalid={!!error}
                errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
              />
            )}
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <Editor editorRef={editorRef} />
        </div>

        <div
          className="flex gap-3 w-full md:w-fit md:col-span-2 ms-auto mt-5
"
        >
          <Button onPress={() => methods.handleSubmit((data) => onSubmit(data, "publish"))()} type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base md:px-10 flex-grow md:grow-0">
            {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "انتشار مقاله"}
          </Button>

          <Button onPress={() => methods.handleSubmit((data) => onSubmit(data, "draft"))()} type="submit" color="warning" className="transition-colors rounded-lg text-white font-DanaMedium text-base md:px-10 flex-grow md:grow-0">
            {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "پیش نویس"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default DraftArticleForm;
