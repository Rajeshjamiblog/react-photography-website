import siteConfig from "../../config/siteConfig";
import "./Navbar.css";


function Navbar() {

    const navigation = siteConfig.navigation;


    return (
        <header className="navbar">

            <div className="navbar__logo">

                {
                    siteConfig.branding.logo.image ? (

                        <img
                            src={siteConfig.branding.logo.image}
                            alt={siteConfig.branding.logo.alt}
                        />

                    ) : (

                        siteConfig.branding.logo.text

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