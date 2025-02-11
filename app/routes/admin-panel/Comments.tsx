import React from "react";
import type { Route } from "./+types/Comments";
import { getAllComments } from "~/utils/utils";
import CommentsList from "~/components/admin-panel/Comments/CommentsList";
import type { commentType } from "~/types/comment.type";

export async function loader({ params, request }: Route.LoaderArgs) {
  const allComments = await getAllComments();

  return { allComments };
}

function Comments({ loaderData }: Route.ComponentProps) {
  const comments = [...loaderData.allComments.data].sort((a: commentType, b: commentType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">کامنت ها</span>
        </span>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
}

export default Comments;
