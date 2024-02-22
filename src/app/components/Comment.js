import Link from "next/link";
import DeleteButton from "./deleteButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Comment({ commentData }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const commentId = commentData.id.toString();

  function renderDeleteButton() {
    if (commentData.user_id === session.user.id) {
      return <DeleteButton commentId={commentId} />;
    }
  }

  return (
    <div className="comment">
      <Link
        className="username-link"
        href={`/users/${commentData.username}`}
        key={commentId.padStart(commentId.length + 7, "comment")}
      >
        <h4>@{commentData.username}</h4>
      </Link>
      <p>{commentData.content}</p>
      {renderDeleteButton()}
    </div>
  );
}
