import React, { useState, useEffect } from 'react'
import SideNavbar from '../components/SideNavbar'
import TopNavbar from '../components/TopNavbar'
import Graph from '../components/Graph'
import styles from './dashboard.module.css'
import PieComponent from '../components/PieComponent'
import Profile from '../components/Profile'
import Tabledata from '../components/Tabledata'

function Dashboard() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  useEffect(() => {
      window.innerWidth < 650 ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
  }, []);

  return (
    <div className={styles.mainPage}>
      {isSideBarOpen &&
      <div className={styles.SideNavbar}>
        <SideNavbar />
      </div> }
      <div className={styles.mainContent}>
        <div className='topNavbar'>
          <TopNavbar isSideBarOpen={isSideBarOpen} setisSideBarOpen={setIsSideBarOpen}/>
        </div>
        <div className={styles.dataContents}>
          <div className='row'>
            <div className={`${styles.graphCol} col-md-8 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.pieCol} col-md-3 col-12`}>
             <PieComponent />
            </div>
          </div>
          <br></br>
          <div className='row align-items-start'>
            <div className={`${styles.tableCol} col-md-9 col-12`}>
              <Tabledata />
            </div>
            <div className={`${styles.profCol} col-md-2 col-12`}>
             <Profile />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
