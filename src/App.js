import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </div>
  );
}


export default App;
