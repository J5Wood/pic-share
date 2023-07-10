"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    // ! Inform user to check email for confirmation
    // ? Need to tie auth user to public user to link posts and comments
    // Not really, users dont need reference ids,
    // posts and comments can be linked upon creation
    // just need access to users id when creating posts or images
    // public user table may not be necessary
    router.refresh();
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
    // ! Handle Errors
    if (res.error) {
      console.log("Error: ", res.error.message);
    }
    // if (res.data.session) {
    //   router.push("/home");
    // }
    console.log("Sign in error. Please try again.");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      <input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}
