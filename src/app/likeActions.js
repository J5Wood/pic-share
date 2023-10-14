"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function likePost(postId) {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("Actions, Post Id: ", postId);
  console.log("Session: ", session.user.id);

  const { data, error } = await supabase
    .from("likes")
    .insert({ post_id: postId, user_id: session.user.id })
    .select();

  console.log(data);
}
