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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
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
    </motion.div>
  );
}
