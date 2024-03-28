import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Chat from './Chat';
import './App.css'; // 確保已經導入 App.css

function App() {
  const [count, setCount] = useState(() => {
    const initialValue = localStorage.getItem('visitCounter');
    return initialValue ? JSON.parse(initialValue) : 0;
  });

  useEffect(() => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('visitCounter', JSON.stringify(newCount));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            {/* 將計數器顯示在這裡 */}
            <li className="counter-display">Visitor Counter: {count}</li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
