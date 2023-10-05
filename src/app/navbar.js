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
          <button className="back-button" onClick={() => setDisplayForm(false)}>
            X
          </button>
          <NewImgForm displayForm={setDisplayForm} />
        </div>
      );
    }
    return <button onClick={() => setDisplayForm(true)}>New Image</button>;
  }

  return (
    <div className="navbar">
      <a className="home-link" href="/">
        Home
      </a>
      {renderNewImgForm()}
      <button className="signout-button" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
