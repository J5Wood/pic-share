import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function GetPosts() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  try {
    const posts = await (async () => {
      if (session) {
        const { data: res, error } = await supabase
          .from("posts")
          .select(`url, id, username, content, inserted_at, likes(user_id)`)
          .order("id", { ascending: false });
        if (error) throw error;
        return res;
      } else {
        const { data: res, error } = await supabase
          .from("posts")
          .select(`url, id, username, content, inserted_at`)
          .order("id", { ascending: false });
        if (error) throw error;
        return res;
      }
    })();

    return posts;
  } catch (err) {
    console.log("Error retrieving posts: ", err);
  }
}
