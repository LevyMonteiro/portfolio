import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ProjectCard({
  id,
  img,
  route,
}: {
  id: string;
  img: string;
  route: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='flex flex-col group h-min max-w-[376px] sm:w-[376px] sm:h-[248px] md:w-auto md:h-min'>
      <a href={route} className='w-full h-min'>
        <img src={img} alt={`${id} app demo`} />
        <div
          className={`${
            theme === 'light' ? 'bg-violet-600' : 'bg-violet-800'
          } text-center h-min p-4 text-lg rounded-sm transition ease-linear duration-300`}
        >
          {id}
        </div>
      </a>
    </div>
  );
}
