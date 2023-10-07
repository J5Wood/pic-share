"use client";
import React, { useState } from "react";
import addItem from "./actions";
import { useRouter } from "next/navigation";

export default function newImgForm({ displayForm }) {
  const [content, setContent] = useState("");
  const router = useRouter();

  function clearFileInput() {
    const fileInput = document.querySelector("#file");
    fileInput.value = "";
  }

  async function handleSubmit(data) {
    await addItem(data);
    displayForm(false);
    router.refresh();
    setContent("");
    clearFileInput();
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="file">Add Image</label>
      <input type="file" id="file" name="file" accept="image/png, image/jpeg" />
      <label htmlFor="text-content">Description</label>
      <input
        onChange={(e) => setContent(e.target.value)}
        type="text"
        id="text-content"
        className="text-content"
        name="text-content"
        value={content}
      />
      <button className="submit-button" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
