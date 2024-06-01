"use client";

import { useRouter } from "next/navigation";
import DeleteComment from "../actions/deleteComment";

interface commentIdInterface {
  commentId: string;
}

export default function DeleteCommentButton({ commentId }: commentIdInterface) {
  const router = useRouter();

  async function handleCommentDelete(e: React.MouseEvent) {
    const targetElement = e.target as HTMLInputElement;
    if (targetElement.dataset.id) {
      const id = parseInt(targetElement.dataset.id);
      if (id) {
        await DeleteComment(id);
        router.refresh();
      }
    }
  }

  return (
    <button
      role="delete-comment-button"
      className="delete-button"
      data-id={commentId}
      onClick={(e) => handleCommentDelete(e)}
    >
      ×
    </button>
  );
}
