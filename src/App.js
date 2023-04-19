//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './css/Sidebar.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12"><Header /></div>
      </div>
      <div className="row">
        <div className="col-3 bg-success"><Sidebar /></div>
        <div className="col-9 bg-primary">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};
export default App;
