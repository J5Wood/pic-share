import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function GetPosts() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts } = await supabase.from("posts").select();

  function renderPosts() {
    if (posts) {
      return posts.map((post) => {
        return (
          <div>
            <Image
              src={post.url}
              width={250}
              height={250}
              alt="WHERE'S MY ALT TEXT?!?!"
            />
            <h4>{post.username}</h4>
          </div>
        );
      });
    }
  }
  return renderPosts();
}
