"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function likePost(postId, liked) {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  try {
    if (liked) {
      const { data, error } = await supabase
        .from("likes")
        .delete()
        .match({ post_id: postId, user_id: session.user.id })
        .select();
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from("likes")
        .insert({ post_id: postId, user_id: session.user.id })
        .select();
      if (error) throw error;
      return data;
    }
  } catch (err) {
    console.log("Error liking a post: ", err);
  }
}
