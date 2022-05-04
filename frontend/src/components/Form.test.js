import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

beforeEach(() => {
  render(<Form />);
});

test("test 2 + 2", () => {
  expect("Prince").toBe("Prince");
});

test("should be in the document", () => {
  const divElem = screen.getByTestId("form");
  expect(divElem).toBeInTheDocument;
});

test("should have epmty value on start", () => {
  const emailInputElem = screen.getByRole("textbox");
  const passwordInputElem = screen.getByLabelText("Password");
  const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i);

  expect(emailInputElem.value).toBe("");
  expect(passwordInputElem.value).toBe("");
  expect(confirmPasswordInputElem.value).toBe("");
});

test("should be able to type in the input box", () => {
  const emailInputElem = screen.getByRole("textbox");
  const passwordInputElem = screen.getByLabelText("Password");
  const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i);

  userEvent.type(emailInputElem, "jake@gmail.com");
  userEvent.type(passwordInputElem, "password");
  userEvent.type(confirmPasswordInputElem, "password");

  expect(emailInputElem.value).toBe("jake@gmail.com");
  expect(passwordInputElem.value).toBe("password");
  expect(confirmPasswordInputElem.value).toBe(passwordInputElem.value);
});
