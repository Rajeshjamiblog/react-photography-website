import siteConfig from "../../config/siteConfig";
import "./Navbar.css";


function Navbar() {

    return (
        <header className="navbar">

            <div className="navbar__logo">
                {siteConfig.logoText}
            </div>

            <nav className="navbar__menu">

                <a href="#">
                    Home
                </a>

                <a href="#">
                    About
                </a>

                <a href="#">
                    Gallery
                </a>

                <a href="#">
                    Contact
                </a>

            </nav>

        </header>
    );

}

export default Navbar;