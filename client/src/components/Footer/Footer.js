import React, { Component } from 'react'
import styles from './Footer.module.sass'
import CONSTANTS from '../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  const topFooterItemsRender = item => {
    console.log(item)
    return (
      <div key={item.title}>
        <h4>{item.title}</h4>
        {item.items.map(i => (
          <Link to={item.href} key={i}>
            <span>{i}</span>
          </Link>
        ))}
      </div>
    )
  }
  const topFooterRender = () => {
    return CONSTANTS.FooterItems.map(item => topFooterItemsRender(item))
  }
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div>{topFooterRender()}</div>
      </div>
    </div>
  )
}

export default Footer
