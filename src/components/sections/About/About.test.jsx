import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import About from "./About";
import { about, branding } from "@/config";

describe("About", () => {

    it("renders about title", () => {

        render(<About />);

        const title = screen.getByText(about.title);

        expect(title).toBeInTheDocument();

    });

    it("renders about description", () => {

        render(<About />);

        const description = screen.getByText(about.description);

        expect(description).toBeInTheDocument();

    });

    it("renders about image", () => {

        render(<About />);

        const image = screen.getByRole("img", {
            name: branding.siteName
        });

        expect(image).toBeInTheDocument();

    });

});