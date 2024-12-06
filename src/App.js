import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import './style/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <div className="copyright">
        Copyright © 2024, Made with <i>by Prince</i>
      </div>
    </div>
  );
}

export default App;