
import './App.css';
import { useState } from 'react';

// import Intro from './components/intro/Intro';
import Profile from './components/home/Profile';
import Projects from './components/Projects/Projects';
import Topbar from './components/Topbar/Topbar';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Profile />
      <About />
      <Skills />
     <Portfolio />
     <Contact />
     <Footer />
     
    </div>
  );
}

export default App;
