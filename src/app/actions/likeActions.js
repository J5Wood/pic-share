"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function likePost(postId, liked) {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (liked) {
    const { data, error } = await supabase
      .from("likes")
      .delete()
      .match({ post_id: postId, user_id: session.user.id })
      .select();
    return data;
  } else {
    const { data, error } = await supabase
      .from("likes")
      .insert({ post_id: postId, user_id: session.user.id })
      .select();
    return data;
  }
}
