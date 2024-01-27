import React, { PureComponent, useEffect, useState } from "react";
import styles from "./graph.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { BaseUrl } from "../../services";

function Graph() {
  const [graphDatas, setgraphDatas] = useState([{"x":"no data","y":"no data"}]);

const getGraphData = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/api/graph`);
    setgraphDatas(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  useEffect(() => {
    getGraphData();
  }, []);

  return (
    <div className={styles.graphContainer}>
    <ResponsiveContainer width="100%" height="100%" className="mx-auto my-auto">
          <LineChart
            width={500}
            height={300}
            data={graphDatas}
            bg-primary
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
    
    </div>
  );
}

export default Graph;
