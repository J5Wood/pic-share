import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getPost(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("posts")
    .select(`url, id, username, content, inserted_at, likes!left(*)`)
    .eq("id", id)
    .single();

  return data;
}
