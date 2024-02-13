// import React from "react";
// import GetPosts from "./actions/GetPosts";

// export default function Page() {
//   return (
//     <>
//       <GetPosts />
//     </>
//   );
// }

import GetPosts from "./actions/GetPosts";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Heart from "./components/heart";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // const posts = await (async () => {
  //   if (session) {
  //     const { data: res } = await supabase
  //       .from("posts")
  //       .select(`url, id, username, content, inserted_at, likes(user_id)`)
  //       .order("id", { ascending: false });
  //     return res;
  //   } else {
  //     const { data: res } = await supabase
  //       .from("posts")
  //       .select(`url, id, username, content, inserted_at`)
  //       .order("id", { ascending: false });
  //     return res;
  //   }
  // })();

  const posts = await GetPosts();

  function renderPosts() {
    console.log("Post Render: ", posts);
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
                href={`posts/${post.id.toString()}`}
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
      });
    }
  }
  return <div className="posts-container">{renderPosts()}</div>;
}
