import Link from "next/link";
import DeleteButton from "./deleteButton";

export default function Comment({ commentData }) {
  const commentId = commentData.id.toString();

  // function handleCommentDelete(e, commentId) {
  //   console.log("e: ", e);
  //   console.log("commentId: ", commentId);
  // }

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
      <DeleteButton commentId={commentId} />
    </div>
  );
}
