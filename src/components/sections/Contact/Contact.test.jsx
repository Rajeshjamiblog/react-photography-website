import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Contact from "./Contact";
import { contact } from "@/config";


describe("Contact", () => {

    it("renders contact title", () => {

        render(<Contact />);

        const title = screen.getByText(contact.title);

        expect(title).toBeInTheDocument();

    });


    it("renders contact description", () => {

        render(<Contact />);

        const description = screen.getByText(contact.description);

        expect(description).toBeInTheDocument();

    });


    it("renders contact email", () => {

        render(<Contact />);

        const email = screen.getByText(
            `Email: ${contact.email}`
        );

        expect(email).toBeInTheDocument();

    });


    it("renders contact phone", () => {

        render(<Contact />);

        const phone = screen.getByText(
            `Phone: ${contact.phone}`
        );

        expect(phone).toBeInTheDocument();

    });

});