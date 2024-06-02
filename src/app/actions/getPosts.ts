import ServerClient from "./serverClient";

export default async function GetPosts() {
  const { supabase, session } = await ServerClient();

  try {
    const posts = await (async () => {
      if (session) {
        const { data: res, error } = await supabase
          .from("posts")
          .select(
            `url, id, username, user_id, content, inserted_at, likes(user_id)`
          )
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
