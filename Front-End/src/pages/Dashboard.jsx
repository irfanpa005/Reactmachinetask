import React from 'react'
import SideNavbar from '../components/SideNavbar'
import TopNavbar from '../components/TopNavbar'
import Graph from '../components/Graph'
import styles from './dashboard.module.css'
import Pie from '../components/Pie'

function Dashboard() {
  return (
    <div className={styles.mainPage}>
      <div className='sideNavBar'>
        <SideNavbar />
      </div>
      <div className={styles.mainContent}>
        <div className='topNavbar'>
          <TopNavbar />
        </div>
        <div className={styles.dataContents}>
          <div className='row'>
            <div className={`${styles.graphCol} col-md-7 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.pieCol} col-md-4 col-12`}>
             <Pie />
            </div>
          </div>
          <br></br>
          <div className='row'>
            <div className={`${styles.graphCol} col-md-7 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.pieCol} col-md-4 col-12`}>
             <Pie />
            </div>
          </div>



          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
