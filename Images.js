/**
 * Image directory sets the path where Carousel images are saved.
 * @type {string}
 */
const imageDirectory = process.env.PUBLIC_URL + '/images/carouselImages/';

/**
 * Slide Images object contains the filename for an image to be displayed
 * on a slide. To use an image on a slide add it to slideImages object. You
 * can then reference the image within CarouselContent.js by calling the key of the filename.
 * @type {{key: filename}}
 */
const slideImages = {
  carouselImageOne: imageDirectory + 'Carousel_Working_Group.png',
  carouselImageTwo: imageDirectory + 'Carousel_Catalog.png',
  carouselImageThree: imageDirectory + 'Demo.mp4',
};

export default slideImages;
