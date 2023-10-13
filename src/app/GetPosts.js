import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "./components/post";
import Link from "next/link";
import Heart from "./components/heart";

export default async function GetPosts() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log(session);

  // console.log(session.user.id);
  const posts = await (async () => {
    if (session) {
      const userId = session.user.id;
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at, likes!left(*)`)
        .eq("likes.user_id", userId);
      return res;
    } else {
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at`);
      return res;
    }
  })();
  // console.log(posts);
  // const { data: posts } = await supabase
  //   .from("posts")
  //   .select(`url, id, username, content, inserted_at, likes!left(*)`)
  //   .eq("likes.user_id", userId);

  // console.log("Post: \n", posts[39]);
  // } else {
  // const { data: posts } = await supabase
  //   .from("posts")
  //   .select(`url, id, username, content, inserted_at`);

  // console.log(posts);
  // }
  // const { data, error } = await supabase
  // .from('cities')
  // .select('name, countries!inner(name)')
  // .eq('countries.name', 'Indonesia')

  function renderPosts() {
    if (posts) {
      return posts.map((post) => {
        const liked = post.likes && post.likes.length > 0 ? true : false;
        if (post.url) {
          return (
            <div className="post-card">
              <Link
                className="post-card-link"
                href={`posts/${post.id.toString()}`}
                key={post.id}
              >
                <Post postData={post} key={post.id} />
              </Link>
              <Heart postLiked={liked} />
            </div>
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
