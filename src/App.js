
import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Profile from './components/profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Profile />
     <Intro />
     <About />
     <Projects />
    </div>
  );
}

export default App;
