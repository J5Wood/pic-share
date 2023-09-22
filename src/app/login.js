"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [showLoginButtons, setShowLoginButtons] = useState(true);
  const [showUsername, setShowUsername] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          username: username,
        },
      },
    });
    if (error) {
      displayError(error.message);
    }
    if (data.user) {
      if (data.user.identities?.length === 0) {
        const error =
          "An account with this email already exists. Please sign in with your existing account";
        displayError(error);
      } else {
        alert("Please check your email for a confirmation link");
      }
    }
    // ! Remove form after signup
    // ! Fix auth link that's sent to email
    // ? Need to tie auth user to public user to link posts and comments
    // Not really, users dont need reference ids,
    // posts and comments can be linked upon creation
    // just need access to users id when creating posts or images
    // public user table may not be necessary
    router.refresh();
  };

  function displayError(error) {
    const errorContainer = document.querySelector(".error-container");
    errorContainer.innerHTML = error;
  }

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      displayError(error.message);
    }
    if (data.error) {
      displayError(data.error.message);
    }
    router.refresh();
  };

  function displayForm(e) {
    if (e.target.dataset["form"] === "signup") {
      setShowUsername(true);
    }
    if (e.target.dataset["form"] === "login") {
      setShowUsername(false);
    }
    setShowLoginButtons(false);
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

  if (showLoginButtons) {
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
    return (
      <div className="form-container">
        {formDisplay()}
        <span className="error-container"></span>
      </div>
    );
  }
}
