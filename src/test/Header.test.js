import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Header from "../Header";

describe("Header component", () => {
  test("renders header correctly", () => {
    render(<Header />);
    const emojiSearchText = screen.getByText("Emoji Search");
    expect(emojiSearchText).toBeInTheDocument();
  });
});
