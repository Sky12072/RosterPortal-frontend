import React from "react";

import rosterportal from '../assets/images/roster.png'


export default function Mainpage () {
    return (
        <div style={{
            borderRadius: 35,
            backgroundColor: "#f7f2c6",
            padding: "18px 25px 50px",
            fontSize: "18px",
            margin: "30px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems:'center'
        }}>
           <h1 style={{color:'#21b6ae'}}>Welcome to Roster Portal</h1>
           <img
            src= {rosterportal}
            alt="unsplash"
            style={{width: '40%'}}
            />
        </div>
    )
}

