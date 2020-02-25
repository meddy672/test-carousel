import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images';
import Button from 'components/Button';


import styles from './Carousel.module.scss';

/**
 * The carouselContent array holds the content of each
 * slide. To add a new slide to the Carousel
 * you must add it to the carouselContent array inside
 * parenthesis.
 * @type {array}
 */
const carouselContent = [
  (
    <div className={styles.wrapper}>
      <section className={styles.firstSection}>
        <h1 className={styles.firstCarouselHeading}>Join Us for 2020 <br/> CNS / ATM Working Group</h1>
      </section>
      <section className={styles.secondSection}>
        <p className={styles.title}>Wright-Patterson Air Force Base</p>
        <h1 className={styles.eventDate}>June 1-4, 2020</h1>
        <Button
          large
          className={styles.registerBtn}
          secondary>Register
        </Button>
      </section>
      <img className={styles.img} src={Images.carouselImageOne} alt=""/>
    </div>
  ),
  (
    <div className={styles.wrapper}>
      <section className={styles.firstSection}>
        <h1 className={styles.secondCarouselHeading}>Need Parts</h1>
        <p className={styles.ourProductParagraph}>Our Product Catalog has you covered</p>
        <Link to="/my-cns-atm/catalog">
          <Button large secondary>Browse</Button>
        </Link>
        <Link className={styles.learnMoreLink} to="#">
          <strong className={styles.semiBold}>Learn More</strong>
        </Link>
      </section>
      <img className={styles.img} src={Images.carouselImageTwo} alt=""/>
    </div>
  ),
  (
    <div className={styles.wrapper}>
      <video className={styles.video} muted autoPlay loop>
        <source src={Images.carouselImageThree} type="video/mp4" />
      </video>
    </div>
  )

];

/**
 * Custom arrow indicators that are used on the carousel's
 * leftArrow and rightArrow props.
 * @type {Object}
 */
const arrow =
  {
    left: <i className={'fal fa-chevron-left ' +
        `${styles.carouselArrows} ${styles.carouselArrowLeft}`}/>,
    right: <i className={'fal fa-chevron-right ' +
        `${styles.carouselArrows} ${styles.carouselArrowRight}`}/>
  };


export { carouselContent, arrow };
