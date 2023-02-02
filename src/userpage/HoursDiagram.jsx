import { useGlobalState } from "../utils/stateContext";
import { Doughnut } from "react-chartjs-2";
import React, {useEffect, useState} from "react";
import { MatchMongoUser } from "../services/authServices";
import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'
Chart.register(ArcElement, Legend, Tooltip);


const styles = {
    width: '300px',
    height: '300px',
};

export default function HoursDiagram() {

  const {store} = useGlobalState();
  const {userClaims} = store

  // to get user ID value as a page title
  const [user, setUser] = useState([])

  console.log("Employee user is: ", user)
  // const {id} = useParams()

  // console.log("params is: ", id)
  

  // to get user ID value as a page title
  useEffect(() => {
      MatchMongoUser(userClaims.user_id)
      .then(data => setUser(data))
      .catch((error) => console.log(error))
  }, [userClaims.user_id])

  console.log("getOneMongoUser IS: ",user._id)

  const data = {
    labels: ["Break Time", "Working Hours"],
    
    datasets: [
      {
        data: [user.TotalBreak, user.TotalHours],
        backgroundColor: ["#FF6384", "#feb019", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#feb019", "#FFCE56"],
        
        borderWidth: 4
      }
    ]
  };
  
  var options = {        
      cutout: 90
  };


  return (
    <div style={styles}>
        <Doughnut data={data} options={options} />
    </div>

  
  )
}
