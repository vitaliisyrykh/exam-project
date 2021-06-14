import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReadyToGetStarted.module.sass';

const ReadyToGetStarted = props => {
  return (
    <section >
      <div className={styles.mainContainerGetStarted}>
        <div className={styles.containerGetStarted}>
          <h3 className={styles.headingGetStarted}>Ready To Get Started</h3>
          <span className={styles.discriptionGetStarted}>
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </span>
          <Link to='/startContest'>
            <button className={styles.btnStartContest}>Start A Contest</button>
          </Link>
        </div>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progress}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/stars.svg' />
          <p>
            <span>4.9 out of 5 stars</span> from 25,000+ customers.
          </p>
        </div>
        <div className={styles.progress}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/img2(1).png' />
          <p>
            Our branding community stands <span>200,000+</span> strong
          </p>
        </div>
        <div className={styles.progress}>
          <img
            src='https://www.squadhelp.com/resources/assets/imgs/front/sharing-files.svg'
            className={styles.modifImg}
          />
          <p className={styles.modif}>
            <span>140+ Industries </span> supported across more than{' '}
            <span>85 countries</span> – and counting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
