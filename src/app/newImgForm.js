"use client";
import React from "react";

export default function newImgForm() {
  function handleImageSubmission(e) {
    e.preventDefault();
    debugger;
  }

  return (
    <form
      style={{ padding: "50px" }}
      onSubmit={(e) => handleImageSubmission(e)}
    >
      <label htmlFor="new-image">New Post</label>
      <input
        type="file"
        id="new-image"
        name="newImage"
        accept="image/png, image/jpeg"
      />
    </form>
  );
}
