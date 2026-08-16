import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Gallery from "./Gallery";
import { gallery } from "@/config";

describe("Gallery", () => {

    it("renders gallery title", () => {

        render(<Gallery />);

        const title = screen.getByText(gallery.title);

        expect(title).toBeInTheDocument();

    });

    it("renders all gallery images", () => {

        render(<Gallery />);

        const images = screen.getAllByRole("img");

        expect(images).toHaveLength(gallery.images.length);

    });

    it("renders gallery images with correct alt text", () => {

        render(<Gallery />);

        gallery.images.forEach((image) => {

            const galleryImage = screen.getByRole("img", {
                name: image.alt
            });

            expect(galleryImage).toBeInTheDocument();

        });

    });

});