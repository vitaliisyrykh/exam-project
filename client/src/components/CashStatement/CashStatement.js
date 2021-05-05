import React from 'react';
import styles from './CashStatement.module.sass';

const CashStatement = props => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.heading}>
        <h3>
          Cash Statement
        </h3>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Id</span>
          <span className={styles.valueSpan}>123</span>
          <span className={styles.valueSpan}>32</span>
        </div>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Earned money</span>
          <span className={styles.valueSpan}>+100</span>
          <span className={styles.valueSpan}>+25</span>
        </div>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Spent money</span>
          <span className={styles.valueSpan}>-200</span>
          <span className={styles.valueSpan}>-40</span>
        </div>
      </div>
    </section>
  );
};

export default CashStatement;
