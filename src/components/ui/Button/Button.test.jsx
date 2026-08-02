import { render, screen , fireEvent } from "@testing-library/react";
import Button from "./Button";


test("renders button text", () => {

    render(
        <Button>
            View Portfolio
        </Button>
    );


    const buttonElement = screen.getByText("View Portfolio");

    expect(buttonElement).toBeInTheDocument();

});


test("applies primary variant class", () => {

    render(
        <Button variant="primary">
            View Portfolio
        </Button>
    );


    const buttonElement = screen.getByText("View Portfolio");

    expect(buttonElement)
        .toHaveClass("button--primary");

});


test("calls onClick when button is clicked", () => {

    const handleClick = vi.fn();


    render(
        <Button onClick={handleClick}>
            View Portfolio
        </Button>
    );


    const buttonElement = screen.getByText("View Portfolio");


    fireEvent.click(buttonElement);


    expect(handleClick)
        .toHaveBeenCalled();

});


test("disables button when disabled prop is true", () => {

    render(
        <Button disabled>
            Processing...
        </Button>
    );


    const buttonElement = screen.getByText("Processing...");


    expect(buttonElement)
        .toBeDisabled();

});