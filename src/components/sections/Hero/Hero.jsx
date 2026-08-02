import { branding } from "@/config";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero__content">

                <h1>
                    {branding.siteName}
                </h1>

                <p>
                    Capturing beautiful moments that last forever
                </p>

                <button>
                    View Portfolio
                </button>

            </div>

        </section>
    );
}

export default Hero;