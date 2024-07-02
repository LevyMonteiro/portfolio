import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Globe, Github } from 'lucide-react';
import Card from '../Card';
import Footer from '../Footer';

export default function ProjectDetail({
  id,
  skills,
  about,
  deploy,
  repo,
  demo,
}: {
  id: string;
  skills: string[];
  about: string[];
  deploy: string;
  repo: string;
  demo: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === 'light' ? ' bg-neutral-50 text-black' : 'bg-black text-white'
      } w-screen min-h-full flex flex-col items-center px-8 md:px-12`}
    >
      <div
        id='project-container'
        className='w-full 2xl:w-[1184px] h-min flex flex-col gap-8 pt-28 xl:flex-row'
      >
        <div
          id='col1'
          className='flex flex-col justify-start items-start gap-12 w-full xl:w-1/3 h-full'
        >
          <h1
            className={`${
              theme === 'light'
                ? 'text-shadow text-shadow-x-2 text-shadow-y-2 text-shadow-blur-2 shadow-neutral-700'
                : ''
            } w-full text-left text-4xl font-poppins font-semibold text-shadow text-violet-700`}
          >
            {id}
          </h1>

          <div
            id='skills'
            className='flex flex-col gap-7 justify-center items-center'
          >
            <h2 className='text-3xl font-semibold font-poppins text-left w-full'>
              Skills & Tools
            </h2>

            <div
              id='cards'
              className='flex flex-wrap gap-3 justify-start items-center'
            >
              {skills.map((skill) => (
                <Card skill={skill} key={skill} />
              ))}
            </div>
          </div>

          <div id='links' className='flex flex-col gap-7 text-left'>
            <h2 className='text-3xl font-semibold font-poppins'>Links</h2>

            <ul className='flex flex-col gap-5 opacity-85'>
              <li id='deploy'>
                <a
                  href={deploy}
                  className='flex gap-3 items-center hover:text-violet-700 transition duration-300 ease-linear'
                  target='_blank'
                >
                  <Globe />
                  Visit the Website
                </a>
              </li>

              <li id='repo'>
                <a
                  href={repo}
                  className='flex gap-3 items-center hover:text-violet-700 transition duration-300 ease-linear'
                  target='_blank'
                >
                  <Github />
                  Check out the code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id='col2'
          className='flex flex-col h-full w-full xl:w-2/3 gap-6 items-center'
        >
          <h2 className='text-3xl font-semibold font-poppins text-left w-full'>
            Project Overview
          </h2>

          {about.map((d) => {
            return (
              <p className='opacity-85 text-lg w-full text-left' key={d}>
                {d}
              </p>
            );
          })}

          <h2 className='text-3xl font-semibold font-poppins text-left w-full'>
            Video Demonstration
          </h2>

          <video src={demo} className='w-full md:w-11/12' controls></video>
        </div>
      </div>

      <Footer />
    </section>
  );
}
