import React from "react";
import styles from "./dashboard.module.css";
import Graph from "../../../components/Graph/Graph";
import PieComponent from "../../../components/PieChart/PieComponent";
import Tabledata from "../../../components/Table/Tabledata";
import Profile from "../../../components/Profile/Profile";

function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className={`${styles.graphCol} col-md-8 col-12`}>
          <Graph />
        </div>
        <div className={`${styles.pieCol} col-md-4 col-10`}>
          <PieComponent />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className={`${styles.tableCol} col-md-9 col-12`}>
          <Tabledata />
        </div>
        <div className={`${styles.profCol} col-md-3 col-10`}>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
