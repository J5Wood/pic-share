import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PostComments from "../../actions/PostComments";
import CommentForm from "../../CommentForm";
import getPost from "@/app/actions/getPost";
import Post from "@/app/components/Post";

export default async function Page({ params: { slug } }) {
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
        if (session && like.user_id === session.user.id) {
          liked = true;
          break;
        }
      }
    }
    return (
      <>
        <div className="post-container">
          <Post liked={liked} post={post} session={session} />
        </div>
        <PostComments postIdData={post.id} />
        {renderCommentForm(post.id)}
      </>
    );
  }
}
