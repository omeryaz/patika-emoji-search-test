import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EmojiResults from "../EmojiResults";

describe("EmojiResults component", () => {
  test("renders emoji list on initial load", () => {
    const emojiData = [
      { title: "grinning face", symbol: "😀" },
      { title: "smiling face", symbol: "😊" },
      { title: "winking face", symbol: "😉" }
    ];
    render(<EmojiResults emojiData={emojiData} />);
    emojiData.forEach(emoji => {
      const emojiSymbol = screen.getByRole("img", { name: emoji.title });
      expect(emojiSymbol).toBeInTheDocument();
    });
  });
});
