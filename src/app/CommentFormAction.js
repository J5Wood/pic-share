"use server";

import { revalidatePath } from "next/cache";
import serverClient from "./actions/serverClient";

export default async function CommentFormAction(postId, formData) {
  const { supabase, session } = await serverClient();

  if (!session) {
    console.error("No Session, Must be logged in to comment");
    return;
  }

  const content = formData.get("content");
  const userId = session.user.id;
  const username = session.user.user_metadata.username;
  const { data, error } = await supabase.from("comments").insert([
    {
      content: content,
      user_id: userId,
      username: username,
      post_id: postId,
    },
  ]);
  revalidatePath();
}
