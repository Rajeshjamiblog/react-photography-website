import { useState } from "react";

import Container from "@/components/layout/Container/Container";
import navigation from "@/config/navigation";
import "./Navbar.css";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);


    function toggleMenu() {
        setIsOpen(!isOpen);
    }


    function closeMenu() {
        setIsOpen(false);
    }


    return (
        <nav className="navbar">

            <Container className="navbar__container">

                <div className="navbar__logo">
                    PHOTOGRAPHY
                </div>


                <button
                    className="navbar__toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>


                <ul
                    className={`navbar__menu ${
                        isOpen ? "navbar__menu--open" : ""
                    }`}
                >

                    {
                        navigation.map((item) => (
                            <li
                                key={item.id}
                                className="navbar__menuItem"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </li>
                        ))
                    }

                </ul>


            </Container>

        </nav>
    );

}

export default Navbar;