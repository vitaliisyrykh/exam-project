import React from 'react'
import styles from './HowDoesSquadhelpWork.module.sass'
const HowDoesSquadhelpWork = props => {
  return (
    <section className={styles.howDoesSquadhelpWorkMainContainer}>
      <div className={styles.flexContainer}>
        <article className={styles.textAndVideoHowDoesSquadhelpWork}>
          <span className={styles.raitingSpan}>Word`s #1 Naming Platform </span>
          <h3 className={styles.heading}>How Does Squadhelp Work?</h3>
          <p className={styles.paragraph}>
            Squadhelp helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
          <button className={styles.playBtn}>
            <svg width='28' height='28' viewBox='0 0 24 24' fill='white'>
              <path d='M8,5.14V19.14L19,12.14L8,5.14Z' />
            </svg>
            <span>Play Video</span>
          </button>
        </article>
        <div className='imgContainer'></div>
      </div>
    </section>
  )
}

export default HowDoesSquadhelpWork
