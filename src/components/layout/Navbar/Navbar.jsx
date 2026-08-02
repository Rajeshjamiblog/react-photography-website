import { branding, navigation } from "@/config";
import "./Navbar.css";

function Navbar() {

    return (
        <header className="navbar">

            <div className="navbar__logo">

                {
                    branding.logo.image ? (

                        <img
                            src={branding.logo.image}
                            alt={branding.logo.alt}
                        />

                    ) : (

                        branding.logo.text

                    )
                }

            </div>

            <nav className="navbar__menu">

                {
                    navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
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