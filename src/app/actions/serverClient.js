import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ServerClient() {
  const cookieStore = cookies();

  const supabase = await createServerComponentClient({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { supabase: supabase, session: session };
}
