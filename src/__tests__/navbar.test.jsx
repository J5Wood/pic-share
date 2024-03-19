import Navbar from "../app/navbar";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("Navbar component renders all buttons", async () => {
  render(<Navbar />);
  const newPostButton = await screen.findByText("New Post");
  const signOutButton = await screen.findByText("Sign out");
  const homeButton = await screen.findByText("Home");
  expect(newPostButton).toBeDefined();
  expect(signOutButton).toBeDefined();
  expect(homeButton).toBeDefined();
});
