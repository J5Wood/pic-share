import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../app/header";

vi.mock("../app/actions/serverClient.ts", async () => {
  return {
    default: vi.fn(() => {
      return {
        session: true,
      };
    }),
  };
});

test("Header doesn't render login component with session", async () => {
  render(await Header());
  const loginButton = await screen.queryByText("Login");
  expect(loginButton).toBeNull();
});

test("Header renders navbar component with session", async () => {
  render(await Header());
  const newPostButton = await screen.findByText("New Post");
  expect(newPostButton).toBeDefined();
});
