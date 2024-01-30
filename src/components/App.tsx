import About from '../pages/About';
import Home from '../pages/Home';
import Nav from './Nav';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
