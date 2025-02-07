import { Button } from "@heroui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useFetcher } from "react-router";
import * as Spinners from "react-spinners";
import { useEffect } from "react";
import { showToast } from "~/components/Notification/Notification";
const PulseLoader = Spinners.PulseLoader;

function TicketForm({ departments }: any) {
  const fetcher = useFetcher();
  const schema = yup
    .object({
      subject: yup.string().required("موضوع تیکت الزامی است"),
      body: yup.string().required("متن تیکت الزامی است"),
      department: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    const mainDepartment = departments.find((department: any) => department.value === data.department);

    const formData = new FormData();
    formData.append("departmentID", mainDepartment._id);
    formData.append("departmentSubID", "67a538f31087370b4d8efc48");
    formData.append("title", data.subject);
    formData.append("priority", "3");
    formData.append("body", data.body);

    fetcher.submit(formData, { method: "POST" });
  };

  useEffect(() => {
    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    }
  }, [fetcher.data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block space-y-4.5 md:space-y-5 md:pr-5 font-DanaRegular">
      <div className="flex flex-wrap sm:flex-nowrap gap-4.5 md:gap-5">
        <div className="flex flex-col w-full outline-none sm:w-1/2 lg:w-2/3">
          <input type="text" {...register("subject")} className={`w-full outline-none placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm p-3.5 rounded border border-transparent ${errors.subject && "!border-red-500"}`} placeholder="موضوع تیکت:" />
          <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.subject && errors.subject?.message}</span>
        </div>
        <select {...register("department")} className="w-full outline-none cursor-pointer sm:w-1/2 lg:w-1/3 h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-darker text-sm p-3.5 border-l-[14px] border-l-transparent rounded">
          {departments?.map((department: any) => (
            <option value={department.value}>{department.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <textarea {...register("body")} className={`w-full outline-none min-h-72 placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm p-3.5 rounded border border-transparent ${errors.body && "!border-red-500"}`} placeholder="متن تیکت:" style={{ height: 287 }} />
        <span className="inline-block text-red-500 font-DanaMedium text-sm mt-2 mb-0 mr-4 transition-colors">{errors.body && errors.body?.message}</span>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-between mt-8 md:pr-5">
        <Button type="submit" className="w-full sm:w-60 h-[50px] rounded-lg mr-auto bg-primary hover:bg-primary-hover transition-colors text-white font-DanaMedium text-medium">
          {fetcher.state === "loading" ? <PulseLoader color="#fff" className="mx-auto" size={12} /> : <>ارسال تیکت</>}
        </Button>
      </div>
    </form>
  );
}

export default TicketForm;
