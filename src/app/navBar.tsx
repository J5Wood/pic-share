"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import NewImgForm from "./newImgForm";

export default function NavBar() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
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
      <button
        className="new-image-button navbar-button"
        onClick={() => setDisplayForm(true)}
      >
        New Post
      </button>
    );
  }

  return (
    <div className="navbar">
      {renderNewImgForm()}
      <button
        className="signout-button navbar-button limit-button-height"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
