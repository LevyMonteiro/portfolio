import { useContext } from 'react';
import Card from '../Card';
import { ThemeContext } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useContext(ThemeContext);

  const skills: string[] = [
    'HTML & CSS',
    'JavaScript',
    'Git & Github',
    'React',
    'Tailwind',
    'Bootstrap',
    'BEM',
    'Sass',
    'ESLint',
    'Prettier',
    'Redux',
    'Typescript',
    'JQuery',
    'Vercel',
  ];

  return (
    <section
      id='about'
      className={`${
        theme === 'light' ? 'bg-violet-800' : 'bg-neutral-900'
      } w-screen flex justify-center py-32`}
    >
      <div
        id='about-container'
        className='max-w-[1184px] h-full flex flex-col px-10 md:px-16 2xl:px-0 2xl:flex-row gap-16'
      >
        <div
          id='description'
          className='h-min 2xl:h-[396px] font-poppins flex flex-col 2xl:justify-between gap-7'
        >
          <h2
            className={`${
              theme === 'light' ? 'text-white' : ''
            } text-4xl font-semibold text-center`}
          >
            Nice to meet you!
          </h2>

          <p className='text-lg opacity-85 text-center 2xl:text-left  text-white leading-7'>
            I'm a Front-end web developer, dedicating myself full time to
            programming work and studies. Passionate about everything that
            encompasses the technology area, I bring a unique perspective shaped
            by my experiences.
          </p>
          <p className='text-lg opacity-85 text-center 2xl:text-left text-white leading-7'>
            Before diving into tech, volunteered in the technology area of my
            church for a few years and also did freelance works in photo shoots,
            filming weddings, and parties.
          </p>
          <p className='text-lg opacity-85 text-center 2xl:text-left text-white leading-7'>
            Beyond tech, I'm passionate about sports and deeply interested in
            Bible studies and topics. Always excited to learn and progress, I
            love collaborating. Feel free to contact me!
          </p>
        </div>

        <div
          id='skills'
          className='h-min 2xl:h-full text-center font-poppins flex flex-col gap-8'
        >
          <h2
            className={`${
              theme === 'light' ? 'text-white' : ''
            } text-4xl font-semibold`}
          >
            My Skills
          </h2>

          <p className='text-lg opacity-85 text-center text-white mb-2'>
            Some skills and technologies I’ve been working with recently:
          </p>

          <div
            id='cards'
            className='flex flex-wrap justify-center items-center gap-3 md:w-[85%] mx-auto'
          >
            {skills.map((skill: string) => (
              <Card skill={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
