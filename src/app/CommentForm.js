import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CommentForm({ postIdData }) {
  async function createInvoice(formData) {
    "use server";

    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      console.error("No Session, Must be logged in to comment");
      return;
    }

    const content = formData.get("content");
    const userId = session.user.id;
    const username = session.user.user_metadata.username;

    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          content: content,
          user_id: userId,
          username: username,
          post_id: postIdData,
        },
      ])
      .select();

    console.log("Saved comment data: ", data);
  }

  return (
    <form action={createInvoice}>
      <label htmlFor="content">Comment:</label>
      <input name="content" id="content" type="text" />
      <input type="submit" />
    </form>
  );
}
