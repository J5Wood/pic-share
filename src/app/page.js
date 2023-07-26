import React from "react";
import Header from "./header";
import NewImgForm from "./newImgForm";
import GetPosts from "./GetPosts";

export default function Page() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <NewImgForm />
      <GetPosts />
    </>
  );
}
