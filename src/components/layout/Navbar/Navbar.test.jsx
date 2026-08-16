import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Navbar from "./Navbar";
import navigation from "@/config/navigation";


describe("Navbar", () => {

    it("renders Navbar logo", () => {

        render(<Navbar />);

        // Check logo is present
        const navbarLogo = screen.getByText("PHOTOGRAPHY");

        expect(navbarLogo).toBeInTheDocument();

    });


    it("renders all navigation menu items", () => {

        render(<Navbar />);

        // Verify all navigation items are rendered
        navigation.forEach((item) => {

            const menuItem = screen.getByText(item.label);

            expect(menuItem).toBeInTheDocument();

        });

    });


    it("opens mobile menu when toggle button is clicked", () => {

        render(<Navbar />);

        const toggleButton = screen.getByRole("button", {
            name: "Toggle navigation menu"
        });


        // Open menu
        fireEvent.click(toggleButton);


        expect(
            screen.getByText("Home")
        ).toBeInTheDocument();


        expect(
            screen.getByText("Contact")
        ).toBeInTheDocument();

    });


    it("changes toggle button icon when menu is opened", () => {

        render(<Navbar />);

        const toggleButton = screen.getByRole("button", {
            name: "Toggle navigation menu"
        });


        expect(toggleButton)
            .toHaveTextContent("☰");


        fireEvent.click(toggleButton);


        expect(toggleButton)
            .toHaveTextContent("✕");

    });


    it("closes menu when navigation item is clicked", () => {

        render(<Navbar />);

        const toggleButton = screen.getByRole("button", {
            name: "Toggle navigation menu"
        });


        // Open menu
        fireEvent.click(toggleButton);


        // Click navigation item
        fireEvent.click(
            screen.getByText("Home")
        );


        // Button should return to closed state
        expect(toggleButton)
            .toHaveTextContent("☰");

    });

});