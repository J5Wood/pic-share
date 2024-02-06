import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "../../components/post";
import Heart from "../../components/heart";
import PostComments from "../../actions/PostComments";
import CommentForm from "../../CommentForm";

export default async function Page({ params: { slug } }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from("posts")
    .select(`url, id, username, content, inserted_at, likes!left(*)`)
    .eq("id", slug)
    .single();

  function renderHeart(id, liked) {
    if (session) {
      return <Heart postLiked={liked} postId={id} />;
    }
  }

  function renderCommentForm(id) {
    if (session) {
      return <CommentForm postIdData={id} />;
    }
  }

  if (data.url) {
    const liked = data.likes && data.likes.length > 0 ? true : false;
    return (
      <>
        <div className="post-container">
          <div className="post-card">
            <Post postData={data} key={data.id} />
            {renderHeart(data.id, liked)}
          </div>
        </div>
        <PostComments postIdData={data.id} />
        {renderCommentForm(data.id)}
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
