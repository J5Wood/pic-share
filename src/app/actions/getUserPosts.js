import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getUserPosts(username) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const posts = (async () => {
    if (session) {
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at, likes(user_id)`)
        .eq("username", username)
        .order("id", { ascending: false });
      return res;
    } else {
      const { data: res } = await supabase
        .from("posts")
        .select(`url, id, username, content, inserted_at`)
        .eq("username", username)
        .order("id", { ascending: false });
      return res;
    }
  })();

  return posts;
}
