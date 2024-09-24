import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {
  test("AddInput renders input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Go to gym" } });
    expect(inputElement.value).toBe("Go to gym");
  });

  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.change(inputElement, { target: { value: "Go to gym" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
