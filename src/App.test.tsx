// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { TextCleaner } from './functions/TextCleaner'
test("TextCleaner", () => {
  expect(TextCleaner("\nAI:\n\nHello! How can I help you today?")).toBe("AI:Hello! How can I help you today?");
});