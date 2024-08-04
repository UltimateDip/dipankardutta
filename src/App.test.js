import { render, screen } from "@testing-library/react";
import App from "./App";

// write a test to check if the App component renders a number that changes every second
test("renders a number that changes every second", () => {
  render(<App />);
  const numberElement = screen.getByText(/Alive \d+/);
  const number = Number(numberElement.textContent);
  setTimeout(() => {
    expect(Number(numberElement.textContent)).toBeGreaterThan(number);
  }, 1000);
});
