import { services } from "@/config";
import Container from "@/components/layout/Container/Container";
import "./Services.css";

function Services() {

    return (
        <section className="services">

            <Container className="services__container">

                <div className="services__content">

                    <h2 className="services__title">
                        {services.title}
                    </h2>

                    <div className="services__grid">

                        {
                            services.items.map((service) => (
                                <div
                                    key={service.id}
                                    className="services__item"
                                >

                                    <h3 className="services__item-title">
                                        {service.title}
                                    </h3>

                                    <p className="services__item-description">
                                        {service.description}
                                    </p>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Services;