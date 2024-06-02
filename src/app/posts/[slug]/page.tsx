import ServerClient from "../../actions/serverClient";
import PostComments from "../../actions/postComments";
import CommentForm from "../../commentForm";
import GetPost from "../../actions/getPost";
import Post from "../../components/post";
import SessionInterface from "../../components/sessionInterface";

interface PageProps {
  params: {
    slug: number;
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const { session } = await ServerClient();

  const post = await GetPost(slug);

  function renderCommentForm(id: number) {
    if (session) {
      return <CommentForm postIdData={id} />;
    }
  }

  if (post && post.url) {
    let liked = false;
    if (!!post.likes && !!post.likes[0]) {
      for (let like of post.likes) {
        if (session && like.user_id === session.user.id) {
          liked = true;
          break;
        }
      }
    }
    return (
      <>
        <div className="post-container">
          <Post
            liked={liked}
            post={post}
            session={session as unknown as SessionInterface}
          />
        </div>
        <PostComments postIdData={post.id} />
        {renderCommentForm(post.id)}
      </>
    );
  }
}
