import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectCard from '../ProjectCard';
import { GitFork } from 'lucide-react';

export default function Projects() {
  const { projectsData } = useContext(ProjectsContext);

  const { theme } = useContext(ThemeContext);

  return (
    <section
      id='projects'
      className='min-h-screen w-screen flex flex-col justify-center items-center m-auto gap-16 py-24 px-4 md:px-12'
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
        className='2xl:w-[1184px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 text-white'
      >
        {projectsData.map((projectData: any) => (
          <ProjectCard
            key={projectData.id}
            id={projectData.id}
            img={projectData.img}
            route={projectData.route}
          />
        ))}
      </div>

      <a
        href='https://github.com/LevyMonteiro?tab=repositories'
        target='_blank'
        className={`${
          theme === 'light'
            ? 'bg-violet-600 hover:bg-neutral-50 border-violet-600'
            : 'bg-violet-800 hover:bg-neutral-950 border-violet-800'
        } flex items-center gap-1 px-6 py-3 text-lg rounded-sm border-[2px] text-white hover:text-violet-600 transition ease-linear duration-300`}
      >
        <GitFork />
        See All
      </a>
    </section>
  );
}
