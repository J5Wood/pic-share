import Link from "next/link";
import PostImage from "./PostImage";
import PostContent from "./PostContent";
import Heart from "./heart";
import DeletePostButton from "./deletePostButton";

export default function Post({ post, liked, session }) {
  function renderDeleteButton() {
    if (session && post.user_id === session.user.id) {
      return <DeletePostButton postId={post.id} />;
    }
  }

  if (post.url) {
    return (
      <div className="post-card" role="post">
        <Link
          className="post-card-link"
          href={`/posts/${post.id.toString()}`}
          key={`post-link-${post.id}`}
        >
          <PostImage postData={post} key={`post-image-${post.id}`} />
        </Link>
        <PostContent postData={post} key={`post-content-${post.id}`} />
        <Heart session={session} postLiked={liked} postId={post.id} />
        {renderDeleteButton()}
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
