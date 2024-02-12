import Link from "next/link";

export default function Comment({ commentData }) {
  const commentId = commentData.id.toString();
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
    </div>
  );
}
