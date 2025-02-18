import { Button, Spinner } from "@heroui/react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomInput from "../Courses/AddCourseForm/CustomInput";

function AddCampaignForm() {
  const fetcher = useFetcher();

  const schema = yup
    .object({
      percent: yup
        .number()
        .transform((value, originalValue) => (originalValue === "" ? null : value))
        .typeError("درصد تخفیف باید یک عدد باشد")
        .min(0, "درصد تخفیف باید بیشتر از 0 باشد")
        .max(100, "درصد تخفیف باید کمتر از 100 باشه")
        .required("لطفاً درصد تخفیف را وارد کنید"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    fetcher.submit({ discount: data.percent }, { method: "POST" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "جشنواره با موفقیت برگزار شد", "success");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="col-span-1 flex flex-col">
          <CustomInput name="percent" label="درصد تخفیف" placeholder="لطفا درصد تخفیف را وارد کنید" />
        </div>

        <Button type="submit" className="bg-secondary hover:bg-secondary-hover transition-colors rounded-lg text-white font-DanaMedium text-base w-full md:w-fit md:px-10 md:col-span-2 ms-auto mt-5">
          {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "برگزاری جشنواره"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddCampaignForm;
