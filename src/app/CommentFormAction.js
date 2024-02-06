"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

export default async function CommentFormAction(postId, formData) {
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
