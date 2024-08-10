import React, { useState } from 'react';
import './App.css'; // Ensure your CSS file is imported

function App() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => handleClick('home')}
        >
          Home
        </li>
        <li
          className={`navbar-item ${activeItem === 'about' ? 'active' : ''}`}
          onClick={() => handleClick('about')}
        >
          About
        </li>
        <li
          className={`navbar-item ${activeItem === 'services' ? 'active' : ''}`}
          onClick={() => handleClick('services')}
        >
          Services
        </li>
        <li
          className={`navbar-item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleClick('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default App;
