import React from "react";
import Login from "./login";
import NavBar from "./navbar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  function renderHeader() {
    if (session) {
      return <NavBar />;
    }
    return <Login />;
  }

  return <>{renderHeader()}</>;
}
