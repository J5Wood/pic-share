import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Heart from "../app/components/heart";

vi.mock("../app/actions/likeActions", async () => {
  return {
    likePost: vi.fn(),
  };
});

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

test("Expect heart to change when clicked", async () => {
  render(<Heart session={true} postLiked={false} postId={12} />);
  const heart = await screen.findByRole("heart");
  expect(heart.innerHTML).toBe("♡");
  await fireEvent.click(heart);
  expect(heart.innerHTML).toBe("♥︎");
  await fireEvent.click(heart);
  expect(heart.innerHTML).toBe("♡");
});
