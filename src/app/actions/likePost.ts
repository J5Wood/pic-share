"use server";

import ServerClient from "./serverClient";

export default async function LikePost(postId: number, liked: boolean) {
  const { supabase, session } = await ServerClient();

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
