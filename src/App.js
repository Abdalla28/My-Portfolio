import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import Certificates from './components/Certificates';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from "framer-motion";
import './index.css';
import './GlobalStyles.css';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        className="overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        key="main-app"
      >
        <CustomCursor />
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Certificates />
        <Contact />
        <ScrollToTop />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;