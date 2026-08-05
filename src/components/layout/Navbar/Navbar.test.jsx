import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Navbar from "./Navbar";
import navigation from "@/config/navigation";

describe("Navbar", () => {

    it("renders Navbar", () => {

        // Render Navbar
        render(<Navbar />);

        // Check logo is present
        const navbarLogo = screen.getByText("PHOTOGRAPHY");

        expect(navbarLogo).toBeInTheDocument();

    });

    it("renders all navigation menu items", () => {

        // Render Navbar
        render(<Navbar />);

        // Verify all navigation items are rendered
        navigation.forEach((item) => {

            const menuItem = screen.getByText(item.label);

            expect(menuItem).toBeInTheDocument();

        });

    });

});