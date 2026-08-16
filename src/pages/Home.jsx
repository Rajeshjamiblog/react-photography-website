import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer/Footer";

function Home() {

    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Gallery />

            <Services />

            <Contact />

            <Footer />

        </>
    );

}


export default Home;