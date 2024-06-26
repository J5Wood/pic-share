"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LikePost from "../actions/likePost";
import SessionInterface from "./sessionInterface";

interface HeartProps {
  session: SessionInterface;
  postLiked: boolean;
  postId: number;
}

export default function Heart({ session, postLiked, postId }: HeartProps) {
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
    LikePost(id, liked);
    if (router) router.refresh();
  }

  if (session) {
    return (
      <span className="heart" onClick={handleClick} role="heart">
        {renderHeart()}
      </span>
    );
  }
}
