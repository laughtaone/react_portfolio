import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import History from './pages/History/History';
import Works from './pages/Works/Works';
import AboutSite from './pages/AboutSite/AboutSite';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/works" element={<Works />} />
          <Route path="/AboutSite" element={<AboutSite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
