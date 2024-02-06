import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Comment from "../components/Comment";

export default async function PostComments({ postIdData }) {
  const supabase = createServerComponentClient({ cookies });
  const comments = await (async () => {
    const { data: res } = await supabase
      .from("comments")
      .select(`content, username`)
      .eq("post_id", postIdData);
    return res;
  })();

  function renderComments() {
    if (comments) {
      return comments.map((comment) => {
        return <Comment commentData={comment} />;
      });
    }
  }
  return <div className="comments-container">{renderComments()}</div>;
}
