import ServerClient from "./serverClient";
import Comment from "../components/comment";

export default async function PostComments({ postIdData }) {
  const { supabase } = await ServerClient();

  function renderComments(comments) {
    if (comments) {
      return comments.map((comment) => {
        return <Comment commentData={comment} key={comment.id} />;
      });
    }
  }

  try {
    const comments = await (async () => {
      const { data: res, error } = await supabase
        .from("comments")
        .select(`content, username, id, user_id`)
        .eq("post_id", postIdData);
      if (error) throw error;
      return res;
    })();

    return <div className="comments-container">{renderComments(comments)}</div>;
  } catch (err) {
    console.log("Error retrieving a post's comments: ", err);
  }
}
