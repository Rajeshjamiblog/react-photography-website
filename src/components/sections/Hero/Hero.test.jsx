import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { branding, hero } from "@/config";
import { beforeEach, describe, expect, it, vi } from "vitest";


describe("Hero", () => {

    //Commenting because it is rendering twice for - "calls portfolio click handler"
    //declaring render(<Hero />) inside each method
    // beforeEach(() => {
    //     render(<Hero />);
    // });

    it("renders site name", () => {

        render(<Hero />);

        // Check siteName is present
        const siteName = screen.getByText(branding.siteName);

        expect(siteName).toBeInTheDocument();
    });

    it("renders subtitle", () => {

        render(<Hero />);

        // Check subTitle is present
        const subTitle = screen.getByText(hero.subtitle);

        expect(subTitle).toBeInTheDocument();
    });


    it("renders portfolio button", () => {

        render(<Hero />);

        // Check portfolio button is present
        const portfolioButton = screen.getByText(hero.buttonText);

        expect(portfolioButton).toBeInTheDocument();

    });

    // it("calls portfolio click handler", () => {

    //     render(<Hero />);

    //     const handleClick = vi.fn();

    //     render(
    //         <Hero onPortfolioClick={handleClick} />
    //     );

    //     const portfolioButton = screen.getByText(hero.buttonText);

    //     fireEvent.click(portfolioButton);

    //     expect(handleClick)
    //         .toHaveBeenCalled();

    // });

    it("calls portfolio click handler", () => {

        const handleClick = vi.fn();

        render(
            <Hero onPortfolioClick={handleClick} />
        );

        const portfolioButton = screen.getByRole("button", {
            name: hero.buttonText
        });

        fireEvent.click(portfolioButton);

        expect(handleClick)
            .toHaveBeenCalled();

    });

});