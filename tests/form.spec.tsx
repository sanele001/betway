import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signin from "@/components/form";

describe("SignInForm", () => {
  it("renders a form", () => {
    const { getByTestId } = render(<Signin />);
    const formElement = getByTestId("signInForm");
    expect(formElement).toBeInTheDocument();
  });
});

describe("SignIn component", () => {
  it('should render an h2 element with the text "Sign in"', () => {
    const { getByTestId } = render(<Signin />);
    const h2Element = getByTestId("signinTitle");
    expect(h2Element).toBeInTheDocument();
  });
});
