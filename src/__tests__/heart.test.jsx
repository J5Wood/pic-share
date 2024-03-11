import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Heart from "../app/components/heart";

test("Heart displays properly", async () => {
  const session = true;
  const postLiked = true;
  const postId = 12;

  render(<Heart session={session} postLiked={postLiked} postId={postId} />);
  console.log("HERE: ", await screen.findByRole("heart"));
  // const main = findByRole("main");
  // expect("main").toBeDefined();
});
