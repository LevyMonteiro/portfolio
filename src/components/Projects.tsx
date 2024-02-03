import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Project from './Project';

export default function Projects() {
  const projectsInfo = [
    {
      id: 'Random Quote Machine',
      img: 'src/assets/img/random-quote-machine.png',
      link: '',
    },
    { id: 'Social Tree', img: 'src/assets/img/social-tree.png', link: '' },
    { id: 'Landing Page', img: 'src/assets/img/landing-page.png', link: '' },
    { id: 'Drum Machine', img: 'src/assets/img/drum-machine.png', link: '' },
    { id: 'Timer', img: 'src/assets/img/timer.png', link: '' },
    { id: 'Calculator', img: 'src/assets/img/calculator.png', link: '' },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <section
      id='projects'
      className='min-h-screen w-screen flex flex-col justify-center items-center m-auto gap-16'
    >
      <h2
        className={`${
          theme === 'light' ? 'text-black' : ''
        } text-4xl font-bold -mb-10 `}
      >
        Projects
      </h2>

      <p
        className={`${
          theme === 'light' ? 'text-black' : ''
        } text-xl font-medium  opacity-80`}
      >
        These are some projects i've built
      </p>

      <div
        id='projects-container'
        className='w-[1184px] grid grid-cols-3 gap-7'
      >
        {projectsInfo.map((projectInfo) => (
          <Project info={projectInfo} key={projectInfo.id} />
        ))}
      </div>
    </section>
  );
}
