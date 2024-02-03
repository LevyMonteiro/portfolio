import About from './About';
import Home from '../pages/Home';
import Nav from './Nav';
import Projects from './Projects';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}
