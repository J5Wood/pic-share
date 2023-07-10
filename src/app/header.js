import React from "react";
import Login from "./login";
import NavBar from "./navbar";

export default function Header() {
  debugger;

  function renderHeader() {
    // ! Need auth provider
    const session = false;
    if (session) {
      return <NavBar />;
    }
    return <Login />;
  }

  return <div>{renderHeader()}</div>;
}
