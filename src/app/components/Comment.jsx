import Link from "next/link";
import DeleteCommentButton from "./deleteCommentButton";
import serverClient from "../actions/serverClient";

export default async function Comment({ commentData }) {
  const { session } = await serverClient();
  const commentId = commentData.id.toString();

  function renderDeleteButton() {
    if (session && commentData.user_id === session.user.id) {
      return <DeleteCommentButton commentId={commentId} />;
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
      <p className="comment-content">{commentData.content}</p>
      {renderDeleteButton()}
    </div>
  );
}
