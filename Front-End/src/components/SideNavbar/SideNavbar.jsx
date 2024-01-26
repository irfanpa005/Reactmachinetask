import React from "react";
import styles from "./sidenavbar.module.css";
import briefcase from "../../assets/Briefcase.png";
import shutdown from "../../assets/Shutdown.png";
import circlemenu from "../../assets/Circled Menu.png";
import support from "../../assets/Support.png";
import puzzle from "../../assets/Puzzle.png";
import help from "../../assets/Help.png";
import statboard from "../../assets/StatBoard.png";
import { useNavigate, useLocation } from "react-router-dom";

function SideNavbar() {
  const navigateTo = useNavigate();
  const location = useLocation();
  const sideButtons = [
    { icon: circlemenu, title: "Dashboard", url: "dashboard" },
    { icon: support, title: "Support", url: "support" },
    { icon: puzzle, title: "Plugins", url: "plugins" },
    { icon: help, title: "Help", url: "help" },
  ];

  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.brfCaseImgContainer}>
        <img src={briefcase} className={styles.brfCaseImg} />
        <img src={statboard} className={styles.brfCaseImg} />
      </div>
      <div className={styles.sideButtonsCont}>
        <ul>
          {sideButtons.map((button, index) => (
            <li
              className={location.pathname === `/${button.url}` ? styles.activeButton : styles.sideNavButtons}
              key={index}
              onClick={() => {
                navigateTo(button.url);
              }}
            >
              <img src={button.icon}></img>
              <p>{button.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.logout}>
        <p>Logout</p>
        <img src={shutdown} />
      </div>
    </div>
  );
}

export default SideNavbar;
