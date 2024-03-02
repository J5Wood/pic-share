"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function deleteComment(id) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
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
