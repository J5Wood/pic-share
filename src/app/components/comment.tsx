import Link from "next/link";
import DeleteCommentButton from "./deleteCommentButton";
import ServerClient from "../actions/serverClient";

interface commentDataInterface {
  commentData: {
    content: string;
    username: string;
    id: number;
    user_id: string;
  };
}

export default async function Comment({ commentData }: commentDataInterface) {
  const { session } = await ServerClient();
  const commentId = commentData.id.toString();

  function renderDeleteButton() {
    if (
      session &&
      commentData.user_id === session.user.id &&
      typeof commentId === "string"
    ) {
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
