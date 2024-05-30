import ServerClient from "../../actions/serverClient";
import GetUserPosts from "../../actions/getUserPosts";
import Post from "../../components/post";
import PostInterface from "../../components/PostInterface";

export default async function Page({ params: { slug } }) {
  const { session } = await ServerClient();

  const posts = await GetUserPosts(slug);

  function renderPosts() {
    if (posts) {
      return posts.map((post: PostInterface) => {
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
    <div className="user-page">
      <h2 className="username-heading">@{slug}</h2>
      <div className="divider" />
      <div className="posts-container">{renderPosts()}</div>
    </div>
  );
}
