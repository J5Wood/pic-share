"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [showLoginButtons, setShowLoginButtons] = useState(true);
  const [showSignup, setShowSignup] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  function displayForm(e: React.MouseEvent) {
    const targetElement = e.target as HTMLElement;
    if (targetElement.dataset["form"] === "signup") {
      setShowSignup(true);
    }
    if (targetElement.dataset["form"] === "login") {
      setShowSignup(false);
    }
    setShowLoginButtons(false);
  }

  function formDisplay() {
    if (showSignup) {
      return (
        <>
          <form>
            {emailAndPasswordFields()}
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              role="username-input"
            />
            <button className="auth-submit-button" onClick={handleSignUp}>
              Sign up
            </button>
          </form>
        </>
      );
    }

    return (
      <>
        <form>
          {emailAndPasswordFields()}
          <button className="auth-submit-button" onClick={handleSignIn}>
            Sign in
          </button>
        </form>
      </>
    );
  }

  function emailAndPasswordFields() {
    return (
      <>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          role="email-input"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          role="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </>
    );
  }

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}`,
        data: {
          username: username,
        },
      },
    });
    if (error) {
      console.log(typeof error);
      displayError(error.message);
    }
    if (data.user) {
      if (data.user.identities?.length === 0) {
        const error =
          "An account with this email already exists. Please sign in with your existing account";
        displayError(error);
      } else {
        alert("Please check your email for a confirmation link");
        setShowLoginButtons(true);
      }
    }
    router.refresh();
  };

  const handleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      displayError(error.message);
    }
    router.refresh();
  };

  function displayError(error) {
    const errorContainer = document.querySelector(".error-container");
    errorContainer.innerHTML = error;
  }

  if (showLoginButtons) {
    return (
      <div className="auth-button-display">
        <button
          className="auth-button navbar-button"
          data-form="login"
          onClick={(e) => displayForm(e)}
          role="login-button"
        >
          Login
        </button>
        <p>OR</p>
        <button
          className="signup-button auth-button navbar-button"
          data-form="signup"
          onClick={(e) => displayForm(e)}
          role="signup-button"
        >
          Sign Up
        </button>
      </div>
    );
  } else {
    return (
      <div className="auth-form-display">
        <button
          className="back-button"
          role="auth-forms-back-button"
          onClick={() => setShowLoginButtons(true)}
        >
          ←
        </button>
        {formDisplay()}
        <span className="error-container"></span>
      </div>
    );
  }
}
