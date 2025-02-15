import React, { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import { Button } from "@heroui/button";
import type { commentType } from "~/types/comment.type";

function CommentShowBtn({ comment }: { comment: commentType }) {
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);

  return (
    <>
      <CustomModal
        isOpen={isOpenInfoModal}
        onClose={() => setIsOpenInfoModal(false)}
        desc={
          <>
            <p>{comment.creator?comment.creator.name:null}:</p>
            {comment?.body}
          </>
        }
      />
      <Button
        onPress={() => {
          setIsOpenInfoModal(true);
        }}
        color="secondary"
        className="text-white transition-colors font-DanaMedium"
        size="sm"
      >
        مشاهده
      </Button>
    </>
  );
}

export default CommentShowBtn;
