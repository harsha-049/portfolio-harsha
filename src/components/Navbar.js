import React from 'react';

function Navbar({ setActiveSection }) {
  return (
    <nav>
      <button onClick={() => setActiveSection('About')}>About</button>
      <button onClick={() => setActiveSection('Projects')}>Projects</button>
      <button onClick={() => setActiveSection('Contact')}>Contact</button>
    </nav>
  );
}

export default Navbar;
