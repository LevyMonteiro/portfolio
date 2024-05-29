import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion, useScroll } from 'framer-motion';

export default function Root() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='progress-bar'
      />
      <Nav currentPage='root' />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer currentPage='root' />
    </div>
  );
}
