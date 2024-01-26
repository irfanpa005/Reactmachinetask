import React from "react";
import styles from "./sidenavbar.module.css";
import briefcase from "../../assets/Briefcase.png";
import shutdown from "../../assets/Shutdown.png";
import circlemenu from "../../assets/Circled Menu.png";
import support from "../../assets/Support.png";
import puzzle from "../../assets/Puzzle.png";
import help from "../../assets/Help.png";
import statboard from "../../assets/StatBoard.png";

function SideNavbar() {
  const sideButtons = [
    { icon: circlemenu, title: "Dashboard" },
    { icon: support, title: "Support" },
    { icon: puzzle, title: "Plugins" },
    { icon: help, title: "Help" },
  ];

  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.brfCaseImgContainer}>
        <img src={briefcase} className={styles.brfCaseImg} />
        <img src={statboard} className={styles.brfCaseImg} />
      </div>
      <div className={styles.sideNavButtons}>
        <ul>
          {sideButtons.map((button, index) => (
            <li key={index}>
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
