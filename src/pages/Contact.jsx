import React from "react";
import { Link } from 'react-router-dom'; // import the Link component
import '../css/Sidebar.css';

export default function Contact () {
    return (
      <div>
      <h1>Contact</h1>
      {/* Add your sign-in form here */}
      <Link to="/">Go back to home page</Link> {/* Use the Link component with a "/" path */}
    </div>
    );
  };