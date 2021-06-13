import React from 'react';
import styles from './HowDoNamingContestWorks.module.sass';
import CONSTANTS from '../../../constants';

const HowDoNamingContestWork = () => {
  return (
    <section className={styles.howDoNamingContestWorkContainer}>
      <div className={styles.heading}>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HowItWorksPageImg/cup.png`}/>
        <h3 className={styles.heading}>How Do Naming Contests Work?</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HowItWorksPageImg/tableHuman.png`}/>
        </div>
        <div className={styles.discriptionListContainer}>
          <ul className={styles.discriptionList}>
            <li className={styles.discriptionItemContainer}>
              <div className={styles.discriptionItem}>
                <div className={styles.discriptionItemNumber}>1.</div>
                <span className={styles.discription}>
                  Fill out your Naming Brief and begin receiving name ideas in
                  minutes
                </span>
              </div>
            </li>
            <li className={styles.discriptionItemContainer}>
              <div className={styles.discriptionItem}>
                <div className={styles.discriptionItemNumber}>2.</div>
                <span className={styles.discription}>
                  Rate the submissions and provide feedback to creatives.
                  Creatives submit even more names based on your feedback.
                </span>
              </div>
            </li>
            <li className={styles.discriptionItemContainer}>
              <div className={styles.discriptionItem}>
                <div className={styles.discriptionItemNumber}>3.</div>
                <span className={styles.discription}>
                  Our team helps you test your favorite names with your target
                  audience. We also assist with Trademark screening.
                </span>
              </div>
            </li>
            <li className={styles.discriptionItemContainer}>
              <div className={styles.discriptionItem}>
                <div className={styles.discriptionItemNumber}>4.</div>
                <span className={styles.discription}>
                  Pick a Winner. The winner gets paid for their submission.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowDoNamingContestWork;
