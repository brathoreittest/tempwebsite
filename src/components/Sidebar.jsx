import React from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom'; // import the Link component
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


export default function Sidebar() {
    return (
      <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
      );
  }