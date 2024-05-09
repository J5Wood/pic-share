"use server";

import ServerClient from "./serverClient";

export default async function DeleteComment(id) {
  const { supabase, session } = await ServerClient();
  const userId = session.user.id;

  try {
    //! Verify user has permissions to delete
    const { data, error } = await supabase
      .from("comments")
      .select()
      .match({ id: id, user_id: userId });

    //! Delete comment
    if (error) throw error;
    if (!!data[0]) {
      const { error } = await supabase.from("comments").delete().eq("id", id);
      if (error) throw error;
    }
  } catch (err) {
    console.log("Comment deletion error: ", err);
  }
}
