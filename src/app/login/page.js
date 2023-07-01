import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

// ? just make a client component? Can't find a way to navigate from a server component.

export default async function Login() {
  const handleSignUp = async (formData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const supabase = createServerActionClient({ cookies });
    const x = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/home",
      },
    });
    console.log("x: ", x);
    revalidatePath("/");
  };

  const handleSignIn = async (formData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const supabase = createServerActionClient({ cookies });
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    revalidatePath("/");
    if (res.error) {
      console.log("ERROR: ", res.error);
    }
    console.log("true?", res.data.session);
    if (res.data.session) {
    }
  };

  const handleSignOut = async () => {
    "use server";
    const supabase = createServerActionClient({ cookies });
    const x = await supabase.auth.signOut();
    console.log("x: ", x);
    revalidatePath("/");
  };

  return (
    <form action={handleSignUp}>
      <input name="email" />
      <input type="password" name="password" />
      <button>Sign up</button>
      <button formAction={handleSignIn}>Sign in</button>
      <button formAction={handleSignOut}>Sign out</button>
    </form>
  );
}
