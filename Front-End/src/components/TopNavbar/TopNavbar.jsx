import React, { useState } from 'react'
import styles from './topnavbar.module.css';
import profilePic from '../../assets/Rectangle 10.png'

function TopNavbar({isSideBarOpen, setisSideBarOpen}) {

  return (
    <div className={styles.topNavbarContainer}>
      <p className={styles.goodMorning}>Good Morning ! 😊</p>
      <div className={styles.userDetails}>
        <div>
            <p className={styles.userName}>John Doe</p>
            <p>john@doe.com</p>
        </div>
        <img src={profilePic}></img>
      </div>
    </div>
  )
}

export default TopNavbar
