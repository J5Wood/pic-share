"use client";

import { useRouter } from "next/navigation";
import deleteComment from "../actions/deleteComment";

export default async function DeleteButton(commentId) {
  const router = useRouter();

  async function handleCommentDelete(e) {
    const id = e.target.dataset.id;
    if (id) {
      await deleteComment(id);
      router.refresh();
    }
  }

  return (
    <button
      role="delete-comment-button"
      className="delete-button"
      data-id={commentId.commentId}
      onClick={(e) => handleCommentDelete(e)}
    >
      ×
    </button>
  );
}
