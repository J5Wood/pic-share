"use client";
import { createRef } from "react";
import CommentFormAction from "./commentFormAction";
import { useRouter } from "next/navigation";

interface CommentFormProps {
  postIdData: number;
}

export default function CommentForm({ postIdData }: CommentFormProps) {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
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
        const commentSubmit = document.querySelector(
          ".comment-submit-button"
        ) as HTMLButtonElement;
        commentSubmit.disabled = true;
        await createCommentActionWithPostId(formData);
        ref.current?.reset();
        commentSubmit.disabled = false;
        router.refresh();
      }}
    >
      <label htmlFor="content">Comment:</label>
      <input name="content" id="content" type="text" role="comment-content" />
      <input
        type="submit"
        className="comment-submit-button"
        role="form-submit-button"
      />
    </form>
  );
}
