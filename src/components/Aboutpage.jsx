import React from "react";
import { Link } from "react-router-dom";

// Main page is the landing page. In this, we go to other pages.

export default function Aboutpage () {
    return (
        <div>
           <h1>This is About Page</h1>
            <Link to="/employer">Go to Employer page</Link>
            <Link to="/employee">Go to Employee page</Link>
        </div>
    )
}