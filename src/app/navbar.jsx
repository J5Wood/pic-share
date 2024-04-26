"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import NewImgForm from "./newImgForm";

export default function Navbar() {
  const [displayForm, setDisplayForm] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  function renderNewImgForm() {
    if (displayForm) {
      return (
        <div className="new-image-form">
          <NewImgForm displayForm={setDisplayForm} />
          <button
            className="close-button"
            onClick={() => setDisplayForm(false)}
          >
            X
          </button>
        </div>
      );
    }
    return (
      <button className="new-image-button" onClick={() => setDisplayForm(true)}>
        New Post
      </button>
    );
  }

  return (
    <div className="navbar">
      <a className="home-link limit-button-height" href="/">
        Home
      </a>
      {renderNewImgForm()}
      <button
        className="signout-button limit-button-height"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
