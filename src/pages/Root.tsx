import About from '../components/sections/About';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';

export default function Root() {
  return (
    <>
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}
