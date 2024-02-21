"use client";

import { useState } from "react";
import deleteComment from "../actions/deleteComment";

export default async function DeleteButton({ commentId }) {
  const [refresh, setRefresh] = useState(false);
  async function handleCommentDelete(e) {
    const id = e.target.dataset.id;
    if (id) {
      const hi = await deleteComment(id);
      //   console.log(hi);
      //   setRefresh(true);
    }
  }

  return (
    <button data-id={commentId} onClick={(e) => handleCommentDelete(e)}>
      ×
    </button>
  );
}
