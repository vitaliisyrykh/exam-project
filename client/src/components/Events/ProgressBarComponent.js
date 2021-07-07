import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './ProgressBarComponent.module.sass';

const ProgressBarComponent = props => {
  const percentage = 73;

  return (
    <div styles={styles}>
      <h3>React Bootstrap Progress Bar Demo</h3>

      <ProgressBar
        className={styles.progressBar}
        now={percentage}
        label={`${percentage}%`}
      />
    </div>
  );
};

export default ProgressBarComponent;
