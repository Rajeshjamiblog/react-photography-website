import { branding,hero } from "@/config";
import Container from "@/components/layout/Container/Container";
import Button from "@/components/ui/Button";
import "./Hero.css";


function Hero() {

    function handlePortfolioClick() {
        console.log("Opening portfolio");
    }

    return (
        <section className="hero"
                style={{
                    "--hero-image":`url(${branding.images.hero})`
                    
                }}    >
            <Container className="hero__container">
                <div className="hero__content">
                    
                    <h1 className="hero__title">
                        {branding.siteName}
                    </h1>

                    <p className="hero__subtitle">
                        {hero.subtitle}    
                    </p>

                    <div className="hero__actions">
                        <Button variant="outline"
                                onClick={handlePortfolioClick}>
                            {hero.buttonText}
                        </Button>
                    </div>
                

                </div>

            </Container>
        </section>
    );
}

export default Hero;