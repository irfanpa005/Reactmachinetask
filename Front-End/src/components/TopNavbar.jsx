import React, { useState } from 'react'
import styles from './topnavbar.module.css';
import profilePic from '../assets/Rectangle 10.png'
import NavIcon from '../assets/NavIcon';
import CloseButton from '../assets/CloseButton';
import NavIconW from '../assets/NavIconW';

function TopNavbar({isSideBarOpen, setisSideBarOpen}) {
  const [closeButton, setCloseButton] = useState(false);

  const toggleSidebar = () => {
    setCloseButton(!closeButton);
    setisSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className={styles.topNavbarContainer}>
      <div className={styles.navIcon} onClick={toggleSidebar}> {isSideBarOpen ? <NavIconW /> : <NavIcon /> } </div>
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
