import React, { Suspense, useState, useEffect } from "react";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import styles from "./home.module.css";
import NavIcon from "../assets/NavIcon";
import NavIconW from "../assets/NavIconW";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  useEffect(() => {
    window.innerWidth < 650 ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
  }, []);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.navIcon} onClick={toggleSidebar}>
        {" "}
        {isSideBarOpen ? <NavIconW /> : <NavIcon />}{" "}
      </div>
      {isSideBarOpen && (
        <div className={styles.SideNavbar}>
          <SideNavbar />
        </div>
      )}
      <div className={styles.rightSide}>
        <TopNavbar
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setIsSideBarOpen}
        />
        <div className={styles.mainContent}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
