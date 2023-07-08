import React from "react";
import Header from "./header";
import NewImgForm from "./newImgForm";

export default function Page() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <NewImgForm />
      <div className="posts">A bunch of posts</div>
    </>
  );
}
