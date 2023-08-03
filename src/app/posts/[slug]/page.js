import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Page({ params: { slug } }) {
  console.log(slug);

  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("posts")
    .select()
    .match({ id: slug })
    .single();

  return (
    <div className="posts-container">
      <div className="post-card" href={`posts/${data.id.toString()}`}>
        <Image
          src={data.url}
          width={250}
          height={250}
          alt="WHERE'S MY ALT TEXT?!?!"
        />
        <div>
          <h4>@{data.username}: </h4>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
