import React from "react";
import { addItem } from "./actions";

export default function newImgForm() {
  return (
    <form style={{ padding: "50px" }} action={addItem}>
      <label htmlFor="file">New Post</label>
      <input type="file" id="file" name="file" accept="image/png, image/jpeg" />
      <button type="submit">YEET</button>
    </form>
  );
}
