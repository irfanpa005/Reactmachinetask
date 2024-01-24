import React, { useState, useEffect } from 'react'
import SideNavbar from '../components/SideNavbar'
import TopNavbar from '../components/TopNavbar'
import Graph from '../components/Graph'
import styles from './dashboard.module.css'
import Pie from '../components/Pie'
import Profile from '../components/Profile'

function Dashboard() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  useEffect(() => {
      window.innerWidth < 650 ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/graph');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData();
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
            <div className={`${styles.graphCol} col-md-7 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.pieCol} col-md-4 col-12`}>
             <Pie />
            </div>
          </div>
          <br></br>
          <div className='row'>
            <div className={`${styles.graphCol} col-md-8 col-12`}>
              <Graph />
            </div>
            <div className={`${styles.profCol} col-md-3 col-12`}>
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
