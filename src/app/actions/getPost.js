import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getPost(id) {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("posts")
      .select(`url, id, username, content, inserted_at, likes!left(*)`)
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.log("Post retrtieval error", err);
  }
}
