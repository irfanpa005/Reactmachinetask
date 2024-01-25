import React from 'react'
import styles from './sidenavbar.module.css'
import briefcase from '../../assets/Briefcase.png'
import shutdown from '../../assets/Shutdown.png'
import circlemenu from '../../assets/Circled Menu.png'
import support from '../../assets/Support.png'
import puzzle from '../../assets/Puzzle.png'
import help from '../../assets/Help.png'
import statboard from '../../assets/StatBoard.png'

function SideNavbar() {

  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.brfCaseImgContainer}>
        <img src={briefcase} className={styles.brfCaseImg} />
        <img src={statboard} className={styles.brfCaseImg} />
      </div>
      <div className={styles.sideNavButtons}>
        <ul>
            <li>
                <img src={circlemenu}></img>
                <p>Dashboard</p>
            </li>
            <li>
                <img src={support}></img>
                <p>Support</p>
            </li>
            <li>
                <img src={puzzle}></img>
                <p>Plugins</p>
            </li>
            <li>
                <img src={help}></img>
                <p>Help</p>
            </li>
        </ul>
      </div>
      <div className={styles.logout}>
        <p>Logout</p>
        <img src={shutdown} />
      </div>
    </div>
  )
}

export default SideNavbar
