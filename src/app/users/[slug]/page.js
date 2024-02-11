import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PostImage from "../../components/PostImage";
import PostContent from "../../components/PostContent";
import Heart from "../../components/heart";
import Link from "next/link";

export default async function Page({ params: { slug } }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const posts = await (async () => {
    if (session) {
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at, likes(user_id)`)
        .eq("username", slug)
        .order("id", { ascending: false });
      return res;
    } else {
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at`)
        .eq("username", slug)
        .order("id", { ascending: false });
      return res;
    }
  })();
  function renderHeart(id, liked) {
    if (session) {
      return <Heart postLiked={liked} postId={id} />;
    }
  }

  function renderName() {}

  function renderPosts() {
    if (posts) {
      return posts.map((post) => {
        let liked = false;
        if (!!post.likes && !!post.likes[0]) {
          for (let like of post.likes) {
            if (like.user_id === session.user.id) {
              liked = true;
              break;
            }
          }
        }
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
              {renderHeart(post.id, liked)}
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
      });
    } else {
      return "HI";
    }
  }

  return (
    <>
      <h2 className="username-heading">{slug}</h2>
      <div className="divider" />
      <div className="posts-container">{renderPosts()}</div>
    </>
  );
}
