import { render , screen } from "@testing-library/react";
import Container from "./Container";

test("renders children inside container", () => {

    render(
        <Container>
            <h1>Photography Portfolio</h1>
        </Container>
    );

    const heading = screen.getByText("Photography Portfolio");

    expect(heading).toBeInTheDocument();

});

test("applies container class", () => {

    render(
        <Container>
            <p>Content</p>
        </Container>
    );

    const content = screen.getByText("Content");

    const wrapper = content.parentElement;

    expect(wrapper).toHaveClass("container");

});