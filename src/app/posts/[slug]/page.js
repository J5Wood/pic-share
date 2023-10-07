import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "../../components/post";

export default async function Page({ params: { slug } }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("posts")
    .select()
    .match({ id: slug })
    .single();

  return (
    <div className="post-container">
      <div className="post-card">
        <Post postData={data} key={data.id} />
      </div>
    </div>
  );
}
