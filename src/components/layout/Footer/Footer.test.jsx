import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "./Footer";
import { footer } from "@/config";


describe("Footer", () => {

    it("renders footer brand name", () => {

        render(<Footer />);

        const brandName = screen.getByText(footer.brandName);

        expect(brandName).toBeInTheDocument();

    });


    it("renders footer description", () => {

        render(<Footer />);

        const description = screen.getByText(footer.description);

        expect(description).toBeInTheDocument();

    });


    it("renders footer copyright", () => {

        render(<Footer />);

        const copyright = screen.getByText(footer.copyright);

        expect(copyright).toBeInTheDocument();

    });

});