import React from 'react'
import styles from './topnavbar.module.css';
import profilePic from '../assets/Rectangle 10.png'

function TopNavbar() {
  return (
    <div className={styles.topNavbarContainer}>
      <h5>Good Morning ! 😊</h5>
      <div className={styles.userDetails}>
        <div>
            <h5>John Doe</h5>
            <h6>john@doe.com</h6>
        </div>
        <img src={profilePic}></img>
      </div>
    </div>
  )
}

export default TopNavbar
