import Post from "../app/components/post";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const postData = {
  url: "https://jeremywood.tech/_astro/bust.ed0c9b3a.png",
  liked: true,
  session: true,
  id: 12,
  user_id: 12,
  inserted_at: "2023-07-31 21:23:14.725161+00",
  username: "Billiam",
  content: "Magna fringilla urna porttitor rhoncus dolor purus.",
};

vi.mock("../app/components/deletePostButton.jsx", async () => {
  return {
    default: vi.fn(() => {
      return <button>Mocked Delete Button</button>;
    }),
  };
});

test("A post should display an image", async () => {
  render(<Post post={postData} />);
  const postImage = await screen.getByRole("post-image");
  expect(postImage).toBeDefined();
  expect(postImage.src).toBeDefined();
});

test("A post should list the poster and content", async () => {
  render(<Post post={postData} />);
  const postContent = await screen.getByRole("post-content");
  expect(postContent).toBeDefined();
  expect(postContent.children[0].innerHTML).toMatch("@Billiam");
  expect(postContent.children[1].innerHTML).toMatch(
    "Magna fringilla urna porttitor rhoncus dolor purus."
  );
});

test("A post should render a delete button when that user is logged in", async () => {
  render(<Post post={postData} session={{ user: { id: 12 } }} liked={true} />);
  const content = await screen.findByText("Mocked Delete Button");
  expect(content).toBeDefined();
});

test("A post should render a heart when there is a session", async () => {
  render(<Post post={postData} session={{ user: { id: 10 } }} liked={true} />);
  expect(screen.getByRole("heart")).toBeDefined();
});

test("A post should not render a heart when there is no session", async () => {
  render(<Post post={postData} session={false} liked={false} />);
  const heart = screen.queryByRole("heart");
  expect(heart).toBe(null);
});
