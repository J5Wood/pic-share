"use client";

import { useState } from "react";
import { likePost } from "../likeActions";

export default function Heart({ postLiked, postId }) {
  const [liked, setLiked] = useState(postLiked);
  const id = postId;

  function renderHeart() {
    if (liked) {
      return "♥︎";
    }
    return "♡";
  }

  function handleClick() {
    likePost(id);
    setLiked(!liked);
  }

  return (
    <span className="heart" onClick={handleClick}>
      {renderHeart()}
    </span>
  );
}
