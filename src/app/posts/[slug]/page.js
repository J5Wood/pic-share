import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PostImage from "../../components/PostImage";
import PostContent from "../../components/PostContent";
import Heart from "../../components/heart";
import PostComments from "../../actions/PostComments";
import CommentForm from "../../CommentForm";
import getPost from "@/app/actions/getPost";

export default async function Page({ params: { slug } }) {
  console.log("Rendering post page: ");
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const post = await getPost(slug);

  function renderCommentForm(id) {
    if (session) {
      return <CommentForm postIdData={id} />;
    }
  }

  if (post && post.url) {
    let liked = false;
    if (!!post.likes && !!post.likes[0]) {
      for (let like of post.likes) {
        if (like.user_id === session.user.id) {
          liked = true;
          break;
        }
      }
    }
    return (
      <>
        <div className="post-container">
          <div className="post-card">
            <PostImage postData={post} />
            <PostContent postData={post} />
            <Heart session={session} postLiked={liked} postId={post.id} />
          </div>
        </div>
        <PostComments postIdData={post.id} />
        {renderCommentForm(post.id)}
      </>
    );
  } else {
    return (
      <div className="no-image-alert">
        <div className="post-container">
          <div className="file-not-found">
            <span className="corner"></span>
          </div>
        </div>
        <h2>Image Not Found</h2>
      </div>
    );
  }
}
