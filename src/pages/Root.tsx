import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Nav from '../components/Nav';

export default function Root() {
  return (
    <>
      <main>
        <Nav currentPage='root' />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
