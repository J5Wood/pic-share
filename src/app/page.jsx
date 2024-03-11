import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import GetPosts from "./actions/GetPosts";
import Post from "./components/Post";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const posts = await GetPosts();

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
        return (
          <Post liked={liked} post={post} session={session} key={post.id} />
        );
      });
    }
  }
  return (
    <div className="posts-container" role="posts">
      {renderPosts()}
    </div>
  );
}
