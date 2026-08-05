import Container from "@/components/layout/Container/Container";
import navigation from "@/config/navigation";
import "./Navbar.css";

function Navbar() {

    return (
        <nav className="navbar">

            <Container className="navbar__container">

                <div className="navbar__logo">
                    PHOTOGRAPHY
                </div>

                <ul className="navbar__menu">
                    {
                        navigation.map((item) => (
                            <li
                                key={item.id}
                                className="navbar__menuItem"
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