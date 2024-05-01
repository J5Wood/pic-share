"use client";

import { useRouter } from "next/navigation";
import deletePost from "../actions/deletePost";

export default async function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handlePostDelete(e) {
    const id = e.target.dataset.id;
    if (id) {
      await deletePost(id);
      router.refresh();
    }
  }

  return (
    <button
      role="delete-post-button"
      className="delete-button delete-post-button"
      data-id={postId}
      onClick={(e) => handlePostDelete(e)}
    >
      ×
    </button>
  );
}
