import About from '../components/About';
import Home from '../components/Home';
import Projects from '../components/Projects';

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
