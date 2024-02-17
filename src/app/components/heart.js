"use client";

import { useState } from "react";
import { likePost } from "../actions/likeActions";

export default function Heart({ session, postLiked, postId }) {
  // console.log(
  //   "Being pre refetched from main page and user page after hovering image. This is keeping heart from displaying correctly when navigating to post page if prefetch occurs before clicking heart."
  // );
  const [liked, setLiked] = useState(postLiked);
  const id = postId;

  function renderHeart() {
    if (liked) {
      return "♥︎";
    }
    return "♡";
  }

  function handleClick() {
    setLiked((prevState) => !prevState);
    likePost(id, liked);
  }

  if (session) {
    return (
      <span className="heart" onClick={handleClick}>
        {renderHeart()}
      </span>
    );
  }
}
