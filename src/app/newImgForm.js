"use client";
import React from "react";
import addItem from "./actions";
import { useRouter } from "next/navigation";

export default function newImgForm() {
  const router = useRouter();

  async function handleSubmit(data) {
    await addItem(data);
    router.refresh();
  }

  return (
    <form style={{ padding: "50px" }} action={handleSubmit}>
      <label htmlFor="file">New Post</label>
      <input type="file" id="file" name="file" accept="image/png, image/jpeg" />
      <label htmlFor="text-content"></label>
      <input type="text" id="text-content" name="text-content" />
      <button type="submit">YEET</button>
    </form>
  );
}
