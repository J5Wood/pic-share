import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../app/header";

vi.mock("../app/actions/serverClient.ts", async () => {
  return {
    default: vi.fn(() => {
      return {
        session: false,
      };
    }),
  };
});

test("Header renders login component with no session", async () => {
  render(await Header());
  const loginButton = await screen.findByText("Login");
  expect(loginButton).toBeDefined();
});

test("Header doesn't render navbar component with no session", async () => {
  render(await Header());
  const newPostButton = await screen.queryByText("New Post");
  expect(newPostButton).toBeNull();
});
