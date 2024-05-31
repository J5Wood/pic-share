"use server";

import ServerClient from "./serverClient";

export default async function DeletePost(id: number) {
  const { supabase, session } = await ServerClient();
  const userId = session.user.id;

  try {
    //! Verify user has permissions to delete
    const { data, error } = await supabase
      .from("posts")
      .select()
      .match({ id: id, user_id: userId });
    if (error) throw error;

    //! Delete post
    if (!!data[0]) {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
    }
  } catch (err) {
    console.log("Post deletion error: ", err);
  }
}
