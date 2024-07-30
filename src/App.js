import './App.css';

import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import AboutMe from './components/Aboute/AboutMe';


function App() {
  return (
    <div className="App">
    <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
