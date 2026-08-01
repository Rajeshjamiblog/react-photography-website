import siteConfig from "../../config/siteConfig";
import "./Navbar.css";


function Navbar() {

    const menuItems = [
        {
            label: "Home",
            link: "#home"
        },
        {
            label: "About",
            link: "#about"
        },
        {
            label: "Gallery",
            link: "#gallery"
        },
        {
            label: "Services",
            link: "#services"
        },
        {
            label: "Contact",
            link: "#contact"
        }
    ];


    return (
        <header className="navbar">

            <div className="navbar__logo">
                {siteConfig.logoText}
            </div>


            <nav className="navbar__menu">

                {
                    menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.link}
                        >
                            {item.label}
                        </a>
                    ))
                }

            </nav>

        </header>
    );

}

export default Navbar;