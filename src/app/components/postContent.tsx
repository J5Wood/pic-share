import Link from "next/link";
import PostInterface from "./PostInterface";

interface PostProps {
  postData: PostInterface;
}

export default function PostContent(props: PostProps) {
  const postData = props.postData;
  const postId = postData.id.toString();
  return (
    <Link
      className="username-link"
      href={`/users/${postData.username}`}
      key={postId.padStart(postId.length + 7, "content")}
      role="post-content"
    >
      <h4>@{postData.username}: </h4>
      <p>{postData.content}</p>
    </Link>
  );
}
