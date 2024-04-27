import serverClient from "./serverClient";

export default async function getPost(id) {
  const { supabase } = await serverClient();

  try {
    const { data, error } = await supabase
      .from("posts")
      .select(`url, id, username, user_id, content, inserted_at, likes!left(*)`)
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.log("Post retrtieval error", err);
  }
}
