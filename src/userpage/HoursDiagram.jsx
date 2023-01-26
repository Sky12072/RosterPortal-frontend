import React from "react";
import { Doughnut } from "react-chartjs-2";


import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'
Chart.register(ArcElement, Legend, Tooltip);

const data = {
  labels: ["Break Time", "Working Hours"],
  
  datasets: [
    {
      data: [2.5, 37.5],
      backgroundColor: ["#FF6384", "#feb019", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#feb019", "#FFCE56"],
      
      borderWidth: 4
    }
  ]
};

var options = {        
    cutout: 90
};

const styles = {
    
    width: '300px',
    height: '300px',
    
   
};

export default function HoursDiagram() {
  return (
    <div style={styles}>
        <Doughnut data={data} options={options} />
    </div>

  
  )
}
