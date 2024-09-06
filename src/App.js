
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className='bg-[#222222] w-full h-screen'>
      <NavBar/>
      <Hero/>
      <Bio/>
      <Projects/>
      <Skills/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
