"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { likePost } from "../actions/likeActions";

export default function Heart({ session, postLiked, postId }) {
  const router = useRouter();
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
    router.refresh();
  }

  if (session) {
    return (
      <span className="heart" onClick={handleClick} role="heart">
        {renderHeart()}
      </span>
    );
  }
}
