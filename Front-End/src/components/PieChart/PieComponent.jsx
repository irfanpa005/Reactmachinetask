import React, { useState, useEffect } from 'react'
import styles from './pie.module.css'
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { BaseUrl } from '../../services';

function PieComponent() {
const [pieDatas, setPieDatas] = useState([{"label":"no data","value":"no data"}]);

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

const getpieDatas = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/api/pie-chart`);
    setPieDatas(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  useEffect(() => {
    getpieDatas();
  }, []);


  return (
    <div className={styles.pieContainer}>
      <div className={styles.title}><p>Pie Diagram</p></div>
      <ResponsiveContainer width="100%">
        <PieChart width={200} height={400}>
          <Pie
            data={pieDatas}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            dataKey="value"
          >
            {pieDatas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>
          <Legend
              verticalAlign="bottom"
              layout='vertical'
              align='center'
              formatter={(value, entry, index) => (
                  <span style={{ color: 'black', fontSize: '15px'}}>
                    {pieDatas[index].label}
                  </span>
              )}
            />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieComponent
