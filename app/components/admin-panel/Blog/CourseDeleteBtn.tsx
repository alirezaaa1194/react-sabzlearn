import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import type { courseType } from "~/types/course.type";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";

function CourseDeleteBtn({ course }: { course: courseType }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const removeCourseHandler = () => {
    fetcher.submit({ mainCourseId: course._id }, { method: "POST", action: "/RemoveCourse" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      showToast("موفق", "دوره با موفقیت حذف شد", "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title="آیا از حذف دوره اطمینان دارید؟" action={removeCourseHandler} />
      <Button
        onPress={() => {
          setIsOpenRemoveModal(true);
        }}
        className="text-white  transition-colors font-DanaMedium"
        size="sm"
        color="danger"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "حذف"}
      </Button>
    </>
  );
}

export default CourseDeleteBtn;
