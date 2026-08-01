import galleryData from "../../data/galleryData";
import "./Gallery.css";


function Gallery() {


    return (

        <section className="gallery">


            <h2>
                Our Gallery
            </h2>


            <div className="gallery__grid">


                {
                    galleryData.map((item) => (

                        <div 
                            className="gallery__card"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />


                            <h3>
                                {item.title}
                            </h3>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}


export default Gallery;