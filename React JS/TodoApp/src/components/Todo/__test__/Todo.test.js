import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button", { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Header", () => {
  test("should render todo in todos list", () => {
    render(<MockTodo />);
    addTask(["go to gym"]);
    const divElement = screen.getByText(/go to gym/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render todos in todos list", () => {
    render(<MockTodo />);
    addTask(["go to gym", "go to office", "eat", "sleep"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(4);
  });

  test("should check todo does not have active class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["go to gym", "go to office", "eat", "sleep"]);
    const divElement = screen.getByText(/go to gym/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("should check todo is active when clicked", () => {
    render(<MockTodo />);
    addTask(["go to gym", "go to office", "eat", "sleep"]);
    const divElement = screen.getByText(/go to gym/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
