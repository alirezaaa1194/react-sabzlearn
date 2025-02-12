import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Toaster } from "react-hot-toast";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/react";
import type { articleType } from "~/types/article.type";

function ArticleDeleteBtn({ article }: { article: articleType }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const removeArticleHandler = () => {
    fetcher.submit({ articleId: article._id }, { method: "POST", action: "/RemoveArticle" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      setIsOpenRemoveModal(false);
      showToast("موفق", "مقاله با موفقیت حذف شد", "success");
    }
  };

  return (
    <>
      <Toaster />
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title="آیا از حذف مقاله اطمینان دارید؟" action={removeArticleHandler} />
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

export default ArticleDeleteBtn;
