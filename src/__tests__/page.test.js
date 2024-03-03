import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import RootLayout from "../app/layout";

test("App Router", () => {
  render(<RootLayout />);
  const main = within(screen.getByRole("main"));
  expect(main).toBeDefined();
});
