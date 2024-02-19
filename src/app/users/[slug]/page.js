import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getUserPosts from "../../actions/getUserPosts";
import Post from "../../components/Post";

export default async function Page({ params: { slug } }) {
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

        return <Post liked={liked} post={post} session={session} />;
      });
    }
  }

  return (
    <div className="user-page">
      <h2 className="username-heading">{slug}</h2>
      <div className="divider" />
      <div className="posts-container">{renderPosts()}</div>
    </div>
  );
}
