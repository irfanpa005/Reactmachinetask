import React from 'react'
import styles from './topnavbar.module.css';
import profilePic from '../assets/Rectangle 10.png'
import NavIcon from '../assets/NavIcon';

function TopNavbar({isSideBarOpen, setisSideBarOpen}) {
  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className={styles.topNavbarContainer}>
      <div className={styles.navIcon} onClick={toggleSidebar}><NavIcon /></div>
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
