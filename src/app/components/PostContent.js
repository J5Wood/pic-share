import Link from "next/link";

export default function PostContent({ postData }) {
  return (
    <Link
      className="username-link"
      href={`/users/${postData.username}`}
      key={postData.id}
    >
      <h4>@{postData.username}: </h4>
      <p>{postData.content}</p>
    </Link>
  );
}
