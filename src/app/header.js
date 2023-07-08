import React from "react";
import Login from "./login";
import NavBar from "./navbar";
export default function Header() {
  debugger;
  function renderHeader() {
    // check for session
    debugger;
    let session = true;
    if (session) {
      return <NavBar />;
    }
    return <Login />;
  }

  return <div>{renderHeader()}</div>;
}
