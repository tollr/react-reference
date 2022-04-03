import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders Hello world as text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText('good to see you', {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders changed if the button was clicked", () => {
    render(<Greeting />);

    userEvent.click(screen.getByRole('button'));

    const helloWorldElement = screen.getByText('Changed!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Does not render good to see you if button is clicked", () => {
    render(<Greeting />);

    userEvent.click(screen.getByRole('button'));

    const helloWorldElement = screen.queryByText('good to see you', {exact: false});
    expect(helloWorldElement).toBeNull();
  });

});
