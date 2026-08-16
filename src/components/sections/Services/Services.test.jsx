import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Services from "./Services";
import { services } from "@/config";

describe("Services", () => {

    it("renders services title", () => {

        render(<Services />);

        const title = screen.getByText(services.title);

        expect(title).toBeInTheDocument();

    });

    it("renders all service titles", () => {

        render(<Services />);

        services.items.forEach((service) => {

            const serviceTitle = screen.getByText(service.title);

            expect(serviceTitle).toBeInTheDocument();

        });

    });

    it("renders all service descriptions", () => {

        render(<Services />);

        services.items.forEach((service) => {

            const description = screen.getByText(service.description);

            expect(description).toBeInTheDocument();

        });

    });

});