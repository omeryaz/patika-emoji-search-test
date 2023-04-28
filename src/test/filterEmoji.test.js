import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import filterEmoji from "../filterEmoji";
import EmojiResults from "../EmojiResults";

describe("EmojiResults component", () => {
  test("renders filtered emoji list", () => {
    // Mock data for searchText and maxResults
    const searchText = "smile";
    const maxResults = 5;

    // Get filtered emoji list
    const filteredEmojis = filterEmoji(searchText, maxResults);

    // Render EmojiResults component with filtered emoji list
    render(<EmojiResults emojiData={filteredEmojis} />);

    // Check that each emoji is rendered
    filteredEmojis.forEach(emoji => {
      const emojiSymbol = screen.getByRole("img", { name: emoji.title });
      expect(emojiSymbol).toBeInTheDocument();
    });
  });
});
