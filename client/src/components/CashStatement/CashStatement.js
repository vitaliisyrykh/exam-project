import React from 'react';
import styles from './CashStatement.module.sass';

const CashStatement = props => {
  const { arrTransactions, totalRecived, totalSpend } = props;

  return (
    <section className={styles.mainContainer}>
      <div className={styles.heading}>
        <h3>Cash Statement</h3>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Id</span>
          {arrTransactions.map(t => (
            <span className={styles.valueSpan}>{t.id}</span>
          ))}
        </div>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Earned money</span>
          {arrTransactions.map(t => (
            <span className={styles.valueSpan}>+{t.received}</span>
          ))}
        </div>
        <div className={styles.valueColumn}>
          <span className={styles.headingSpan}>Spent money</span>
          {arrTransactions.map(t => (
            <span className={styles.valueSpan}>-{t.spend}</span>
          ))}
        </div>
      </div>
      <div className={styles.totalRow}>
        <span>Total</span>
        <span>{totalRecived}</span>
        <span>{totalSpend}</span>
      </div>
    </section>
  );
};

export default CashStatement;
