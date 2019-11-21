import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
const carouselOptions = {
    showArrows: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 2000,
    transitionTime: 400,
};

const DemoCarousel = (props)=> {
    return (
        <Carousel {...carouselOptions}>
            {props.elements.map((element) => (
                <div key={element.legend}>
                    <img src={element.image} />
                    <p className="legend">{element.legend}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default DemoCarousel;