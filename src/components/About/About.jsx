import "./About.css";


function About() {

    return (

        <section className="about">

            <div className="about__content">

                <h2>
                    About Artsy by Sam
                </h2>


                <p>
                    We capture beautiful moments,
                    emotions and stories through
                    professional photography.
                </p>

            </div>


            <div className="about__image">

                <img
                    src="/images/about/about-01.svg"
                    alt="Photographer"
                />

            </div>

        </section>

    );

}


export default About;