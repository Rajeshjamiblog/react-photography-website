import { contact } from "@/config";
import Container from "@/components/layout/Container/Container";
import "./Contact.css";

function Contact() {

    return (
        <section className="contact">

            <Container className="contact__container">

                <div className="contact__content">

                    <h2 className="contact__title">
                        {contact.title}
                    </h2>

                    <p className="contact__description">
                        {contact.description}
                    </p>

                    <div className="contact__details">

                        <p className="contact__item">
                            Email: {contact.email}
                        </p>

                        <p className="contact__item">
                            Phone: {contact.phone}
                        </p>

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Contact;