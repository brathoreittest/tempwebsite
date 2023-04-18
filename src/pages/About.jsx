import React from "react";
import { Link } from 'react-router-dom'; // import the Link component
import '../css/Sidebar.css';

export default function About() {
  return (
    <div className="row">
    <div className="col-12 bg-success"><h3>About</h3></div>
    <div className="col-3 bg-dark text-white">3</div>
    <div className="col-9 bg-dark text-white">9</div>
    <Link to="/">Go back to home page</Link> {/* Use the Link component with a "/" path */}
    </div>
  );
};