import React, { useState, useEffect } from 'react'
import SideNavbar from '../components/SideNavbar/SideNavbar'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import Graph from '../components/Graph/Graph'
import styles from './dashboard.module.css'
import PieComponent from '../components/PieChart/PieComponent'
import Profile from '../components/Profile/Profile'
import Tabledata from '../components/Table/Tabledata'
import NavIcon from '../assets/NavIcon'
import NavIconW from '../assets/NavIconW'

function Dashboard() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  useEffect(() => {
      window.innerWidth < 650 ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
  }, []);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className={styles.mainPage}>
      <div className={styles.navIcon} onClick={toggleSidebar}> {isSideBarOpen ? <NavIconW /> : <NavIcon /> } </div>
      {isSideBarOpen &&
      <div className={styles.SideNavbar}>
        <SideNavbar />
      </div> }
      <div className={styles.mainContent}>
        <div className={styles.topNavbar}>
          <TopNavbar isSideBarOpen={isSideBarOpen} setisSideBarOpen={setIsSideBarOpen}/>
        </div>
        <div className={styles.dataContents}>
          <div className='row'>
            <div className={`${styles.graphCol} col-md-8 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.pieCol} col-md-4 col-10`}>
              <PieComponent />
            </div>
          </div>
          <br></br>
          <div className='row'>
            <div className={`${styles.tableCol} col-md-9 col-12`}>
              <Tabledata />
            </div>
            <div className={`${styles.profCol} col-md-3 col-10`}>
             <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
