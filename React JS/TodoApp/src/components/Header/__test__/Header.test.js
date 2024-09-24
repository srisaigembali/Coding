import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  test("Header renders with a title", () => {
    render(<Header title='My Header' />);
    const headerElement = screen.getByText(/my header/i);
    expect(headerElement).toBeInTheDocument();
  });
});

// test("Header renders with a title", () => {
//   render(<Header title='My Header' />);
//   const headerElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headerElement).toBeInTheDocument();
// });

// test("Header renders with a title", () => {
//   render(<Header title='My Header' />);
//   const headerElement = screen.getByTitle("header");
//   expect(headerElement).toBeInTheDocument();
// });

// test("Header renders with a title", () => {
//   render(<Header title='My Header' />);
//   const headerElement = screen.getByTestId("header-1");
//   expect(headerElement).toBeInTheDocument();
// });

// test("Header renders with a title", () => {
//   render(<Header title='My Header' />);
//   const headerElements = screen.getAllByRole("heading");
//   expect(headerElements.length).toBe(2);
// });

// test("Header renders with a title", () => {
//   render(<Header title='My Header' />);
//   const headerElements = screen.getAllByTitle("header");
//   expect(headerElements.length).toBe(1);
// });
