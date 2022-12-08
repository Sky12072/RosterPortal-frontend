import React from "react";
import { Link } from "react-router-dom";

export default function EmployerPage () {
    return (
        <div>
           <h1>Welcome to Main Page</h1>
            <Link to="/employer">Go to Employer page</Link>
            <Link to="/employee">Go to Employee page</Link>
        </div>
    )
}