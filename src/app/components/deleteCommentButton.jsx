"use client";

import { useRouter } from "next/navigation";
import DeleteComment from "../actions/deleteComment";

export default async function DeleteCommentButton({ commentId }) {
  const router = useRouter();

  async function handleCommentDelete(e) {
    const id = e.target.dataset.id;
    if (id) {
      await DeleteComment(id);
      router.refresh();
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
