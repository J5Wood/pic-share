// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export default async function GetUser() {
//   const supabase = createServerComponentClient({ cookies });
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   console.log("cookies: ", cookies());
//   console.log("slug: ", slug);

  //   const user = await (async () => {
  //     if (session) {
  //       const { data: res } = await supabase
  //         .from("posts")
  //         .select(`url, id, username, content, inserted_at, likes(user_id)`)
  //         .eq(`username`, ``)
  //         .order("id", { ascending: false });
  //       return res;
  //     } else {
  //       const { data: res } = await supabase
  //         .from("posts")
  //         .select(`url, id, username, content, inserted_at`)
  //         .order("id", { ascending: false });
  //       return res;
  //     }
  //   })();

//   function renderUser() {}
//   return <div></div>;
}
