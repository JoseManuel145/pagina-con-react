import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import './home.css';

function App() {
  return (
    <Router>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info/>} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
