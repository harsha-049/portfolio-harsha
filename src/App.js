import React, { useState, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import reducer, { initialState } from './reducer';

function App() {
  const [activeSection, setActiveSection] = useState('About');
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <Navbar setActiveSection={setActiveSection} />
      </header>

      <main>
        {activeSection === 'About' && <About />}
        {activeSection === 'Projects' && <Projects state={state} dispatch={dispatch} />}
        {activeSection === 'Contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
