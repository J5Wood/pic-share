"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [showChoices, setShowChoices] = useState(true);
  const [showUsername, setShowUsername] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          username: username,
        },
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
    // console.log("Sign in error. Please try again.");
  };

  function displayForm(e) {
    if (e.target.dataset["form"] === "signup") {
      setShowUsername(true);
    }
    if (e.target.dataset["form"] === "login") {
      setShowUsername(false);
    }
    setShowChoices(false);
  }

  function formDisplay() {
    if (showUsername) {
      return (
        <>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button onClick={handleSignUp}>Sign up</button>
        </>
      );
    }

    return (
      <>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />

        <button onClick={handleSignIn}>Sign in</button>
      </>
    );
  }

  if (showChoices) {
    return (
      <span>
        <button data-form="login" onClick={(e) => displayForm(e)}>
          Login
        </button>
        <p>OR</p>
        <button data-form="signup" onClick={(e) => displayForm(e)}>
          Sign Up
        </button>
      </span>
    );
  } else {
    return formDisplay();
  }
}
