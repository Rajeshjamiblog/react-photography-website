import { branding } from "@/config";
import "./Hero.css";
import Button from "@/components/ui/Button";

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

                <Button>
                    View Portfolio
                </Button>

            </div>

        </section>
    );
}

export default Hero;