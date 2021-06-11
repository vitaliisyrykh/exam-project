import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeaturedIn.module.sass';

const FeaturedIn = () => {
  return (
    <section className={styles.featuredInContainer}>
      <span className={styles.text}>Featured in</span>
      <div className={styles.imgContainer}>
        <Link className={styles.imgLink}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/forbes.svg' alt='forbes'/>
        </Link>
        <Link className={styles.imgLink}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/TNW.svg' alt='TNW'/>
        </Link>
        <Link className={styles.imgLink}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/chicago.svg' alt='chicago'/>
        </Link>
        <Link className={styles.imgLink}>
          <img src='https://www.squadhelp.com/resources/assets/imgs/front/Mashable.svg' alt='mashable'/>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedIn;
