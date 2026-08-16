import { footer } from "@/config";
import Container from "@/components/layout/Container/Container";
import "./Footer.css";

function Footer() {

    return (
        <footer className="footer">

            <Container className="footer__container">

                <div className="footer__content">

                    <h2 className="footer__brand">
                        {footer.brandName}
                    </h2>

                    <p className="footer__description">
                        {footer.description}
                    </p>

                    <p className="footer__copyright">
                        {footer.copyright}
                    </p>

                </div>

            </Container>

        </footer>
    );
}

export default Footer;