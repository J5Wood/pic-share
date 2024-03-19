import GetPosts from "./actions/GetPosts";
import Post from "./components/Post";
import serverClient from "./actions/serverClient";

export default async function Page() {
  const { session } = await serverClient();

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
