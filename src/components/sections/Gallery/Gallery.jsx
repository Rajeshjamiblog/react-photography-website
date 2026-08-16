import { gallery } from "@/config";
import Container from "@/components/layout/Container/Container";
import "./Gallery.css";

function Gallery() {

    return (
        <section className="gallery">

            <Container className="gallery__container">

                <div className="gallery__content">

                    <h2 className="gallery__title">
                        {gallery.title}
                    </h2>

                    <div className="gallery__grid">

                        {
                            gallery.images.map((image) => (
                                <div
                                    key={image.id}
                                    className="gallery__item"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                            ))
                        }

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Gallery;