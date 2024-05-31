"use client";
import { createRef } from "react";
import CommentFormAction from "./commentFormAction";
import { useRouter } from "next/navigation";

interface CommentFormProps {
  postIdData: number;
}

export default function CommentForm({ postIdData }: CommentFormProps) {
  console.log(postIdData);
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
        await createCommentActionWithPostId(formData);
        ref.current?.reset();
        router.refresh();
      }}
    >
      <label htmlFor="content">Comment:</label>
      <input name="content" id="content" type="text" role="comment-content" />
      <input type="submit" role="form-submit-button" />
    </form>
  );
}
