import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Heart from "../app/components/heart";

test("Liked heart displays properly", async () => {
  render(<Heart session={true} postLiked={true} postId={12} />);
  const heart = await screen.findByRole("heart");
  expect(heart.innerHTML).toBe("♥︎");
});

test("Unliked heart displays properly", async () => {
  render(<Heart session={true} postLiked={false} postId={12} />);
  const heart = await screen.findByRole("heart");
  expect(heart.innerHTML).toBe("♡");
});

test("Heart not displayed when there is no session", async () => {
  render(<Heart session={false} postLiked={false} postId={12} />);
  const heart = await screen.queryByRole("heart");
  expect(heart).toBeNull();
});
