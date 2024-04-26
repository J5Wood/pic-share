import { expect, test } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../app/login";

test("Allows correct login flow", async () => {
  const user = userEvent.setup();
  render(<Login />);

  const loginButton = await screen.findByRole("login-button");

  await act(async () => {
    user.click(loginButton);
  });

  const emailInput = await screen.findByRole("email-input");
  const passwordInput = await screen.findByRole("password-input");
  expect(emailInput).toBeDefined();
  expect(passwordInput).toBeDefined();

  const loginButton2 = screen.queryByRole("login-button");
  expect(loginButton2).toBeNull();

  const backButton = await screen.findByRole("auth-forms-back-button");
  await act(async () => {
    user.click(backButton);
  });

  const loginButton3 = await screen.findByRole("login-button");
  expect(loginButton3).toBeDefined();
});

test("Allows correct signup flow", async () => {
  const user = userEvent.setup();
  render(<Login />);

  const signupButton = await screen.findByRole("signup-button");
  await act(async () => {
    user.click(signupButton);
  });

  const emailInput = await screen.findByRole("email-input");
  const passwordInput = await screen.findByRole("password-input");
  expect(emailInput).toBeDefined();
  expect(passwordInput).toBeDefined();

  const signupButton2 = screen.queryByRole("signup-button");
  expect(signupButton2).toBeNull();

  const backButton = await screen.findByRole("auth-forms-back-button");
  await act(async () => {
    user.click(backButton);
  });

  const signupButton3 = await screen.findByRole("signup-button");
  expect(signupButton3).toBeDefined();
});
