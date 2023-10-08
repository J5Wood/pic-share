import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "./components/post";
import Link from "next/link";

export default async function GetPosts() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts } = await supabase.from("posts").select();

  function renderPosts() {
    if (posts) {
      return posts.map((post) => {
        if (post.url) {
          return (
            <Link
              className="post-card"
              href={`posts/${post.id.toString()}`}
              key={post.id}
            >
              <Post postData={post} key={post.id} />
            </Link>
          );
        } else {
          return (
            <div className="post-card">
              <div className="file-not-found">
                <span className="corner"></span>
              </div>
            </div>
          );
        }
      });
    }
  }
  return <div className="posts-container">{renderPosts()}</div>;
}
