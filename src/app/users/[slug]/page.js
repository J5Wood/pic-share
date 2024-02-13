// import { useState } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PostImage from "../../components/PostImage";
import PostContent from "../../components/PostContent";
import Heart from "../../components/heart";
import Link from "next/link";
import getUserPosts from "@/app/actions/getUserPosts";

export default async function Page({ params: { slug } }) {
  // const [liked,  setLiked] = useState(false)
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const posts = await getUserPosts(slug);

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
                prefetch={false}
                className="post-card-link"
                href={`/posts/${post.id.toString()}`}
                key={post.id}
              >
                <PostImage postData={post} key={post.id} />
              </Link>
              <PostContent postData={post} key={post.id} />
              <Heart
                session={session}
                // post={post.likes}
                postLiked={liked}
                postId={post.id}
              />
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
