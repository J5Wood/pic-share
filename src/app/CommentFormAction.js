"use server";

import ServerClient from "./actions/serverClient";

export default async function CommentFormAction(postId, formData) {
  const { supabase, session } = await ServerClient();

  if (!session) {
    console.error("No Session, Must be logged in to comment");
    return;
  }

  const content = formData.get("content");
  const userId = session.user.id;
  const username = session.user.user_metadata.username;

  try {
    const { data, error } = await supabase.from("comments").insert([
      {
        content: content,
        user_id: userId,
        username: username,
        post_id: postId,
      },
    ]);
    if (error) throw error;
  } catch (err) {
    console.log("Comment submission error: ", err);
  }
}
