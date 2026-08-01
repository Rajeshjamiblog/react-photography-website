import servicesData from "@/data/servicesData";
import "./Services.css";


function Services() {

    return (

        <section className="services">

            <h2>
                Our Services
            </h2>


            <div className="services__grid">

                {
                    servicesData.map((service) => (

                        <div
                            className="services__card"
                            key={service.id}
                        >

                            <h3>
                                {service.title}
                            </h3>


                            <p>
                                {service.description}
                            </p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}


export default Services;