import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Root() {
  return (
    <>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
