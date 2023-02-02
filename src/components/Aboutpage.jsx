import { Typography } from "@mui/material";
import React from "react";

import '../assets/rectangle.css'
import unsplash from '../assets/images/unsplash.jpg'


// Main page is the landing page. In this, we go to other pages.

export default function Aboutpage () {
    return (
        <div style={{
            borderRadius: 35,
            backgroundColor: "#fce9b3",
            padding: "18px 250px",
            fontSize: "18px",
            margin: "30px",
            position: 'relative',
            // width: '70%',
            // height: 'auto'
        }}>
            <img
            src= {unsplash}
            alt="Image"
            style={{width: '40%', opacity: 0.5}}
            />
            <div className="image">
                <h1 className="about">About Roster Portal</h1>
                {/* <Link to="/employer">Go to Employer page</Link>
                <Link to="/employee">Go to Employee page</Link> */}
                <Typography sx={{ m:3, color:'#21b6ae'}}>
                A work portal website provides a centralized platform where employees can easily access their work schedules, while employers can efficiently manage their workforce. This eliminates the need for manual communication and ensures that everyone is on the same page.
                </Typography>
                <Typography  sx={{ m:3, color:'#21b6ae'}}>
                Employees can view their work rosters and know their shifts, without having to waste time contacting their managers or HR department. This allows them to plan their personal lives better and manage their time more effectively.
                </Typography>
                <Typography sx={{ m:3, color:'#21b6ae'}}>
                On the other hand, employers have the power to easily schedule their employees, ensuring that shifts are covered, and no one is overworked. With the ability to view real-time updates, they can also make any necessary changes quickly and efficiently. This streamlines the scheduling process and reduces the risk of errors.

                </Typography>

                <Typography sx={{ m:3, color:'#21b6ae'}}>
                On Roster Portal, Employer can view the timetable of the employees work schedule in that week. Employer also can roster an employee by updating the employees' schedule on update page but this can only be done when viewing an individual worker by clicking their name. Employer as an admin also able to delete an employee data. Employee can only view their roster.

                </Typography>
            </div>
           
        </div>
    )
}