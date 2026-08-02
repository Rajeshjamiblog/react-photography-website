import { branding } from "@/config";
import Button from "@/components/ui/Button";
import "./Hero.css";


function Hero() {

    function handlePortfolioClick() {
        console.log("Opening portfolio");
    }

    return (
        <section className="hero">

            <div className="hero__content">

                <h1>
                    {branding.siteName}
                </h1>

                <p>
                    Capturing beautiful moments that last forever
                </p>

                <Button variant="outline" 
                        onClick={handlePortfolioClick}>
                    View Portfolio
                </Button>

            </div>

        </section>
    );
}

export default Hero;