import Link from "next/link";
import PostImage from "./PostImage";
import PostContent from "./PostContent";
import Heart from "./heart";

export default function Post({ post, liked, session }) {
  if (post.url) {
    return (
      <div className="post-card">
        <Link
          className="post-card-link"
          href={`/posts/${post.id.toString()}`}
          key={post.id}
        >
          <PostImage postData={post} key={post.id} />
        </Link>
        <PostContent postData={post} key={post.id} />
        <Heart session={session} postLiked={liked} postId={post.id} />
      </div>
    );
  } else {
    return (
      <div className="post-card">
        <div className="file-not-found">
          <span className="corner"></span>
        </div>
        Image Not Found
      </div>
    );
  }
}
