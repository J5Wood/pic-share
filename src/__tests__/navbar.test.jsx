import Navbar from "../app/navBar";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("Navbar component renders all buttons", async () => {
  render(<Navbar />);
  const newPostButton = await screen.findByText("New Post");
  const signOutButton = await screen.findByText("Sign out");
  expect(newPostButton).toBeDefined();
  expect(signOutButton).toBeDefined();
});
