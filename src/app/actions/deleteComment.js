"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function deleteComment(id) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session.user.id;

  //! Verify user has permissions to delete
  const { data } = await supabase
    .from("comments")
    .select()
    .match({ id: id, user_id: userId });

  //! Delete comment
  if (!!data[0]) {
    const { err } = await supabase.from("comments").delete().eq("id", id);
  }
}
