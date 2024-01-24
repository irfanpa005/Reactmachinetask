import React, { useState, useEffect } from 'react'
import styles from './pie.module.css'
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";

function PieComponent() {
const [datas, setDatas] = useState([]);

const COLORS = ['#3bbf5e', '#63d481', '#9dcfaa', '#c5decc', '#509481'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/pie-chart`).then((response) => {
      setDatas(response.data);
      console.log(response.data);
    });
  }, []);


  return (
    <div className={styles.pieContainer}>
      <ResponsiveContainer width="100%" height="100%">
        { datas && <PieChart width={400} height={400}>
          <Pie
            data={datas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="value"
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>
          <Legend
              verticalAlign="bottom"
              height={72} // Adjust the height to accommodate two lines per legend item
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>
                  {value}
                </span>
              )}
            />
        </PieChart> }
      </ResponsiveContainer>
    </div>
  )
}

export default PieComponent
