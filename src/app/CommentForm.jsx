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
      aria-label="Add a comment"
      action={async (formData) => {
        await createCommentActionWithPostId(formData);
        ref.current?.reset();
      }}
    >
      <label htmlFor="content">Comment:</label>
      <input name="content" id="content" type="text" role="comment-content" />
      <input type="submit" role="form-submit-button" />
    </form>
  );
}
