"use client";

import { useRouter } from "next/navigation";
import DeletePost from "../actions/deletePost";

interface MyProps {
  postId: number;
}

export default function DeletePostButton(props: MyProps) {
  const postId = props.postId;
  const router = useRouter();

  async function handlePostDelete(e: React.MouseEvent) {
    const targetElement = e.target as HTMLElement;
    if (targetElement.dataset.id) {
      const id = parseInt(targetElement.dataset.id);

      if (id) {
        await DeletePost(id);
        router.refresh();
      }
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
