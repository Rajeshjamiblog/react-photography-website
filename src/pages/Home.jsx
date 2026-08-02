import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Gallery from "@/components/sections/Gallery/Gallery";
import Services from "@/components/sections/Services/Services";

function Home() {

    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Gallery />

            <Services />

        </>
    );

}


export default Home;