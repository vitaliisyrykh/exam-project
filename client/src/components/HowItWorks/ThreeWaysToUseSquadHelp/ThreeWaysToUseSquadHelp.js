import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThreeWaysToUseSquadHelp.module.sass';
import CONSTANTS from '../../../constants';
const ThreeWaysToUseSquadHelp = () => {
  return (
    <section className={styles.mainContainer}>
      <article className={styles.article}>
        <span className={styles.headingText}>Our Services</span>
        <h3 className={styles.heading}>3 Ways To Use Squadhelp</h3>
        <span className={styles.headingDiscription}>
          Squadhelp offers 3 ways to get you a perfect name for your business.
        </span>
      </article>
      <section className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}HowItWorksPageImg/1card.png`}
          />
          <h3 className={styles.cardHeading}>Launch a Contest</h3>
          <span className={styles.cardDescription}>
            Work with hundreds of creative experts to get custom name
            suggestions for your business or brand. All names are auto-checked
            for URL availability.
          </span>
          <Link to='/startContest'>
            <button className={styles.linkBtn}>Launch a Contest</button>
          </Link>
        </div>
        <div className={styles.card}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}HowItWorksPageImg/2card.png`}
          />
          <h3 className={styles.cardHeading}>Explore Names For Sale</h3>
          <span className={styles.cardDescription}>
            Our branding team has curated thousands of pre-made names that you
            can purchase instantly. All names include a matching URL and a
            complimentary Logo Design
          </span>
          <Link to='google.com'>
            <button className={styles.linkBtn}>Explore Names For Sale</button>
          </Link>
        </div>
        <div className={styles.card}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}HowItWorksPageImg/3card.png`}
            className={styles.img}
          />
          <h3 className={styles.cardHeading}>Agency-level Managed Contests</h3>
          <span className={styles.cardDescription}>
            Our Managed contests combine the power of crowdsourcing with the
            rich experience of our branding consultants. Get a complete
            agency-level experience at a fraction of Agency costs
          </span>
          <Link to='google.com'>
            <button className={styles.linkBtn}>Learn more</button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default ThreeWaysToUseSquadHelp;
