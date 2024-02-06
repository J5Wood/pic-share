"use client";
import { createRef } from "react";
import CommentFormAction from "./CommentFormAction";

export default function CommentForm({ postIdData }) {
  const ref = createRef();
  const createCommentActionWithPostId = CommentFormAction.bind(
    null,
    postIdData
  );

  return (
    <form
      ref={ref}
      className="comment-form"
      action={async (formData) => {
        await createCommentActionWithPostId(formData);
        ref.current?.reset();
      }}
    >
      <label htmlFor="content">Comment:</label>
      <input name="content" id="content" type="text" />
      <input type="submit" />
    </form>
  );
}
