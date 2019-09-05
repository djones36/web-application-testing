import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// AAA - Arrange, Act, Assert
test("contains Balls and strikes fields", () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/Balls/i);
  getByText(/Strikes/i);
  // Assertion is if ^^^ is truthy
});
