import React from 'react';
import * as CarouselContent from './CarouselContent';
import ReactCarousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import styles from './Carousel.module.scss';

/**
 * The Carousel is implemented using the react-Carousel
 * library. The Carousel slides {carouselContent} are imported from CarouselContent.js
 * The carouselContent is an array of slide content.
 * @returns {Carousel}
 */
function Carousel() {
  return (
    <ReactCarousel
      infinite
      centered
      offset={40}
      autoPlay={8000}
      slidesPerPage={1}
      stopAutoPlayOnHover
      addArrowClickHandler
      className={styles.centerCarousel}
      slides={CarouselContent.carouselContent}
      arrowLeft={CarouselContent.arrow.left}
      arrowRight={CarouselContent.arrow.right} >
    </ReactCarousel>
  );
}

export default Carousel;
