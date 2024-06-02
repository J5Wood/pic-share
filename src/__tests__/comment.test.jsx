import { expect, test, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Comment from "../app/components/comment";

beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
});

vi.mock("../app/actions/serverClient.ts", async () => {
  return {
    default: vi.fn(() => {
      return {
        session: {
          user: {
            id: "3332ed8d-e2b5-422a-a329-45d127a36bc0",
          },
        },
      };
    }),
  };
});

vi.mock("../app/components/deleteCommentButton.tsx", async () => {
  return {
    default: vi.fn(() => {
      return <button>Mocked delete button</button>;
    }),
  };
});

const commentData = {
  content: "neat",
  username: "dr.doom",
  id: 93,
  user_id: "3332ed8d-e2b5-422a-a329-45d127a36bc0",
};

test("Comment renders poster's username", async () => {
  render(await Comment({ commentData }));
  const content = await screen.findByText("@dr.doom");
  expect(content).toBeDefined();
});

test("Comment renders content", async () => {
  render(await Comment({ commentData }));
  const content = await screen.findByText("neat");
  expect(content).toBeDefined();
});

test("Comment renders delete button with correct user id", async () => {
  render(await Comment({ commentData }));
  const content = await screen.findByText("Mocked delete button");
  expect(content).toBeDefined();
});
