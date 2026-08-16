import { branding, about } from "@/config";
import Container from "@/components/layout/Container/Container";
import "./About.css";


function About() {

    return (

        <section className="about">

            <Container className="about__container">

                <div className="about__content">
                    
                    <div className="about__image">

                        <img
                            src={branding.images.about}
                            alt={branding.siteName}
                        />

                    </div>

                    <div className="about__text">

                        <h2 className="about__title">
                            {about.title}
                        </h2>

                        <p className="about__description">
                            {about.description}
                        </p>
                    </div>


                </div>


                

            </Container>

        </section>

    );

}


export default About;