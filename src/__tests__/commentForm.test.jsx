import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "../app/CommentForm";

test("Renders comment form", async () => {
  const user = userEvent.setup();
  render(CommentForm({ postIdData: 70 }));
  const contentInput = await screen.findByRole("comment-content");
  const submitButton = await screen.findByRole("form-submit-button");

  expect(contentInput.value).toMatch("");
  await user.type(contentInput, "Here is a comment on a cool post.");
  expect(contentInput.value).toMatch("a comment on a cool post");

  expect(submitButton).toBeDefined();
});
