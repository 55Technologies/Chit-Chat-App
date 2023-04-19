import React from 'react';
import '../src/css/style.css';
// import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { sidebar } from './components/SideBar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { DashBoard } from './components/DashBoard';
import Feed from './components/Feed';

function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/feed" element={<Feed/>} />
          </Routes>
        </Router>
    );
}

export default App;
