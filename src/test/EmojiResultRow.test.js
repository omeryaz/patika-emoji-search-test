import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test('Click to copy emoji', () => {
  render(<App/>);
  const Click = screen.getAllByTestId("row");
  expect(Click[0]).toHaveAttribute("data-clipboard-text");
})