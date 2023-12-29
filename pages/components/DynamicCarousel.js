// components/DynamicCarousel.js
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import Image from 'next/image';



const DynamicCarousel = ({ images = [] }) => {
    return (
        <div className="mt-20">
            <Carousel className="w-fit h-fit">
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image}
                            title={`Slide ${index + 1}`}
                            alt={`Slide ${index + 1}`}
                            width={1200} // set a default width for the image
                            height={800} // set a default height for the image
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DynamicCarousel;
