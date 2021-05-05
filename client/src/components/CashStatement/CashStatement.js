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
          <span>Id</span>
          <span>123</span>
          <span>32</span>
        </div>
        <div className={styles.valueColumn}>
          <span>Earned money</span>
          <span>+100</span>
          <span>+25</span>
        </div>
        <div className={styles.valueColumn}>
          <span>Spent money</span>
          <span>-200</span>
          <span>-40</span>
        </div>
      </div>
    </section>
  );
};

export default CashStatement;
