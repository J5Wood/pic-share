import serverClient from "./serverClient";
import Comment from "../components/Comment";

export default async function PostComments({ postIdData }) {
  const { supabase } = await serverClient();

  try {
    const comments = await (async () => {
      const { data: res, error } = await supabase
        .from("comments")
        .select(`content, username, id, user_id`)
        .eq("post_id", postIdData);
      if (error) throw error;
      return res;
    })();

    function renderComments() {
      if (comments) {
        return comments.map((comment) => {
          return <Comment commentData={comment} key={comment.id} />;
        });
      }
    }
    return <div className="comments-container">{renderComments()}</div>;
  } catch (err) {
    console.log("Error retrieving a post's comments: ", err);
  }
}
