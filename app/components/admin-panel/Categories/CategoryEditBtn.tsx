import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import type { sessionType } from "~/types/session.type";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Input, Spinner } from "@heroui/react";
import type { categoryType } from "~/types/category.type";

function CategoryEditBtn({ category }: { category: categoryType }) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const fetcher = useFetcher();

  const [categoryNewTitleInputValue, setCategoryNewTitleInputValue] = useState<string>();
  const [categoryNewNameInputValue, setCategoryNewNameInputValue] = useState<string>();

  const categoryNewInfo = {
    title: categoryNewTitleInputValue,
    name: categoryNewNameInputValue,
  };

  const EditLessonHandler = () => {
    if (categoryNewTitleInputValue && categoryNewNameInputValue) {
      if (categoryNewTitleInputValue !== category.title || categoryNewNameInputValue !== category.name) {
        fetcher.submit({ mainCategoryId: category._id, newInfo: JSON.stringify(categoryNewInfo) }, { method: "POST", action: "/EditCategory" });
        if (fetcher?.data?.success === false) {
          showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
        } else {
          setIsOpenEditModal(false);

          showToast("موفق", `دسته بندی با موفقیت ویرایش شد`, "success");
        }
      }
    } else {
      showToast("خطا", "لطفا فیلد هارا پرکنید", "error");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
        desc={
          <div className="flex flex-col gap-3">
            <Input classNames={{ label: "font-DanaRegiular" }} name="new-name" placeholder="نام جدید دسته بندی را وارد کنید" label="نام جدید" labelPlacement="outside" value={categoryNewNameInputValue} onValueChange={setCategoryNewNameInputValue} />
            <Input classNames={{ label: "font-DanaRegiular" }} name="new-title" placeholder="عنوان جدید دسته بندی را وارد کنید" label="عنوان جدید" labelPlacement="outside" value={categoryNewTitleInputValue} onValueChange={setCategoryNewTitleInputValue} />
          </div>
        }
        title={`آیا از ویرایش دسته بندی اطمینان دارید؟`}
        action={EditLessonHandler}
      />
      <Button
        onPress={() => {
          setIsOpenEditModal(true);
          setCategoryNewTitleInputValue(category.title);
          setCategoryNewNameInputValue(category.name);
        }}
        className="text-white transition-colors font-DanaMedium"
        size="sm"
        color="secondary"
      >
        {fetcher.state === "loading" ? <Spinner color="white" size="sm" /> : "ویرایش"}
      </Button>
    </>
  );
}

export default CategoryEditBtn;
