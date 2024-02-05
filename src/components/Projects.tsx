import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projectsData } = useContext(ProjectsContext);

  const { theme } = useContext(ThemeContext);

  return (
    <section
      id='projects'
      className='min-h-screen w-screen flex flex-col justify-center items-center m-auto gap-16'
    >
      <h2
        className={`${
          theme === 'light' ? 'text-neutral-900' : ''
        } text-4xl -mb-10 font-poppins font-semibold`}
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
        {projectsData.map((projectData: any) => (
          <ProjectCard
            key={projectData.id}
            id={projectData.id}
            img={projectData.img}
          />
        ))}
      </div>

      <a
        href='https://github.com/LevyMonteiro?tab=repositories'
        target='_blank'
        className={`${
          theme === 'light'
            ? 'bg-violet-600 hover:bg-opacity-90'
            : 'bg-neutral-600 hover:brightness-110'
        } px-8 py-2 rounded-[3px] text-lg`}
      >
        See All
      </a>
    </section>
  );
}
