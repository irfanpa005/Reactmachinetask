import React, { useState } from 'react'
import styles from './topnavbar.module.css';
import profilePic from '../../assets/Rectangle 10.png'

function TopNavbar() {
  const [hour, setHour] = useState(new Date().getHours());

  const getGreeting = () => {
    if (hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className={styles.topNavbarContainer}>
      <p className={styles.goodMorning}>{getGreeting()} ! 😊</p>
      <div className={styles.userDetails}>
        <div className={styles.profDetails}>
            <p className={styles.userName}>John Doe</p>
            <p className={styles.email}>john@doe.com</p>
        </div>
        <img src={profilePic}></img>
      </div>
    </div>
  )
}

export default TopNavbar
