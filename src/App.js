import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Skills from "./components/skills/Skills.jsx"
import Experience from './components/experience/Experience';
import Intro from './components/intro/Intro.jsx';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Nav from './components/nav/Nav.jsx';
import Project from './components/projects/Project.jsx';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Experience/>
        <Project/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
