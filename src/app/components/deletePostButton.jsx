"use client";

import { useRouter } from "next/navigation";
import DeletePost from "../actions/deletePost";

export default async function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handlePostDelete(e) {
    const id = e.target.dataset.id;
    if (id) {
      await DeletePost(id);
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
