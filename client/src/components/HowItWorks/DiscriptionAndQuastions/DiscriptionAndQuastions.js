import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../../src/constants';
import styles from './DiscriptionAndQuastions.module.sass';

const DiscriptionAndQuastions = props => {
  return (
    <section className={styles.mainContainerDiscriptionAndQuastions}>
      <div className={styles.containerDiscription}>
        <div className={styles.articleContainer}>
          <div className={styles.arrowContainer}>
          <svg width="15" height="15" viewBox="0 0 24 24" className={styles.svg}><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
          </div>
          <div className={styles.text}>
            <h3 className={styles.heading}>
              Pay a Fraction of cost vs hiring an agency
            </h3>
            <span className={styles.discription}>
              For as low as $199, our naming contests and marketplace allow you
              to get an amazing brand quickly and affordably.
            </span>
          </div>
        </div>
        <div className={styles.articleContainer} >
          <div className={styles.arrowContainer}>
          <svg width="15" height="15" viewBox="0 0 24 24" className={styles.svg}><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
          </div>
          <div className={styles.text}>
            <h3 className={styles.heading}>
            Satisfaction Guarantee
            </h3>
            <span className={styles.discription}>
            Of course! We have policies in place to ensure that you are satisfied with your experience.
            <Link to='google.com' className={styles.learnMore}>Learn more</Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.quastionsContainer}>
        <h3 className={styles.headingQuastions}>Questions?</h3>
        <span className={styles.discriptionQuastions}>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </span>
        <Link to='google.com' className={styles.link}>
          <button className={styles.btnQuastions}>Schedule Consulation</button>
        </Link>
        <a href='tel:8773553585' className={styles.phoneLink}>
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone-16.png`} alt='phone' />
          <span>(877) 355-3585</span>
        </a>
        <span>Call us for assistance</span>
      </div>
    </section>
    
  );
};

export default DiscriptionAndQuastions;
